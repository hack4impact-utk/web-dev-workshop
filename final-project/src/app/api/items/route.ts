import { getAllItems } from "@/server/actions/TodoItem";
import dbConnect from "@/util/db-connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const items = await getAllItems();

  if (!items.length) {
    return NextResponse.json({
      error: "No items found"
    }, { status: 404 })
  }

  return NextResponse.json(items, { status: 200 })
}

/* Define your handler to create an item below */