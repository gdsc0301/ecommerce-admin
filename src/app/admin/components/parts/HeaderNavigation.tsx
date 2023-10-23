'use client'
import { Button, Divider, Link, NavbarContent, NavbarItem, NavbarMenu } from "@nextui-org/react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { _e } from "../../../helpers/Dict";
import { usePathname } from "next/navigation";

import * as menuitems from './menuItems.json';

const HeaderNavigation = () => {
  const pathname = usePathname()

  return (
    <>
      <NavbarContent justify="center" className="hidden lg:flex py-6">
        <div className="links flex items-center gap-3">
          {menuitems.map(item => (
            <NavbarItem key={`header-item-${item.url}`} isActive={item.url === pathname}>
              <Link color="foreground" href={item.url}><_e>{item.title}</_e></Link>
            </NavbarItem>
          ))}
        </div>
        <Button as={Link} href="#store"><_e>View Store</_e><OpenInNewIcon fontSize="small" /></Button>
      </NavbarContent>
      <NavbarMenu className="text-lg">
          {menuitems.map(item => (
            <NavbarItem key={`header-item-${item.url}`} isActive={item.url === pathname}>
              <Link size="lg" color="foreground" href={item.url}><_e>{item.title}</_e></Link>
            </NavbarItem>
          ))}
        <Divider orientation="horizontal" className="my-4" />
        <Button as={Link} href="#store"><_e>View Store</_e><OpenInNewIcon fontSize="small" /></Button>
      </NavbarMenu>
    </>
  )
}

export default HeaderNavigation;