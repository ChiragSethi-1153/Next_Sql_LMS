import axios from "axios";
import { cookies } from "next/headers";
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


export async function PUT(request: Request,  { params }: { params: { bookId: string }}) {
  try{
      
      const bookData = await request.json()
      console.log(bookData)
     
      const res  = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/books?bookId=${params.bookId}`, bookData, 
      {
          headers:  {
            Cookie: cookies().get("authorization")?.value
          }
        }

      )
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