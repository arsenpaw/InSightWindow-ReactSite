
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import UserDetails from "./pages/UserDetails";
import {AuthProvider} from "../contexts/AuthContext";


function App() {
    return (
        <AuthProvider>
            <Router>
                <NavBar/>

                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path='/userdetails' element={<UserDetails/>}/>
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
