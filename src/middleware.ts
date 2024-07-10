import { NextRequest, NextResponse } from "next/server";
import { getServerSideUser } from "./lib/payload-utils";

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;

  try {
    const { user } = await getServerSideUser(cookies);

    if (user && ["/sign-in", "/sign-up"].includes(nextUrl.pathname)) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/`);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  return NextResponse.next();
}
