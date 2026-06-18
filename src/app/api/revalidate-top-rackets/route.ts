import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse<{ text: string }>> => {
  revalidateTag("getTopRackets", "minutes"); // { stale: 60 * 5, revalidate: 60, expire: 60 * 60 }

  return NextResponse.json({ text: "success" });
};
