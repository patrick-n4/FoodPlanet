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
import HomePage from "./DifferentFormat/Home";
import LoginPage from "./DifferentFormat/Login";
import SignupPage from "./DifferentFormat/Signup";
import PageNotFound from "./DifferentFormat/PageNotFound";

export default function AllPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="pages/overview"
          element={
            <div className="bg-white w-[100%] h-[220vh] flex flex-col">
              <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
                <LeftNavBar logo={Logo} />
                <OverViewPage />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="pages/orders"
          element={
            <div className="bg-white w-[100%] h-[220vh] flex flex-col">
              <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
                <LeftNavBar logo={Logo} />
                <OrdersPage />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="pages/add-client"
          element={
            <div className="bg-white w-[100%] h-[220vh] flex flex-col">
              <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
                <LeftNavBar logo={Logo} />
                <AddClientPage />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="pages/clients"
          element={
            <div className="bg-white w-[100%] h-[220vh] flex flex-col">
              <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
                <LeftNavBar logo={Logo} />
                <ClientPage />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="pages/menu"
          element={
            <div className="bg-white w-[100%] h-[220vh] flex flex-col">
              <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
                <LeftNavBar logo={Logo} />
                <MenuPage />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
<<<<<<< HEAD
      <div className="bg-white w-[100%] h-[220vh] flex flex-col">
        <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
          <LeftNavBar logo={Logo} />
          <Routes>
            <Route path="/Overview" element={<OverViewPage />} />
            <Route path="/Orders" element={<OrdersPage />} /> 
            <Route path="/Addclient" element={<AddClientPage />} />
            <Route path="/Client" element={<ClientPage />} />
            <Route path="/Menu" element={<MenuPage />} />
            <Route path="*" element={<MenuPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
=======
>>>>>>> patrick-frontend
    </Router>
  );
}
