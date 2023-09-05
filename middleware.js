import { NextResponse } from 'next/server';

export default async function middleware(req) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/docs')) {
    return NextResponse.rewrite(new URL(pathname, "https://docs.pipeless.ai"))
  }
  return NextResponse.next()
}
