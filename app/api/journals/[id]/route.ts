import { prisma } from "@/lib/prisma";
import { serializeData } from "@/lib/serialize";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;

    const journal = await prisma.journal.findUnique({
      where: {
        id: BigInt(id),
      },
    });

    if (!journal) {

      return NextResponse.json(
        { error: "Journal not found" },
        { status: 404 }
      );

    }

    return NextResponse.json(
      serializeData(journal)
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch journal" },
      { status: 500 }
    );

  }

}