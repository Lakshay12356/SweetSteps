import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [mobileMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#414652]/80 backdrop-blur-sm rounded-full shadow-md m-[2%] z-50 border border-white border-opacity-20">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 overflow-hidden rounded-full cursor-pointer">
              <img
                src={Logo}
                alt="SweetSteps Logo"
                className="w-10 h-10 rounded-full"
              />
              <span
                className={`text-2xl font-bold text-white select-none transition-opacity duration-300 ${
                  mobileMenuOpen
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <Link to="/">SweetSteps</Link>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="items-center hidden space-x-8 md:flex">
              <Link
                to="/"
                className="font-medium text-white hover:text-purple-200"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className="font-medium text-white hover:text-purple-200"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  Services
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
                    {["baby-impressions", "couple", "elderly", "family"].map(
                      (route) => (
                        <Link
                          key={route}
                          to={`/${route}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          {route
                            .replace("-", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
              <Link
                to="/aboutus"
                className="font-medium text-white hover:text-purple-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="font-medium text-white hover:text-purple-200"
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link
                to="/booking"
                className="px-4 py-2"
              >
                <button className="relative px-6 py-3 overflow-hidden font-semibold text-white rounded-full shadow-lg">
                  <span className="absolute inset-0 animate-swirl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] rounded-full z-0"></span>
                  <span className="relative z-10">Book an Appointment</span>
                </button>
              </Link>
            </div>

            {/* Hamburger Menu - Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      {mobileMenuOpen && (
        <>
          {/* Overlay to dim background */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Sidebar itself */}
          <div className="fixed top-0 right-0 z-50 w-64 h-full bg-[#2d2f36] text-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-white border-opacity-10">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col p-4 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-purple-300"
              >
                Home
              </Link>

              <div className="flex flex-col">
                <button
                  className="text-left hover:text-purple-300"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  Services
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      to="/baby-impressions"
                      className="block hover:text-purple-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Baby Impressions
                    </Link>
                    <Link
                      to="/couple"
                      className="block hover:text-purple-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Couple
                    </Link>
                    <Link
                      to="/elderly"
                      className="block hover:text-purple-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Elderly
                    </Link>
                    <Link
                      to="/family"
                      className="block hover:text-purple-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Family
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/aboutus"
                className="hover:text-purple-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="hover:text-purple-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/booking"
                className="px-4 py-2 mt-4 text-center text-white bg-purple-700 rounded-full hover:bg-purple-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
