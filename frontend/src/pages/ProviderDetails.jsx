import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import API_URL from "../config/api"

function ProviderDetails(){

const { providerId } = useParams()
const navigate = useNavigate()

const [provider,setProvider] = useState(null)

useEffect(()=>{
fetchProvider()
},[])

const fetchProvider = async()=>{

try{

const res = await axios.get(`${API_URL}/api/providers/${providerId}`)

setProvider(res.data)

}catch(err){

console.log("Provider not found",err)

}

}

if(!provider){
return <h2 style={{textAlign:"center"}}>Loading provider...</h2>
}

return(

<div className="provider-details">

<img
src={provider.image || "https://dummyimage.com/200x200/cccccc/000000&text=Provider"}
alt="provider"
/>

<h2>{provider.name}</h2>

<p>📍 Location: {provider.location}</p>

<p>📞 Phone: {provider.phone}</p>

<p>⭐ Rating: {provider.rating || "4.5"}</p>

<button
onClick={()=>navigate(`/booking/${provider._id}`)}
>
Book Service
</button>

</div>

)

}

export default ProviderDetails