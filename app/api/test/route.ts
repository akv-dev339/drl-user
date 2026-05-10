import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json({
      success: true,
      message: "DB connected"
    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json({
      success: false,
      error: error.message,
      full: error
    });

  }

}