import { useState } from "react"
import axios from "axios"
import API_URL from "../config/api"
import { useNavigate } from "react-router-dom"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


const navigate = useNavigate()

const loginUser = async () => {

try{

      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password }
      )

      localStorage.setItem("userId", res.data.userId)
      localStorage.setItem("role", res.data.role)
      localStorage.setItem("name", res.data.name)
      console.log("Login successful:", res.data)

      if(res.data.role === "user"){
        navigate("/services")
      }
      else if(res.data.role === "provider"){
        navigate("/provider")
      }

    }catch(err){
      console.error(err)
      alert("Login Failed: " + (err.response?.data?.message || err.message))
    }

}

return(

<div className="login-page">

<div className="auth-container">

<h2>Login</h2>

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

<button onClick={loginUser}>
Login
</button>

<button
className="secondary-btn"
onClick={()=>navigate("/register")}
>
Register
</button>

</div>

</div>

)
}

export default Login