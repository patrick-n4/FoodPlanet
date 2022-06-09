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
import Resto from "./Same Format/Resto";
import ResetPasswordPage from "./DifferentFormat/ResetPassword";
import CodePage from "./DifferentFormat/Code";

export default function Home() {
  return <HomePage />;
}
export function SignUp() {
  return <SignupPage />;
}
export function Login() {
  return <LoginPage />;
}
export function ResetPassword() {
  return <ResetPasswordPage />;
}
export function Code() {
  return <CodePage />;
}
export function Overview() {
  return (
    <div className="bg-white w-[100%] h-[220vh] flex flex-col">
      <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
        <LeftNavBar logo={Logo} />
        <OverViewPage />
      </div>
      <Footer />
    </div>
  );
}
export function Restos() {
  return (
    <div className="bg-white w-[100%] h-[220vh] flex flex-col">
      <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
        <LeftNavBar logo={Logo} />
        <Resto />
      </div>
      <Footer />
    </div>
  );
}
export function Orders() {
  return (
    <div className="bg-white w-[100%] h-[220vh] flex flex-col">
      <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
        <LeftNavBar logo={Logo} />
        <OrdersPage />
      </div>
      <Footer />
    </div>
  );
}
export function AddClient() {
  return (
    <div className="bg-white w-[100%] h-[220vh] flex flex-col">
      <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
        <AddClientPage />
      </div>
      <Footer />
    </div>
  );
}
export function Clients() {
  return (
    <div className="bg-white w-[100%] h-[220vh] flex flex-col">
      <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
        <LeftNavBar logo={Logo} />
        <ClientPage />
      </div>
      <Footer />
    </div>
  );
}

export function Menu() {
  return (
    <div className="bg-white w-[100%] h-[220vh] flex flex-col">
      <div className="flex flex-row bg-inherit h-[100%] w-[100%] gap-1 ">
        <LeftNavBar logo={Logo} />
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
}
export function NotFound() {
  return <PageNotFound />;
}
