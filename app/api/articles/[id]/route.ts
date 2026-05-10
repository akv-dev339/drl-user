import { prisma } from "@/lib/prisma";
import { serializeData } from "@/lib/serialize";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;

    const article = await prisma.article.findUnique({
      where: {
        id: BigInt(id),
      },
    });

    if (!article) {

      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );

    }

    return NextResponse.json(
      serializeData(article)
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch article" },
      { status: 500 }
    );

  }

}