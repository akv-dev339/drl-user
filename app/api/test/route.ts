import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    const journals = await prisma.journal.findMany();

    const serializedData = JSON.parse(
      JSON.stringify(
        journals,
        (_, value) =>
          typeof value === "bigint"
            ? value.toString()
            : value
      )
    );

    return NextResponse.json(serializedData);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );

  }

}