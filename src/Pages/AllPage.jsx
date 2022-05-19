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
import LoginPage from "./DifferentFormat/LoginPage";
import SignupPage from "./DifferentFormat/SignUpPage";
export default function AllPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
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
