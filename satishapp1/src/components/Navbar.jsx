import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

     
        <div className="text-2xl font-bold text-purple-600">
          MyShop
        </div>

        <div className="flex items-center gap-10">

          <nav>
            <ul className="flex items-center gap-8 text-gray-700 font-medium">
              <li><NavLink to="/" className="hover:text-purple-600 transition">Home</NavLink></li>
              <li><NavLink to="/About" className="hover:text-purple-600 transition">About</NavLink></li>
              <li><NavLink to="/Contact" className="hover:text-purple-600 transition">Contact</NavLink></li>
              <li><NavLink to="/Help" className="hover:text-purple-600 transition">Help</NavLink></li>
              <li><NavLink to="/Payments" className="hover:text-purple-600 transition">Payment</NavLink></li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/Login"
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition shadow-lg"
            >
              Login
            </NavLink>

            <NavLink
              to="/Register"
              className="text-white px-5 py-2 rounded-full hover:bg-blue-300 transition bg-blue-400"
            >
              Register
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
