import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Booking from './Pages/Booking/Booking'
import Delivery from "./Pages/Delivery/Delivery"
import Menu from "./Pages/Menu/Menu"
import Contact from "./Pages/Contact/Contact"
import Hero from "./Pages/Home/Hero/Hero"



function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Booking/>}></Route>
        <Route path="/delivery" element={<Delivery/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
