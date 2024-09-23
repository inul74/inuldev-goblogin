import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/app/prismadb";

export async function POST(request: NextRequest) {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    throw new Error("No user is signed in");
  }

  try {
    const NewStory = await prisma.story.create({
      data: {
        authorId: userId,
      },
    });

    return NextResponse.json(NewStory);
  } catch (error) {
    return NextResponse.error();
  }
}
