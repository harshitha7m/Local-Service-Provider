import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("user")

const navigate = useNavigate()

const registerUser = async () => {

try{

await axios.post("http://localhost:5000/api/auth/register",{

name:name,
email:email,
password:password,
role:role

})

alert("Registration Successful")

navigate("/")

}catch(err){

alert("Registration Failed")

}

}
return(

<div className="auth-container">

<h2>Register</h2>

<input
type="text"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="user">User</option>
<option value="provider">Provider</option>

</select>

<button onClick={registerUser}>
Register
</button>

<button
className="secondary-btn"
onClick={()=>navigate("/")}
>
Login
</button>

</div>

)

}

export default Register