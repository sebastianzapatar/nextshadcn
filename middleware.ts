import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Todas las rutas privadas
const PROTECTED_ROUTES = ["/chef"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  console.log("📡 Middleware ejecutado:", pathname);
  console.log("🔐 Token:", token);

  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    console.log("⛔ Redirigiendo a login desde", pathname);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Intercepta todas las rutas menos las internas de Next.js
export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
