"use client";
import { Flowbite, Navbar } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import DarkModeBtn from "./DarkModeButton";

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "py-2.5 dark:border-gray-700 dark:bg-slate-800 bg-white ",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center ",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0 text-black dark:text-white",
      active: {
        on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-black-700",
        off: "border-b border-gray-100 text-black hover:text-pink-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-pink-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
};

export default function NavbarComponent() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar rounded-b className="sticky top-0 z-50 py-8 mx-auto">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold ">
            Novin
          </span>
        </Navbar.Brand>
        <div className="flex items-center">
          <div className="sm:visible md:hidden lg:hidden mr-3 cursor-pointer">
            <DarkModeBtn />
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="pl-0" href="#">
            Home
          </Navbar.Link>
          <Navbar.Link className="pl-0" href="#project">
            Project
          </Navbar.Link>
          <Navbar.Link className="pl-0" href="#blog">
            Blog
          </Navbar.Link>
          <Navbar.Link className="pl-0" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className="pl-0 cursor-pointer">
            <DarkModeBtn />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}
