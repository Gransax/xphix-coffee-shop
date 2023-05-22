"use client";
import Link from "next/link";
import { useState, Fragment, useEffect } from "react";
import { links } from "../data";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { Popover, Transition } from "@headlessui/react";
import Logo from "./Logo";
type Props = {};

const Navbar = (props: Props) => {
  const [onTop, setOnTop] = useState(true);
  const [selected, setSelected] = useState(links[0].name);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 ${
        onTop
          ? "bg-transparent absolute top-0"
          : "bg-container-bg-color fixed top-0 "
      }`}
    >
      <div className="m-auto w-11/12 lg:w-5/6 py-4 flex items-center justify-between gap-4 lg:gap-0 ">
        <Logo />
        <div className="md:flex items-center justify-center gap-8 text-md font-medium hidden">
          {links.map((link) => (
            <Link
              onClick={() => setSelected(link.name)}
              className={`
                hover:text-primary transition duration-300 text-md
                ${link.name === selected ? "text-primary" : "text-white"}
              `}
              key={link.name}
              href={`#${link.path}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile */}
        <div
          className="
            flex 
            flex-col 
            items-start 
            justify-center 
            md:hidden
            "
        >
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button>
                  <AiOutlineMenu
                    className="text-white cursor-pointer hover:text-stone-700"
                    size={32}
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    className="
                        absolute 
                        left-1/2 
                        z-10 
                        mt-3 
                        w-screen
                        max-w-sm 
                        -translate-x-[90%]
                        transform 
                        px-4 
                        sm:px-0 
                        lg:max-w-3xl
                    "
                  >
                    <div
                      className="
                        overflow-hidden
                        rounded-lg
                        shadow-lg 
                        ring-1 
                        ring-black 
                        ring-opacity-5
                        "
                    >
                      <div
                        className="
                            relative 
                            grid 
                            gap-8 
                            bg-white 
                            p-7 
                            lg:grid-cols-2
                        "
                      >
                        {links.map((link) => (
                          <Link
                            onClick={() => setSelected(link.name)}
                            className={`
                            -m-3 
                            flex 
                            items-center
                            rounded-lg 
                            p-2 transition 
                            duration-150 
                            ease-in-out 
                            hover:bg-gray-50
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-orange-500
                            focus-visible:ring-opacity-50
                           
                            `}
                            key={link.name}
                            href={`#${link.path}`}
                          >
                            {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div> */}
                            <div className="ml-4">
                              <span
                                className={`text-md font-medium  
                                ${
                                  link.name === selected
                                    ? "text-primary"
                                    : "text-black"
                                }`}
                              >
                                {link.name}
                              </span>
                              {/* <p className="text-sm text-gray-500">
                                {item.description}
                              </p> */}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
