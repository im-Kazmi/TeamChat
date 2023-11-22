"use server";
import prisma from "@/prisma";
import { auth } from "@clerk/nextjs";
import { MemberRole } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { v4 as uuid } from "uuid";
interface CreateServer {
  name: string;
  imageUrl: string;
}
export async function createServer(params: CreateServer) {
  try {
    const { name, imageUrl } = params;
    const { userId } = auth();

    if (!userId) {
      throw new Error("UnAuthorized");
    }
    await prisma.server.create({
      data: {
        name,
        imageUrl,
        profileId: userId as string,
        inviteCode: uuid(),
        channels: {
          create: [{ name: "general", profileId: userId as string }],
        },
        members: {
          create: [{ profileId: userId, role: MemberRole.ADMIN }],
        },
      },
    });

    revalidatePath("/app");
  } catch (error) {
    console.log(error);
  }
}

export async function getServers() {
  try {
    const servers = await prisma.server.findMany();

    console.log(servers);
    return servers;
  } catch (error) {
    console.log(error);
  }
}
