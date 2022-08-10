import React from "react";

import Image from "next/image";
import Instacipelogo from "../public/instalogo.png";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-cyan-400">
        <div className="container-fluid">
          <a
            className="navbar-brand mx-3 border-2 border-purple-500 rounded-xl"
            href="#"
          >
            <Image src={Instacipelogo} alt="Instacipe" width={80} height={80} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3 border-2 border-yellow-200 rounded-xl">
                <a
                  className="nav-link text-pink-500 text-lg font-bold"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Explore
                </a>
              </li>
              <li className="nav-item mx-3 border-2 border-yellow-200 rounded-xl">
                <a
                  className="nav-link text-pink-500 text-lg font-bold"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-3 border-2 border-yellow-200 rounded-xl">
                <a
                  className="nav-link text-pink-500 text-lg font-bold"
                  href="#"
                >
                  Instasearch
                </a>
              </li>
              <li className="nav-item mx-3 border-2 border-yellow-200 rounded-xl">
                <a
                  className="nav-link text-pink-500 text-lg font-bold"
                  href="#"
                >
                  FoodFacts
                </a>
              </li>
              <li className="nav-item ">
                <div className="dropdown mt-2">
                  <button
                    className="btn dropdown-toggle nav-item mx-3  border-1 border-pink-500 bg-yellow-300 rounded-lg text-lg"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                  >
                    Catagories
                  </button>
                  <ul
                    className="dropdown-menu bg-gray-300"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        breakfast recipes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        lunch recipes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        dinner recipes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        snacks recipes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        dessert recipes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        instant and healthy receipes
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mx-3" type="submit">
                Search
              </button>
              <button
                className="btn btn-outline-success mx-3 border-1 border-pink-500 bg-yellow-300 rounded-lg text-lg font-bold"
                type="submit"
              >
                Login
              </button>
              <button
                className="btn btn-outline-success mx-3 border-1 border-pink-500 bg-yellow-300 rounded-lg text-lg font-bold"
                type="submit"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
