import HeaderNavigation from "./parts/HeaderNavigation";
import VisieLogo from "./parts/VisieLogo";

import './styles/Header.scss';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 w-full py-6 shadow-md z-10">
      <div className="container flex justify-between">
        <VisieLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default Header;