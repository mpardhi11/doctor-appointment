import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export default function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  function handleLogoClick() {
    navigate("/login");
  }

  return (
    <div className="flex justify-between items-center text-sm py-4 mb-4 border-b border-b-gray-400">
      <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium text-transform: uppercase">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            :
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile pic"
            />
            <img
              className="w-2.5 "
              src={assets.dropdown_icon}
              alt="dropdown ico"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 group-hover:block hidden">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/my-appointments")}
                >
                  My Appointments
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => setToken(false)}
                >
                  Logout{" "}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block "
            onClick={handleLogoClick}
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
}
