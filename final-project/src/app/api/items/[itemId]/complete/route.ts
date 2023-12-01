import { completeItem } from "@/server/actions/TodoItem";
import dbConnect from "@/util/db-connect";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: {
    itemId: string;
  }
}

export async function POST(req: NextRequest, routeParams: RouteParams) {
  await dbConnect();

  const { itemId } = routeParams.params;

  await completeItem(itemId);

  return NextResponse.json({}, {status: 200})
}