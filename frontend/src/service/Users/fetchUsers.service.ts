import axios from "axios"

 const fetchUsers = async () => {
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`)
        const resp = await response.json()
        return resp
    }

export default fetchUsers