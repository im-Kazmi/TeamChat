import prisma from "@/prisma";
import { UserProfile, auth, currentUser } from "@clerk/nextjs";
import { v4 as uuid } from "uuid";
interface CreateServer {
  name: string;
  imageUrl: string;
  profileId: string;
}
export async function createServer(params: CreateServer) {
  try {
    const { name, imageUrl, profileId } = params;
    const { userId, user } = auth();

    if (!userId) {
      throw new Error("UnAuthorized");
    }
    const newServer = await prisma.server.create({
      data: {
        name,
        imageUrl,
        profileId: userId,
        inviteCode: uuid(),
        channels: {
          create: [{ name: "general", profileId: userId }],
        },
        members: {
          create: [{ profileId: userId, role: "ADMIN" }],
        },
      },
    });
  } catch (error) {}
}
