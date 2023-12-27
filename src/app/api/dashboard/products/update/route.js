import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let productsID = searchParams.get("id");

    let reqBody = await req.json();
    let prisma = new PrismaClient();

    let result = await prisma.products.update({
      where: { id: parseInt(productsID) },
      data: reqBody,
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
