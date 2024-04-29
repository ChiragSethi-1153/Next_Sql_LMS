import axios from "axios"

 const createBook = async (inputs: any) => {
    console.log('inputs: ', inputs);
       try{
            
           const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/books`, inputs, {
               headers:  {
                   "Content-Type": 'multipart/form-data',
                }
            })
            console.log(response)
            return response
        }catch(err){
            console.log(err)
            return err
        }
    }

export default createBook