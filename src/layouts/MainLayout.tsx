import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

interface NavBarProps {
  logo: string;
}

export default function MainLayout({ logo }: NavBarProps) {
  return (
    <>
      <Navbar logo={logo} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
