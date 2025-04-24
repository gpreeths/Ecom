
import Login from "./Pages/Login"
import { Route, Routes } from "react-router-dom"
import "./Pages.css"
import Signup from "./Pages/Signup"
import HomePage from "./Pages/Homepage"
import Cart from "./Pages/Cart"
import Item from "./Pages/Item"

function App() {
  

  return (
    <>
      <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<Item/>}/>
      </Routes>
    </>
  )
}

export default App
