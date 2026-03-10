import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import API_URL from "../config/api"
function Services(){

const [services,setServices] = useState([])
const navigate = useNavigate()

useEffect(()=>{

fetchServices()

},[])

const fetchServices = async()=>{

try{

const res = await axios.get(`${API}/api/services`)

setServices(res.data)

}catch(err){
console.log(err)
}

}

return(

<div className="service-page">

<h2>Available Services</h2>

<div className="services-container">

{
services.map((s)=>(
<div 
className="service-item"
key={s._id}
onClick={()=>navigate(`/providers/${s._id}`)}
>

<h3>{s.name}</h3>
<p>Click to view providers</p>

</div>
))
}

</div>

</div>

)

}

export default Services