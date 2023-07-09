import React, { useState,useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const [isOpen, setIsOpen] = useState("hidden");

  const myRef = useRef(null)

  const scrollToElement = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlenav = () => {
    if (isOpen == "hidden") {
      setIsOpen("flex");
    } else if (isOpen == "flex") {
      setIsOpen("hidden");
    }
  };

  const location = useLocation();
  return (
    /* comienza layout */
    <section className=" md:flex flex-wrap  font-Montserrat font-normal">
      <aside className=" md:w-6/12 h-screen bg-black flex flex-col items-center md:justify-start  text-center ">
        {/* boton mobile menu  */}

        <div className="w-full flex p-2 justify-end pr-5 absolute ">
          {isOpen === "hidden" ? (
            <button onClick={handlenav} className="animate-wiggle">
              <i className="fa-solid fa-bars text-white text-3xl  "></i>
            </button>
          ) : (
            <button onClick={handlenav}>
              <i className="fa-solid fa-xmark text-white text-3xl  "></i>
            </button>
          )}
        </div>

        {/* mobile menu   */}

        <nav
          className={`w-full ${isOpen}  animate-wiggle justify-end absolute mt-12`}
        >
          <ul className=" md:hidden  flex flex-col  items-end pr-7 w-full text-lg">
            <li
              className={` ${
                location.pathname == "/" ? "text-white  " : " text-skyblue"
              }   pb-3 block w-24 text-center  hover:text-white hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0 `}
            >
              <Link to={"/"}  onClick={scrollToElement} >About me</Link>
            </li>

            <li
              className={` ${
                location.pathname == "/portfolio"
                  ? "text-white "
                  : " text-skyblue "
              }    pb-3 block w-24 text-center hover:text-white hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0  `}
            >
              <Link to={"/portfolio"}  onClick={scrollToElement}>Portfolio</Link>
            </li>

            <li
              className={` ${
                location.pathname == "/skills"
                  ? "text-white "
                  : " text-skyblue  "
              }  pb-3  block w-24 text-center  hover:text-white hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0`}
            >
              <Link to={"/skills"}  onClick={scrollToElement}>Skills</Link>
            </li>
            <li
              className={`${
                location.pathname == "/contact"
                  ? "text-white "
                  : " text-skyblue  "
              }     pb-3  block w-24 text-center  hover:text-white hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0 `}
            >
              <Link to={"/contact"}  onClick={scrollToElement}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* fin de mobile menu  */}
        <h1 className="text-white mt-60 mb-12 md:text-4xl  text-2xl ">
          I'm Exequiel Schiavo{" "}
        </h1>
        <h2 className="text-white md:text-5xl text-3xl mb-12">
          Front End <span className="text-skyblue">Developer </span>{" "}
        </h2>

        <button className=" w-44 h-10 text-lg bg-white text-skyblue rounded-md shadow[0px 4px 4px 0px white]   hover:bg-skyblue hover:text-white  duration-300  ">
        <a href="https://wa.me/+598587036" target="_blank">Contact me</a>
        </button>

        <a
          href="#bottom"
          className="mt-10 flex justify-center items-center  md:hidden  rounded-full border animate-bounce border-white w-10 h-10 "
        >
          {" "}
          <i className="fa-solid fa-arrow-down text-white  text-2xl  "></i>
        </a>
      </aside>


{/* sección lateral  */}
      <main className=" flex  p-4   flex-col  md:w-6/12 md:h-screen overflow-y-scroll ">

        {/* navegación  */}
        <nav className="w-full flex  justify-end px-20 py-3 ">
          <ul className=" md:flex  hidden   justify-between w-full text-lg">
            <li
              className={` ${
                location.pathname == "/"
                  ? "text-black  border-b-0 border-t-2"
                  : " text-skyblue border-b-2"
              }   border-black pb-3 block w-24 text-center  hover:text-black hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0 `}
            >
              <Link to={"/"}>About me</Link>
            </li>

            <li
              className={` ${
                location.pathname == "/portfolio"
                  ? "text-black border-b-0 border-t-2"
                  : " text-skyblue  border-b-2"
              }    border-black pb-3 block w-24 text-center hover:text-black hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0  `}
            >
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>

            <li
              className={` ${
                location.pathname == "/skills"
                  ? "text-black border-b-0 border-t-2"
                  : " text-skyblue  border-b-2"
              }  border-black pb-3  block w-24 text-center  hover:text-black hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0`}
            >
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li
              className={`${
                location.pathname == "/contact"
                  ? "text-black border-b-0 border-t-2"
                  : " text-skyblue  border-b-2"
              }    border-black pb-3  block w-24 text-center  hover:text-black hover:translate-x-2 hover:scale-105 duration-100 ease-in hover:border-t-2 pt-2 hover:border-b-0 `}
            >
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* fin navegación */}

{/* ancla  */}
        <a id="bottom" ref={myRef}  ></a>
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
