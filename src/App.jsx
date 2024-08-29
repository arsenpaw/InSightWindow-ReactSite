import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Authorization/Login";
import Main from "./pages/Main/Main";
import Register from "./pages/Authorization/Register";
import UserAccount from "./pages/UserAccount/UserAccount";
import { AuthProvider } from "./contexts/AuthContext";
import Demo from "./test/testComponent";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter basename="/InSightWindow-ReactSite">
                <NavBar />

                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/userdetails" element={<UserAccount />} />
                        <Route path="/test" element={<Demo />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
