import axios from "axios"
const apiep = 'https://www.omdbapi.com/?apikey=6d49fa45&t='
export const fetchData = async(str)=>{
    try{
        const response =await axios(apiep + str)
        console.log(response.data)
        return response.data

    }
    catch(error){
        console.log(error)
        return error.message
    }
}