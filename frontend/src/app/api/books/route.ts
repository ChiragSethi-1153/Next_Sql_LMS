import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
    try{

        const res  = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, {
            method: "GET"}
        )

        const response = await res.json()
        
        if(!response) {
                alert("submitting form failed")
                return
            }
            return NextResponse.json(response)
        
        }catch(err){
            console.log(err)
        }
    }