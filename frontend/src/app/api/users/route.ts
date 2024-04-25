import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
    try{

        const res  = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
            method: "GET"}
        )

        const response = await res.json()
        
        if(!response) {
                return 404
            }
            return NextResponse.json(response)
        
        }catch(err){
            console.log(err)
        }
    }