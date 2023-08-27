import logo from "../assets/logo.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header max-width py-5">
        <div className="flex items-center justify-between">
          <article className="flex items-center">
            <img src={logo} alt="" />

            <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start justify-start">
                <li>
                  <a href="#home">
                    <button className="text-slate-400">Home</button>
                  </a>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <a href="#getstarted">
                    <button className="text-slate-400">Search</button>
                  </a>
                </li>
                <li>
                  <a href="#capsules">
                    <button className="text-slate-400">Capsules</button>
                  </a>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <a href="#home">
                      <button>Home</button>
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="#getstarted">
                      <button>Search</button>
                    </a>
                  </li>
                  <li>
                    <a href="#capsules">
                      <button>Capsules</button>
                    </a>
                  </li>
                </ul>
              </nav>
              <ul className="flex flex-col items-center justify-center">
                <li className="my-5">
                  <button className="text-slate-400">Login</button>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign Up</button>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:block">
            <ul className="flex items-center ml-5">
              <li className="my-5 md:my-0 md:mr-5">
                <button className="text-slate-400">Login</button>
              </li>
              <li>
                <button className="btn-cta rounded-full">Sign Up</button>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
