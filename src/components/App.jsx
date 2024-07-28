import imgLogo from '../assets/ax2.png';
import NavBar from "./NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import "./App.css";
import {About} from "./pages/About";
import Login from "./pages/Login";




function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
