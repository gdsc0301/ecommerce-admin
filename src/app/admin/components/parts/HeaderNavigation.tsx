'use client'
import { Button, Link } from "@nextui-org/react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { _e } from "../../../helpers/Dict";

const HeaderNavigation = () => {
  return (
    <>
      <nav className="links flex items-center gap-3">
        <Link href="/admin/products" className="link text-sm"><_e>Products</_e></Link>
        <Link href="/admin/orders" className="link text-sm"><_e>Orders</_e></Link>
        <Link href="/admin/analytics" className="link text-sm"><_e>Analytics</_e></Link>
      </nav>
      <Button as={Link} href="#store"><_e>View Store</_e><OpenInNewIcon fontSize="small" /></Button>
    </>
  )
}

export default HeaderNavigation;