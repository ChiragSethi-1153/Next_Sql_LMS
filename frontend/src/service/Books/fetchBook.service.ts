import axios from "axios"

 const fetchBook = async (bookId: string) => {
    //    console.log(bookId)
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/books/${bookId}`)
        const resp = await response.json()
        return resp
    }

export default fetchBook