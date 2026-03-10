import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "../App.css"

function Booking(){

const { providerId } = useParams()

const [date,setDate] = useState("")
const [timeSlot,setTimeSlot] = useState("")

const bookService = async()=>{

await axios.post("http://localhost:5000/api/bookings",{

userId: localStorage.getItem("userId"),
providerId,
date,
timeSlot,
status:"pending"

})

alert("Booking Confirmed")

}

return(

<div className="booking-page">

<div className="booking-container">

<h2>Select Date & Time</h2>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<select
value={timeSlot}
onChange={(e)=>setTimeSlot(e.target.value)}
>

<option value="">Select Time Slot</option>
<option value="9 AM">9 AM</option>
<option value="11 AM">11 AM</option>
<option value="1 PM">1 PM</option>
<option value="3 PM">3 PM</option>
<option value="5 PM">5 PM</option>

</select>

<button onClick={bookService}>
Confirm Booking
</button>

</div>

</div>

)

}

export default Booking