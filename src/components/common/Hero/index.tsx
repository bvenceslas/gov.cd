import searchIcon from "src/assets/icons/search.svg";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="w-full bg-hero-pattern h-[400px] bg-cover">
      <p className="absolute text-2xl pl-5 pt-10 text-white shadow-sm ">
        Welcome to <br /> <span className="text-4xl font-bold">DR Congo</span>
      </p>

      <div className="absolute w-full  mt-[150px] flex justify-center ">
        <input
          type="text"
          placeholder="What are you looking for?"
          className=" w-[70%] h-[40px] rounded-sm text-sm px-2"
        />
        <img
          src={searchIcon}
          alt="search icon"
          width={40}
          className="bg-[#098DCD]"
        />
      </div>
    </div>
  );
};

export default Hero;
