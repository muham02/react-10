import axios from "axios";

 const instance = axios.create({
    baseURL: import.meta.env.VITE_GET_API,
    headers:{
        "Content-type":"application/json",
        
    },timeout:10000
  
}) 
export default instance