import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import {Toaster} from "react-hot-toast"
import Home from "./Pages/Home"
import Sucess from "./Pages/Sucess"
import Notfound from "./Pages/Notfound"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sucess" element={<Sucess/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Toaster/>
    </Router>
  )
}
export default App