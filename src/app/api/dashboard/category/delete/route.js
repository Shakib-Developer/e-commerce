import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let categoriesID = searchParams.get("id");

    let prisma = new PrismaClient();

    let result = await prisma.categories.delete({
      where: { id: parseInt(categoriesID) },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
