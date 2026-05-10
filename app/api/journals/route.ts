import { prisma } from "@/lib/prisma";
import { serializeData } from "@/lib/serialize";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    const journals = await prisma.journal.findMany({
      orderBy: {
         id: "asc",
      },
    });

    return NextResponse.json(
      serializeData(journals)
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch journals" },
      { status: 500 }
    );

  }

}