import type { LayoutProps } from "@/interface";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gray-100">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
