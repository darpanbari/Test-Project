import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import AllUsers from "./pages/AllUsers";
import RegistorLocation from "./pages/RegistorLocation";
import AllLocations from "./pages/AllLocations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/attendance" element={<Dashboard/>}/>
        <Route path="/register-user" element={<RegisterUser/>}/>
        <Route path="/" element={<LoginUser/>}/>
        <Route path="/all-users" element={<AllUsers/>}/>
        <Route path="/register-location" element={<RegistorLocation/>}/>
        <Route path="/all-locations" element={<AllLocations/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
