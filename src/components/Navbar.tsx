"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="fixed top-4 z-50 w-screen px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between rounded-lg bg-black px-4 py-5">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            className="mr-2"
            src="/logo.png"
            width={60}
            height={30}
            alt="Logo"
          />
          <span className="text-sm tracking-tight text-white">RealEs</span>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-sm text-white hover:text-neutral-400"
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden text-sm text-white lg:flex">
          <Button variant="outline" className="mr-2 bg-black">
            Sign in
          </Button>
          <Button className="bg-slate-800">Sign up</Button>
        </div>

        <div className="flex justify-end text-white lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="mx-auto max-w-7xl rounded-md bg-black lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="py-4">
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center text-white lg:hidden pb-8">
            <Button variant="outline" className="mr-2 bg-black">
              Sign
            </Button>
            <Button className="bg-slate-800">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
