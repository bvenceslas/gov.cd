import armoirieLogo from "src/assets/armoirie.png";
import hamburgerIcon from "src/assets/icons/hamburger.svg";

const Header: React.FunctionComponent = () => {
  // handle responsive menu
  const handleMobileMenuClick = () => {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navbar = document.querySelector(".responsive-menu");
    menuBtn?.addEventListener("click", () => {
      navbar?.classList.toggle("hidden");
    });
  };

  return (
    <nav className="shadow-lg">
      <div className="nav-container w-full px-2 h-16 flex justify-between items-center">
        <div className="logo flex items-center">
          <a href="/">
            <img src={armoirieLogo} alt="armoirie logo" width={40} />
          </a>
          <span className="hidden lg:block lg:ml-2 lg:text-sm">
            Democratic Republic of Congo
          </span>
        </div>
        <p className="text-3xl font-bold text-center">DRC</p>
        <div className="menu hidden lg:flex lg:space-x-3">
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
          onClick={handleMobileMenuClick}
          className="mobile-menu-btn hover:shadow-sm cursor-pointer lg:hidden"
          src={hamburgerIcon}
          alt="hamburger icon"
          width={40}
        />
      </div>
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
    </nav>
  );
};

export default Header;
