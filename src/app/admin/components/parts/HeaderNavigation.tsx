'use client'
import { Button, Divider, Link, NavbarContent, NavbarItem, NavbarMenu } from "@nextui-org/react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { _e } from "../../../helpers/Dict";

const HeaderNavigation = () => {
  return (
    <>
      <NavbarContent justify="center" className="hidden lg:flex py-6">
        <div className="links flex items-center gap-3">
          <NavbarItem>
            <Link color="foreground" href="/admin/products"><_e>Products</_e></Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/admin/orders"><_e>Orders</_e></Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/admin/analytics"><_e>Analytics</_e></Link>
          </NavbarItem>
        </div>
        <Button as={Link} href="#store"><_e>View Store</_e><OpenInNewIcon fontSize="small" /></Button>
      </NavbarContent>
      <NavbarMenu className="text-lg">
        <NavbarItem>
          <Link size="lg" color="foreground" href="/admin/products"><_e>Products</_e></Link>
        </NavbarItem>
        <NavbarItem>
          <Link size="lg" color="foreground" href="/admin/orders"><_e>Orders</_e></Link>
        </NavbarItem>
        <NavbarItem>
          <Link  size="lg"color="foreground" href="/admin/analytics"><_e>Analytics</_e></Link>
        </NavbarItem>
        <Divider orientation="horizontal" className="my-4" />
        <Button as={Link} href="#store"><_e>View Store</_e><OpenInNewIcon fontSize="small" /></Button>
      </NavbarMenu>
    </>
  )
}

export default HeaderNavigation;