import axios from "axios"

 const fetchSearch = async (input: string) => {
       
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/books?body=${input}`,)
        const resp = await response.json()
        return resp
    }

export default fetchSearch