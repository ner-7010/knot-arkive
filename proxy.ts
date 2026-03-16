import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith("/private")) {

    const auth = request.headers.get("authorization");

    if (auth) {
      const base64 = auth.split(" ")[1];
      const decoded = Buffer.from(base64, "base64").toString();
      const [user, pass] = decoded.split(":");

      if (
        user === process.env.BASIC_USER &&
        pass === process.env.BASIC_PASS
      ) {
        return NextResponse.next();
      }
    }

    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}