import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import BookingPage from "./BookingPage";
import MoreInfoPage from "./MoreInfoPage";
import AdminPage from "./AdminPage";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Best Hotel from Central Vietnam
            </span>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>

                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/">Home</Link>
                </button>
              </li>

              

              <li className="nav-item">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/BookingPage">Booking</Link>
                </button>
              </li>

              <li className="nav-item">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/MoreInfoPage">More Info</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/**Nav bar to go to other pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/MoreInfoPage" element={<MoreInfoPage />} />
      </Routes>
    </>
  );
}
