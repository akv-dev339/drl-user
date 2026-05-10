import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    const journals = await prisma.journal.findMany();

    return NextResponse.json(
      JSON.parse(
        JSON.stringify(
          journals,
          (_, value) =>
            typeof value === "bigint"
              ? value.toString()
              : value
        )
      )
    );

  } catch (error: any) {

    console.error(error);

    return NextResponse.json({
      message: error.message,
      code: error.code,
      full: String(error)
    });

  }

}