import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = cookies().get("authorization");
    console.log(token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
        credentials: 'include'
    });

    const response = await res.json();
    console.log(response)
    if (!response) {
      return 404;
    }
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
