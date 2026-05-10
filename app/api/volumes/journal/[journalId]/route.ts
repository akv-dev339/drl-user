import { prisma } from "@/lib/prisma";
import { serializeData } from "@/lib/serialize";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ journalId: string }> }
) {

  try {

    const { journalId } = await params;

    const volumes = await prisma.volume.findMany({
      where: {
        journal_id: BigInt(journalId),
      },
      orderBy: {
        year: "desc",
      },
    });

    return NextResponse.json(
      serializeData(volumes)
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch volumes" },
      { status: 500 }
    );

  }

}