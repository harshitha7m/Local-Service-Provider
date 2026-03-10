import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import API_URL from "../config/api"

function Providers(){

const { serviceId } = useParams()
const navigate = useNavigate()

const [providers,setProviders] = useState([])

useEffect(()=>{
fetchProviders()
},[])

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

const bookService = async(providerId) => {

try{

const userId = localStorage.getItem("userId")

const date = prompt("Enter Date (YYYY-MM-DD)")
const timeSlot = prompt("Enter Time Slot (eg: 10AM)")

await axios.post(
`${API_URL}/api/bookings`,
{
providerId,
userId,
date,
timeSlot
}
)

alert("Booking Successful")

}catch(err){
console.log(err)
}

}

return(

<div className="providers-page">

<h2>Available Providers</h2>

<div className="providers-grid">

{
providers.map((p)=>(
<div className="provider-card" key={p._id}>

<div className="provider-icon">👤</div>

<h3>{p.name}</h3>

<p>Location: {p.location}</p>

<p>Phone: {p.phone}</p>

<button
onClick={()=>navigate(`/booking/${p._id}`)}
>
Book
</button>

</div>
))
}

</div>

</div>

)

}

export default Providers