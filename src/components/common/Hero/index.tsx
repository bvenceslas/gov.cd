import searchIcon from "src/assets/icons/search.svg";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="w-full bg-hero-pattern h-[450px] bg-cover px-5 border border-green-700">
      <div className="welcome-wrapper mx-5 mt-32 border">
        <p className="welcome-text text-2xl text-white font-bold font-poppins">
          Welcome to
        </p>
        <p className="welcome-text text-5xl mt-8 text-white font-poppins font-extrabold">
          DRCongo.
        </p>

        <div className="search-wrapper mt-[50px] flex justify-center md:w-[50%]">
          <input
            type="text"
            placeholder="what are you looking for?"
            className="w-[90%] h-[40px] rounded-sm text-sm px-2"
          />
          {/* <div className="hidden md:bg-[#098DCD] md:flex md:items-center md:px-5 md:cursor-pointer md:text-white md:h-[40px] md:text-sm md:font-bold ">
            Search
          </div> */}
          <img
            src={searchIcon}
            alt="search icon"
            width={40}
            className="bg-[#098DCD] cursor-pointer md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
