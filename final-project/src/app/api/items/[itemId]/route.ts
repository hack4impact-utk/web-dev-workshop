import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
  params: {
    itemId: string
  }
}

export function GET(_req: NextRequest, routeParams: RouteParams) {
  const { itemId } = routeParams.params;

  return NextResponse.json({
    itemId
  }, { status: 200})
}