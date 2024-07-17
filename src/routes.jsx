import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NuevoVideo from "./pages/video";

function AppRoutes () {
    return(
    <BrowserRouter>
    
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/nuevo" element={<NuevoVideo/>}></Route>
            </Routes>
    
    </BrowserRouter>
    )
}

export default AppRoutes