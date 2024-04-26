import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
    try{

        const res  = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, { cache: 'no-store' })

        const response = await res.json()
        
        if(!response) {
                return 404
            }
            return NextResponse.json(response)
        
        }catch(err){
            console.log(err)
        }
    }

    export async function POST(request: Request) {
        try{
    
            // console.log(await request.json())
            const a = await request.json()
            console.log(a)
            // const result = registerSchema.safeParse(a)
            // console.log(result)
            const res  = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, a)
            console.log(res)
            
            if(!res) {
                    alert("submitting form failed")
                    return
                }
                
                return NextResponse.json(res.data)
            }catch(err){
                console.log(err)
            }
        }