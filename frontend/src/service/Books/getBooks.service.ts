import axios from "axios"

 const fetchBooks = async () => {
       
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/books`)
        const resp = await response.json()
        return resp
    }

export default fetchBooks