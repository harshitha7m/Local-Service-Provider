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

const res = await axios.get(
`${API_URL}/api/providers/${providerId}`
)

setProvider(res.data)

}catch(err){

console.log("Provider not found",err)

}

}

if(!provider){
return <h2 style={{textAlign:"center"}}>Loading provider...</h2>
}

return(

<div className="provider-profile">

<div className="profile-card">

<img
src={provider.image || "https://dummyimage.com/200x200/cccccc/000000&text=Provider"}
alt="provider"
/>

<h2>{provider.name}</h2>

<div className="rating">
⭐ ⭐ ⭐ ⭐ ⭐
<span>4.5</span>
</div>

<p>📍 {provider.location}</p>

<p>📞 {provider.phone}</p>

<div className="profile-buttons">

<button
className="book-btn"
onClick={()=>navigate(`/booking/${provider._id}`)}
>
Book Service
</button>

<a
className="call-btn"
href={`tel:${provider.phone}`}
>
Call
</a>



</div>

</div>

</div>

)

}

export default ProviderDetails