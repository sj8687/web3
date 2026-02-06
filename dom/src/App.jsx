import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import AppLayout from "./Applayout";


function App() {
  return (
    <>

      <Routes>
         <Route path="/" element={<AppLayout />}>
        <Route index  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/:id" element={<Menu />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
