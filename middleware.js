// import { NextResponse } from "next/server";

import { auth } from "@/app/_lib/auth";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(
//     new URL("http://localhost:3000/about"),
//     request.url
//   );
// }

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
