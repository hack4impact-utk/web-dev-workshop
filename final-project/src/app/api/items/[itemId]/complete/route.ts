/* Define your handler to complete an item below */

import { NextRequest } from "next/server";

interface RouteParams {
  params: {
    itemId: string;
  }
}

export function POST(req: NextRequest, routeParams: RouteParams) {
  
}