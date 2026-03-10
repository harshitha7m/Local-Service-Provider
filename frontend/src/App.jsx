import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Services from "./pages/Services"
import Providers from "./pages/Providers"
import Booking from "./pages/Booking"
import Provider from "./pages/Provider"
import ProtectedProvider from "./components/ProtectedProvider"
import Navbar from "./components/Navbar"

import "./App.css"

function App(){

return(

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route 
path="/services" 
element={
<div className="page-container">
<Services/>
</div>
} 
/>

<Route 
path="/providers/:serviceId" 
element={
<div className="page-container">
<Providers/>
</div>
} 
/>

<Route 
path="/booking/:providerId" 
element={
<div className="page-container">
<Booking/>
</div>
} 
/>

<Route
path="/provider"
element={
<div className="page-container">
<ProtectedProvider>
<Provider/>
</ProtectedProvider>
</div>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App