import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-blue-500 font-semibold" : "text-gray-700";

  return (
    <>
      <nav className="flex items-center justify-between p-5 shadow-md">
        <h1 className="text-xl font-bold">Logo</h1>

        <div className="hidden lg:flex gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="menu/42" className={navLinkClass}>Menu</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>


        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>


      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}


      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex text-black items-center justify-between p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-2xl"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-5 text-gray-400">
          <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <Link to="/about"  onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="menu/42"  onClick={() => setOpen(false)}>
            Menu
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;




































// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {

//     const [open, setopen] = useState(false)
//     return (
//         <>

//             <nav className="flex items-center justify-between p-5 shadow-md">
//                 <div className="hidden lg:flex gap-22">
//                     <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
//                         Home
//                     </NavLink>

//                     <Link to="/about">About</Link>
//                     <Link to="menu/42">Menu</Link>
//                     <Link to="/contact">Contact</Link>
//                 </div>


//                 <button onClick={() => setopen(true)} className="bg-blue-500  lg:hidden text-white px-4 py-2 rounded">
//                     maun
//                 </button>
//             </nav>

//             {open && (
//                 <div
//                     className="fixed inset-0 bg-black/40 z-40"
//                     onClick={() => setopen(false)}
//                 />
//             )}


//             <aside className={`fixed top-0 left-0 h-full w-64 text-black bg-white z-50 transform transition-transform duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"}`}>
//                 <div className="flex flex-col gap-4">
//                     <Link to="/about">About</Link>
//                     <Link to="menu/42">Menu</Link>
//                     <Link to="/contact">Contact</Link>
//                 </div>
//             </aside>
//         </>
//     );
// }

// export default Navbar;
