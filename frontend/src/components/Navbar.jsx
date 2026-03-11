import { Link, useNavigate } from "react-router-dom"

function Navbar(){

const navigate = useNavigate()

const userId = localStorage.getItem("userId")

const logout = () => {

localStorage.removeItem("userId")
localStorage.removeItem("role")
localStorage.removeItem("name")

navigate("/login")

}

return(

<nav className="navbar">

<h2 className="logo">Local Service Provider</h2>

<div className="nav-links">

<Link to="/">Home</Link>
<Link to="/services">Services</Link>

{!userId ? (

<>
<Link to="/login" className="login-btn">Login</Link><Link to="/register" className="register-btn">Register</Link>
</>

) : (

<button className="logout-btn" onClick={logout}>
Logout
</button>

)}

</div>

</nav>

)

}

export default Navbar