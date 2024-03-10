import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"


export function middleware(req: NextRequest){

  const isAuthenticated = false;

  if(!isAuthenticated){
    return NextResponse.redirect('/login')
  }
  console.log("authenticated ");
  
  return NextResponse.next();

}


export const config = {
  matcher: ["/posts", "/posts/:path"]
}