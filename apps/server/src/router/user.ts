import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";
import { z } from "zod";

// import type { Authedctx, ctx } from "../ctx";
import { signJwt } from "../jwt";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import validatePassword from "../utils/validatePassword";
import { Prisma, UserTypeChoice } from ".prisma/client";

const oAuth2Client = new OAuth2Client();
// import { User } from ".prisma/client";

const loginData = {
  id: true,
  disabledNotifications: true,
  email: true,
  type: true,
  fullName: true,
  phone: true,
  about: true,
  _count: {
    select: {
      notifications: true,
    },
  },
};

export const userRotuer = createTRPCRouter({
  me: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      return null;
    }
    return ctx.prisma.user.findUniqueOrThrow({
      where: {
        id: ctx.user.id,
      },
      select: loginData,
    });
  }),
  login: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const e = "Invalid email or password";
      console.log("first");
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
        select: {
          ...loginData,

          // just for logic
          noOfPasswordsChanged: true,
          password: true,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: e,
        });
      }
      const { noOfPasswordsChanged, password, ...returnUser } = user;

      if (!password) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "It seems like you had previously logged in with Google. Please try logging in with Google again.",
        });
      }

      const passwordIsValid = await bcrypt.compare(input.password, password);

      if (!passwordIsValid) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: e,
        });
      }

      const token = signJwt({ id: user.id, noOfPasswordsChanged });

      return {
        user: returnUser,
        token,
      };
    }),
  register: publicProcedure
    .input(
      z.object({
        fullName: z.string(),
        phone: z.string(),
        email: z.string(),
        password: z.string(),
        confirmPassword: z.string().optional(),
        type: z.nativeEnum(UserTypeChoice),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.password != input.confirmPassword) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Passwords do not match",
        });
      }
      const passwordError = validatePassword(input.password);
      if (passwordError) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: passwordError,
        });
      }

      delete input.confirmPassword;
      const salt = await bcrypt.genSalt(10);
      const hash = bcrypt.hashSync(input.password, salt);
      input.password = hash;

      try {
        return await ctx.prisma.user.create({
          data: {
            ...input,
            noOfPasswordsChanged: 1,
          },
        });
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            const error =
              e.meta && Array.isArray(e.meta.target)
                ? `A user with this ${e.meta.target[0]} already exists.`
                : "A user must be unique.";
            console.log(e);
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: error,
            });
          } else {
            console.log(e);
            throw e;
          }
        }
        console.log(e);
        throw e;
      }
    }),
  resetPassword: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
        confirmPassword: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No user with this email was found",
        });
      }

      if (input.password != input.confirmPassword) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Passwords do not match",
        });
      }

      const passwordError = validatePassword(input.password);
      if (passwordError) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: passwordError,
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hash = bcrypt.hashSync(input.password, salt);

      const { noOfPasswordsChanged, ...returnUser } =
        await ctx.prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            password: hash,
            noOfPasswordsChanged: {
              increment: 1,
            },
          },
          select: {
            ...loginData,
            // for logic
            noOfPasswordsChanged: true,
          },
        });

      const token = signJwt({ id: user.id, noOfPasswordsChanged });

      // return the jwt
      return { user: returnUser, token };
    }),
  setNoificationId: protectedProcedure
    .input(
      z.object({
        notificationId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.user.update({
        where: {
          id: ctx.user.id,
        },
        data: {
          notificationIds: [
            ...new Set([
              ...(ctx.user.notificationIds || []),
              input.notificationId,
            ]),
          ],
        },
      });
      return true;
    }),
  removeNotificationId: protectedProcedure
    .input(
      z.object({
        notificationId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.user.update({
        where: {
          id: ctx.user.id,
        },
        data: {
          notificationIds: ctx.user.notificationIds.filter(
            (id) => id !== input.notificationId,
          ),
        },
      });
      return true;
    }),
});

async function verifyOAuthToken(idToken: string) {
  try {
    const ticket = await oAuth2Client.verifyIdToken({
      idToken,
      audience: [
        process.env.IOS_GOOGLE_CLIENT_ID || "",
        process.env.ANDROID_GOOGLE_CLIENT_ID || "",
      ],
    });
    const payload = ticket.getPayload();
    if (!payload) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Invalid token",
      });
    }
    return payload;
  } catch (e) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Invalid token",
    });
  }
}
