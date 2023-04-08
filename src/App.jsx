import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import About from './Pages/About/About'
import Delivery from "./Pages/Delivery/Delivery"
import Menu from "./Pages/Menu/Menu"
import Contact from "./Pages/Contact/Contact"



function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/delivery" element={<Delivery/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
