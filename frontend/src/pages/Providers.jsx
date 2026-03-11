import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import API_URL from "../config/api"
import ProviderCard from "../components/ProviderCard"

function Providers(){

const { serviceId } = useParams()

const [providers,setProviders] = useState([])

useEffect(()=>{
fetchProviders()
},[serviceId])

const fetchProviders = async () => {

try{

const res = await axios.get(
`${API_URL}/api/providers/service/${serviceId}`
)

setProviders(res.data)

}catch(err){
console.log(err)
}

}

return(

<div className="providers-page">

<h2>Available Providers</h2>

<div className="providers-grid">

{
providers.length === 0 ? (
<p>No providers available</p>
) : (
providers.map((provider)=>(
<ProviderCard key={provider._id} provider={provider}/>
))
)

}

</div>

</div>

)

}

export default Providers