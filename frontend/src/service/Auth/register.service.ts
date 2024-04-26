
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const loginService = async (inputs: FieldValues) => {
    const response = await axios.post("api/login", inputs)
    // console.log(response)
    return response
}
export default loginService