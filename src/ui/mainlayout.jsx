// components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Footer from "../components/footer";
import FAQSection from "../components/faq";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet /> 
      <Footer />
    </>
  );
};

export default MainLayout;
