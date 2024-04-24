import axios from "axios"

 const fetchBooks = async () => {
    
        const response = await axios.get(`http://localhost:3000/api/books`)
        return response
    }

export default fetchBooks