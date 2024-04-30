import axios from "axios"

 const editBook = async (inputs: any) => {
    console.log('inputs: ', inputs);
       try{
            
           const response = await axios.put(`${process.env.NEXT_PUBLIC_HOST}/api/books/${inputs.id}`, inputs.details)
            console.log(response)
            return response
        }catch(err){
            console.log(err)
            return err
        }
    }

export default editBook