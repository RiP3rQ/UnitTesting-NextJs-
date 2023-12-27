import { NextResponse } from "next/server";

export async function GET(req: any) {
  return NextResponse.json([
    {
      id: 1,
      username: "essa",
    },
    {
      id: 2,
      username: "bessa",
    },
    {
      id: 3,
      username: "messa",
    },
  ]);
}
