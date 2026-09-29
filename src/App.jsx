
import { BrowserRouter, Routes, Route } from "react-router";
import  Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./App.css";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ProtectedLayout from "./pages/protectedLayout"
import sidebar from "./components/Sidebar"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLayout/>}></Route>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="sidebar" element={<sidebar />} />
           <Route path="/" element={<Home />} />
          <Route path="" element={<Signin />} />
          <Route path="" element={<Signup />} />
          <Route path="" element={<Signin />} />
          <Route path="" element={<Signup />} />
          <Route path="" element={<Signin />} />
          <Route path="" element={<Signup />} />
          
      </Routes>
    </BrowserRouter>
  
  )   
  
}

export default App;
