function Navbar(){

const logout = () => {
localStorage.clear()
window.location.href = "/"
}

return(

<div className="navbar">

<div className="logo">
Local Service Provider
</div>

<button className="logout-btn" onClick={logout}>
Logout
</button>

</div>

)

}

export default Navbar