import { useState } from "react";
import armoirieLogo from "src/assets/armoirie.png";
import hamburgerIcon from "src/assets/icons/hamburger.svg";

const Header: React.FunctionComponent = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  return (
    <nav className="shadow-lg">
      <div className="nav-container w-full px-3 h-16 flex justify-between items-center">
        <div className="logo flex items-center">
          <a href="/">
            <img src={armoirieLogo} alt="armoirie logo" width={40} />
          </a>
          <span className="hidden lg:block lg:ml-2 lg:text-sm lg:font-poppins">
            Democratic Republic of Congo
          </span>
        </div>
        <p className="text-3xl font-bold text-center cursor-pointer">DRC</p>
        <div className="menu hidden lg:flex lg:space-x-6 lg:font-light">
          <a className="hover:text-[#0CC1FF]" href="#">
            Home
          </a>
          <a className="hover:text-[#0CC1FF]" href="#">
            About
          </a>
          <a className="hover:text-[#0CC1FF]" href="#">
            Services
          </a>
          <a className="hover:text-[#0CC1FF]" href="#">
            Government
          </a>
        </div>

        <img
          onClick={() => {
            if (!showResponsiveMenu) {
              setShowResponsiveMenu(true);
            } else {
              setShowResponsiveMenu(false);
            }
          }}
          className="mobile-menu-btn hover:shadow-sm cursor-pointer lg:hidden"
          src={hamburgerIcon}
          alt="hamburger menu"
          width={40}
        />
      </div>
      {showResponsiveMenu ? (
        <div className="responsive-menu flex flex-col lg:hidden space-y-2 px-2 py-1">
          <a className="hover:text-[#0CC1FF]" href="#">
            Home
          </a>
          <a className="hover:text-[#0CC1FF]" href="#">
            About
          </a>
          <a className="hover:text-[#0CC1FF]" href="#">
            Services
          </a>
          <a className="hover:text-[#0CC1FF]" href="#">
            Government
          </a>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
