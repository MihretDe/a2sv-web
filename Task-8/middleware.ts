import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value;
    console.log("this" , currentUser)
    if (!currentUser && request.nextUrl.pathname.startsWith('/pages/components/Home')) {
       console.log("not  access now")
        return NextResponse.redirect(new URL('/', request.url));
    }
    if (!currentUser && request.nextUrl.pathname.startsWith('/pages/components/verify')) {
       console.log("not  access now")
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

