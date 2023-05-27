import searchIcon from "src/assets/icons/search.svg";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="w-full bg-hero-pattern flex items-center h-[60vh] bg-cover px-5 md:bg-cover md:h-[500px] lg:bg-cover lg:h-[550px]">
      <div className="welcome-wrapper mx-4 flex-1 flex flex-col gap-7 md:mx-10 lg:mx-16">
        <p className="welcome-text text-xl text-white font-bold font-poppins md:text-xl md:font-extrabold lg:text-2xl">
          Welcome to
        </p>
        <p className="welcome-text text-4xl text-white font-poppins font-bold  md:font-bold md:text-5xl lg:text-6xl">
          DRCongo.
        </p>

        <div className="search-wrapper flex justify-left md:w-[90%]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-[90%] h-12 rounded-sm text-sm px-2 md:w-[40%] "
          />
          {/* This search div appear only when we are on tablet and large screens */}
          <div className="hidden md:bg-[#098DCD] md:flex md:items-center md:h-auto md:px-5  md:cursor-pointer md:text-white md:text-sm md:font-bold ">
            Search
          </div>
          <img
            src={searchIcon}
            alt="search icon"
            width={40}
            className="bg-[#098DCD] cursor-pointer md:hidden lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
