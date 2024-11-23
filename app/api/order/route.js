import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
  if (!body)
    return NextResponse.json({ error: "Body is Required" }, { status: 400 });

  const {
    email,
    fullName,
    address,
    landmark,
    deliveryInstructions,
    area,
    city,
    phoneNumber,
    deliveryCharges,
    total,
    grandTotal,
    orderType,
    items,
    status,
  } = body;
  const order = await prisma.order.create({
    data: {
      email,
      fullName,
      address,
      landmark,
      deliveryInstructions,
      area,
      city,
      phoneNumber,
      deliveryCharges,
      total,
      grandTotal,
      orderType,
      items,
      status,
    },
  });

  return NextResponse.json(order, { status: 201 });
};

export const GET = async () => {
  const orders = await prisma.order.findMany();
  return NextResponse.json(orders, { status: 200 });
};
