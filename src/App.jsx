import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home, {
  AddClient,
  Clients,
  Login,
  Menu,
  Orders,
  Overview,
  Restos,
  SignUp,
  NotFound
} from "./Pages/AllPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pages/overview" element={<Overview />} />
        <Route path="/pages/resto" element={<Restos />} />
        <Route path="/pages/orders" element={<Orders />} />
        <Route path="/pages/add-client" element={<AddClient />} />
        <Route path="/pages/clients" element={<Clients />} />
        <Route path="/pages/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
