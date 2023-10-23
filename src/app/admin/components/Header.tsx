'use client'
import { Navbar, NavbarBrand, NavbarMenuToggle } from "@nextui-org/react";
import HeaderNavigation from "./parts/HeaderNavigation";
import VisieLogo from "./parts/VisieLogo";

import './styles/Header.scss';
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Navbar maxWidth="xl" height={'96px'} onMenuOpenChange={setOpen} className="mb-10 shadow-md z-10 bg-white dark:bg-slate-800">
      <NavbarBrand>
        <Link href={'/admin/products'}><VisieLogo className="w-[139px] h-[39px]" /></Link>
      </NavbarBrand>
      <HeaderNavigation />

      <NavbarMenuToggle
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
    </Navbar>
  );
}

export default Header;