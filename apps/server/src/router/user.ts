import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import { z } from "zod";

// import type { Authedctx, ctx } from "../ctx";
import { signJwt } from "../jwt";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import validatePassword from "../utils/validatePassword";
import { Prisma, UserTypeChoice } from ".prisma/client";

// import { User } from ".prisma/client";

const loginData = {
  id: true,
  disabledNotifications: true,
  email: true,
  type: true,
  emailVerified: true,
  fullName: true,
  _count: {
    select: {
      notifications: true,
    },
  },
  about: true,
};

export const userRouter = createTRPCRouter({
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
  create: protectedProcedure
    .input(
      z.object({
        userId: z.string().optional(),
        fullName: z.string(),
        email: z.string(),
        password: z.string().optional(),
        confirmPassword: z.string().optional(),
        phone: z.string(),
        type: z.nativeEnum(UserTypeChoice),
        about: z.string().nullish(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.type !== UserTypeChoice.ADMIN) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Only admins can create users",
        });
      }
      if (input.type === UserTypeChoice.ADMIN) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot create admin",
        });
      }

      if (!input.userId) {
        if (!input.password || !input.confirmPassword) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Password is required",
          });
        }
        if (input.password !== input.confirmPassword) {
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
        delete input.confirmPassword;

        try {
          await ctx.prisma.user.create({
            data: {
              ...input,
              password: hash,
              noOfPasswordsChanged: 0,
            },
            select: loginData,
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
          throw e;
        }
        return true;
      }
      const userId = input.userId;
      delete input.userId;
      delete input.confirmPassword;
      delete input.password;

      await ctx.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          ...input,
        },
        select: loginData,
      });
      return true;
    }),
  list: protectedProcedure
    .input(
      z.object({
        keyword: z.string().optional(),
        type: z.nativeEnum(UserTypeChoice).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      if (
        ctx.user.type !== UserTypeChoice.ADMIN &&
        input.type !== ctx.user.type
      ) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You are not allowed to access this resource",
        });
      }
      return ctx.prisma.user.findMany({
        where: {
          type: input.type,
          OR: [
            {
              fullName: {
                contains: input.keyword,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: input.keyword,
                mode: "insensitive",
              },
            },
            {
              phone: {
                contains: input.keyword,
                mode: "insensitive",
              },
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          fullName: true,
          type: true,
          phone: true,
        },
      });
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
          id: ctx.user!.id,
        },
        data: {
          notificationIds: [
            ...new Set([
              ...(ctx.user!.notificationIds || []),
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
          id: ctx.user!.id,
        },
        data: {
          notificationIds: ctx.user.notificationIds.filter(
            (id) => id !== input.notificationId,
          ),
        },
      });
      return true;
    }),
  getBasicInfo: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.userId,
        },
        select: {
          id: true,
          fullName: true,
          email: true,
          password: true,
          phone: true,
          type: true,
          about: true,
        },
      });
    }),
});
