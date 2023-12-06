import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/newsboard" element={<NewsBoard category={category}/>}/>
      </Routes>
    </Router>
      {/* <Signup/>
      <Signin/>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/> */}
    </div>
  )
}

export default App
