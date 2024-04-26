import { cookies } from "next/headers";
import axios from "axios";
import { NextResponse } from "next/server";
import { registerSchema } from "@/components/Register/RegisterForm";

axios.defaults.withCredentials = true;

export async function POST(request: Request) {
  try {
    // console.log(await request.json())
    const a = await request.json();
    console.log(a);

    
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
      a,
    );
    console.log(res)
    const token : any = res.headers["set-cookie"];
    console.log(token[0])

    // cookies().set("authorization", token[0], {
    //   httpOnly: true,
    //   secure: false,
    // });

    if (!res) {
      alert("submitting form failed");
      return;
    }
    return NextResponse.json(res.data).cookies.set("authorization", token[0]);

  } catch (err) {
    console.log(err);
  }
}
