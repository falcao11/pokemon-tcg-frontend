import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  console.log("Path: ", path);

  const isProtectedRoute = path.startsWith("/app");
  const isPublicRoute = !isProtectedRoute;

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get("access_token")?.value;

  if (!cookie && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  const response = await fetch(
    (process.env.NEXT_PUBLIC_DATABASE_URL as string) + "/me",
    {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    }
  ).then((res) => res.json());

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !response?.user_id) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    response?.user_id &&
    !req.nextUrl.pathname.startsWith("/app")
  ) {
    return NextResponse.redirect(new URL("/app", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
