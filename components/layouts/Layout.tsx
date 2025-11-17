import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
