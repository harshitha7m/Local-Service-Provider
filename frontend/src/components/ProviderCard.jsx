import { useNavigate } from "react-router-dom"

function ProviderCard({provider}){

const navigate = useNavigate()

return(

<div className="provider-card">

<div className="provider-img">

<img
src={provider.image || "https://dummyimage.com/150x150/cccccc/000000&text=Provider"}
alt="provider"
/>

</div>

<div className="provider-info">

<h3>{provider.name}</h3>

<p className="location">📍 {provider.location}</p>

<p className="phone">📞 {provider.phone}</p>

<div className="rating">
⭐ {provider.rating || "4.5"}
</div>

<div className="provider-buttons">

<button
className="details-btn"
onClick={()=>navigate(`/provider-details/${provider._id}`)}
>
View Details
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

export default ProviderCard