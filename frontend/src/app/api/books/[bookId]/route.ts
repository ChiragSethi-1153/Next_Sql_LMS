import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,  { params }: { params: { bookId: string }}) {
  try {
    
    console.log(params.bookId)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books/${params.bookId}`);

    const response = await res.json();

    if (!response) {
      return 404;
    }
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
