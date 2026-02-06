import { Outlet } from "react-router-dom";
import Navbar from "./Componenets/Nav";
import Footer from "./Pages/Footer";

function AppLayout() {
    return (
        <>
            <Navbar />
            <div className="pt-30  text-4xl  font-bold flex justify-center items-center">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default AppLayout;
