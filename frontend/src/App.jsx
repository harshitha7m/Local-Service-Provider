import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Services from "./pages/Services"
import Providers from "./pages/Providers"
import Provider from "./pages/Provider"
import Booking from "./pages/Booking"
import ProviderDetails from "./pages/ProviderDetails"

import ProtectedProvider from "./components/ProtectedProvider"

import "./App.css"

function App(){

return(

<BrowserRouter>

<Navbar/>

<div className="page-container">

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/services" element={<Services/>} />

<Route path="/providers/:serviceId" element={<Providers/>} />

<Route path="/provider-details/:providerId" element={<ProviderDetails/>} />

<Route path="/provider-dashboard" element={<Provider />} />
<Route path="/booking/:providerId" element={<Booking/>} />

<Route
path="/provider"
element={
<ProtectedProvider>
<Provider/>
</ProtectedProvider>
}
/>

</Routes>

</div>

</BrowserRouter>

)

}

export default App