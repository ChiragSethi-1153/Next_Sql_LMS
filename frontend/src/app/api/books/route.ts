import axios from "axios";
import { cookies } from "next/headers";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { searchParams }: { searchParams?: { body: string | undefined } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const body = searchParams.get("body");
    console.log(body);

    if (body) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/books?body=${body}`,
        {
          cache: "no-store",
        }
      );
      const response = await res.json();

      
      if (res.status === 404) {
        return NextResponse.json({
          status: 404,
          message: "No Book Found",
        });
      }
      return NextResponse.json(response);
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, {
        cache: "no-store",
      });
      const response = await res.json();

      if (!response) {
        return 404;
      }
      return NextResponse.json(response);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function POST(request: Request) {
  try {
    // console.log(await request.json())
    // console.log(await request.json())
    const bookData = await request.formData();
    console.log(bookData);
    // const result = registerSchema.safeParse(a)
    // console.log(result)
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/books`,
      bookData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Cookie: cookies().get("authorization")?.value,
        },
      }
    );
    console.log(res);

    if (!res) {
      alert("submitting form failed");
      return;
    }

    return NextResponse.json(res.data);
  } catch (err) {
    console.log(err);
  }
}
