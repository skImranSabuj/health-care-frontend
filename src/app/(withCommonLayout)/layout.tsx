import Footer from "@/src/components/shared/Footer/Footer";
import Navbar from "@/src/components/shared/Navbar/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
