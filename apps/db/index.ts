import { PrismaClient } from "@prisma/client";

import { sendPushNotification } from "./notification";
import { Notification } from ".prisma/client";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    // log:
    //   process.env.NODE_ENV === "development"
    //     ? ["query", "error", "warn"]
    //     : ["error"],
  });

// run sendPushNotification function on every new notification created
prisma.$use(async (params, next) => {
  const notification: Notification = await next(params);
  if (params.model !== "Notification") {
    return notification;
  }
  if (params.action === "create") {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: notification.userId,
      },
    });

    if (user.disabledNotifications.includes(notification.type)) {
      return notification;
    }

    await sendPushNotification(user, {
      body: notification.body,
      title: notification.title,
    });

    return notification;
  }
  return notification;
});

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// (async () => {
//   await prisma.building.deleteMany();
//   await prisma.floor.deleteMany();
//   await prisma.room.deleteMany();
//   await prisma.direction.deleteMany();
//   await prisma.building.create({
//     data: {
//       id: "clptsgg7g0000thfcoaknwgje",
//       name: "St. Xavier's College, Maitighar",
//       floors: {
//         create: {
//           id: "clpw6hc0x0000th78piycrjuf",
//           floor: 2,
//           rooms: {
//             create: [
//               {
//                 id: "clpw6iizx0001th78ei0dzd2d",
//                 name: "Boys Washroom",
//               },
//               {
//                 id: "clpw6ivus0002th780pmox7mk",
//                 name: "Girls Washroom",
//               },
//               {
//                 id: "clpw6j3080003th78usqku0sp",
//                 name: "PTA Lab",
//               },
//               {
//                 id: "clpw6jl4w0004th78d55ds5du",
//                 name: "Vice Principal's Office",
//               },
//             ],
//           },
//         },
//       },
//     },
//   });
//   await prisma.direction.createMany({
//     data: [
//       {
//         id: "clpw6um4t0000th70swe17roi",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6iizx0001th78ei0dzd2d",
//         toRoomId: "clpw6ivus0002th780pmox7mk",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "On your right is the Girl's Washroom.",
//         ],
//       },
//       {
//         id: "clpw6ycs00001th701v3o1z1f",
//         leadToNextQrCode: true,
//         fromRoomId: "clpw6iizx0001th78ei0dzd2d",
//         toRoomId: "clpw6j3080003th78usqku0sp",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "You have reached Girl's washroom. Please scan the QR code on the right to proceed to PTA Lab.",
//         ],
//       },
//       {
//         id: "clpw70sf90002th70m3nvj26w",
//         leadToNextQrCode: true,
//         fromRoomId: "clpw6iizx0001th78ei0dzd2d",
//         toRoomId: "clpw6jl4w0004th78d55ds5du",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "You have reached Girl's washroom. Please scan the QR code on the right to proceed to Vice Principal's Office.",
//         ],
//       },
//       {
//         id: "clpw72jss0003th70156f0jse",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6ivus0002th780pmox7mk",
//         toRoomId: "clpw6iizx0001th78ei0dzd2d",
//         instructions: [
//           "From the sign board, turn right and move 10 steps forward.",
//           "On your right is the Boy's Washroom.",
//         ],
//       },
//       {
//         id: "clpw75n350004th70k09uek4m",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6ivus0002th780pmox7mk",
//         toRoomId: "clpw6j3080003th78usqku0sp",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "Again, turn left and move 10 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "Then turn left and move 10 steps forward.",
//           "You have reached PTA Lab.",
//         ],
//       },
//       {
//         id: "clpw775e00005th705913k19d",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6ivus0002th780pmox7mk",
//         toRoomId: "clpw6jl4w0004th78d55ds5du",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "Again, turn left and move 30 steps forward.",
//           "You have reached Vice Principal's Office.",
//         ],
//       },
//       {
//         id: "clpw79f920006th703bphi4fy",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6j3080003th78usqku0sp",
//         toRoomId: "clpw6jl4w0004th78d55ds5du",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "Again, turn right and move 20 steps forward.",
//           "You have reached Vice Principal's Office.",
//         ],
//       },
//       {
//         id: "clpw7btd70007th70bdicc8ll",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6j3080003th78usqku0sp",
//         toRoomId: "clpw6ivus0002th780pmox7mk",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "Then, turn left and move 10 steps forward.",
//           "You have reached Girl's Washroom.",
//         ],
//       },
//       {
//         id: "clpw7fbhg0008th701jmmkxf2",
//         leadToNextQrCode: true,
//         fromRoomId: "clpw6j3080003th78usqku0sp",
//         toRoomId: "clpw6iizx0001th78ei0dzd2d",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "Then, turn left and move 10 steps forward.",
//           "Again, turn right and move 10 steps forward.",
//           "You have reached Girl's Washroom. Please scan the QR code on the right to proceed to Boy's Washroom.",
//         ],
//       },
//       {
//         id: "clpw7jait0009th70dis485f3",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6jl4w0004th78d55ds5du",
//         toRoomId: "clpw6j3080003th78usqku0sp",
//         instructions: [
//           "From the sign board, turn left and move 10 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "Then, turn left and move 10 steps forward.",
//           "You have reached Girl's Washroom. Please scan the QR code on the right to proceed to Boy's Washroom.",
//         ],
//       },
//       {
//         id: "clpw7jait000ath70u3o5epg5",
//         leadToNextQrCode: false,
//         fromRoomId: "clpw6jl4w0004th78d55ds5du",
//         toRoomId: "clpw6ivus0002th780pmox7mk",
//         instructions: [
//           "From the sign board, turn left and move 30 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "On your left is the Girl's Washroom.",
//         ],
//       },
//       {
//         id: "clpw7lh48000bth70iub9r7r5",
//         leadToNextQrCode: true,
//         fromRoomId: "clpw6jl4w0004th78d55ds5du",
//         toRoomId: "clpw6iizx0001th78ei0dzd2d",
//         instructions: [
//           "From the sign board, turn left and move 30 steps forward.",
//           "Then, turn right and move 10 steps forward.",
//           "You have reached Girl's Washroom. Please scan the QR code on the right to proceed to Boy's Washroom.",
//         ],
//       },
//     ],
//   });
//   console.log("Instructions added");
// })();
