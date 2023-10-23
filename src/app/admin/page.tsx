import { redirect } from "next/navigation";
import VisieLogo from "./components/parts/VisieLogo";

const Admin = () => {
  redirect('/admin/products');

  return (
    <div>
      <VisieLogo />
    </div>
  )
}

export default Admin;