import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const order = await prisma.order.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!order) {
    return NextResponse.json({ error: "Item Not Present" }, { status: 400 });
  }

  return NextResponse.json(order, { status: 200 });
};

export const DELETE = async ({ params }) => {
  // const session = await getServerSession(authOptions);

  // if (!session) return NextResponse.json({}, { status: 401 });

  const order = await prisma.order.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!order)
    return NextResponse.json({ error: "Invalid Order" }, { status: 404 });

  const deletedOrder = await prisma.order.delete({
    where: { id: issue.id },
  });

  return NextResponse.json(
    { message: "Order has been deleted", deletedOrder },
    { status: 200 }
  );
};
