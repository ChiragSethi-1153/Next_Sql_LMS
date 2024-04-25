import axios from "axios"
import { NextResponse } from "next/server"
import { registerSchema } from "@/components/Register/RegisterForm";

export async function POST(request: Request) {
    try{

        // console.log(await request.json())
        const a = await request.json()
        console.log(a)
        // const result = registerSchema.safeParse(a)
        // console.log(result)
        const res  = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, a)
        console.log(res.data)
        
        if(!res) {
                alert("submitting form failed")
                return
            }
            return NextResponse.json(res.data)
        
        }catch(err){
            console.log(err)
        }
    }