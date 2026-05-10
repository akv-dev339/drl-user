import { prisma } from "@/lib/prisma";
import { serializeData } from "@/lib/serialize";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;

    const volume = await prisma.volume.findUnique({
      where: {
        id: BigInt(id),
      },
    });

    if (!volume) {

      return NextResponse.json(
        { error: "Volume not found" },
        { status: 404 }
      );

    }

    return NextResponse.json(
      serializeData(volume)
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch volume" },
      { status: 500 }
    );

  }

}