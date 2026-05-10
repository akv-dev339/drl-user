import { prisma } from "@/lib/prisma";
import { serializeData } from "@/lib/serialize";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ volumeId: string }> }
) {

  try {

    const { volumeId } = await params;

    const articles = await prisma.article.findMany({
      where: {
        volume_id: BigInt(volumeId),
      },
    });

    return NextResponse.json(
      serializeData(articles)
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );

  }

}