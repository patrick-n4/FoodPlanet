import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import LeftNavBar from "../Components/LeftNavBar";
import Logo from "./../IMAGES/logo.png";
import OverViewPage from "./Same Format/OverViewPage";
import ClientPage from "./Same Format/ClientPage";
import MenuPage from "./Same Format/MenuPage";
import OrdersPage from "./Same Format/OrdersPage";
import AddClientPage from "./Same Format/AddClientPage";
import HomePage from "./DifferentFormat/HomePage";
import Login from "./DifferentFormat/Login";
import Signup from "./DifferentFormat/Signup";
import First from './DifferentFormat/First'
export default function AllPage() {
  if(<Route path="/landing"></Route>){
    return (
      <Router>
        <Routes>
          <Route path="/landing" element={<First/>}></Route>
        </Routes>
      </Router>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/landing" element={<First />} /> */}
      </Routes>
      <div className="bg-white w-[100%] h-[220vh] flex flex-col">
        <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
          <LeftNavBar logo={Logo} />
          <Routes>
            <Route path="/Overview" element={<OverViewPage />} />
            <Route path="/Order" element={<OrdersPage />} />
            <Route path="/Addclient" element={<AddClientPage />} />
            <Route path="/Client" element={<ClientPage />} />
            <Route path="/Menu" element={<MenuPage />} />
            <Route path="*" element={<MenuPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
