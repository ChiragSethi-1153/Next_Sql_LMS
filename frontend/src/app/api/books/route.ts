import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
    try{

        const res  = await axios.get(`${process.env.REACT_APP_SERVER_URL}/books`)
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