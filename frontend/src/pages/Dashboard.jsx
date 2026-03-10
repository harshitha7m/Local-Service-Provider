import { useNavigate } from "react-router-dom"
import "../App.css"

function Dashboard(){

const navigate = useNavigate()

const services = [
{ name:"Electrician", icon:"🔧" },
{ name:"Plumber", icon:"🚿" },
{ name:"Carpenter", icon:"🪚" },
{ name:"AC Repair", icon:"❄️" },
{ name:"Cleaning", icon:"🧹" },
{ name:"Painter", icon:"🎨" }
]

return(

<div className="dashboard">

<div className="top-header">
<h2>Find Home Services</h2>
</div>

<div className="service-grid">

{services.map((s,index)=>(

<div
className="service-box"
key={index}
onClick={()=>navigate("/services")}
>

<div className="service-icon">{s.icon}</div>

<p>{s.name}</p>

</div>

))}

</div>

<div className="bottom-nav">

<div>🏠</div>
<div>📋</div>
<div>💬</div>
<div>👤</div>

</div>

</div>

)

}

export default Dashboard