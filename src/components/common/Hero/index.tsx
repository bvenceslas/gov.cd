import heroImg from "src/assets/hero.jpeg";
import searchIcon from "src/assets/icons/search.svg";

const Hero: React.FunctionComponent = () => {
  return (
    <div className="relative w-full">
      <img src={heroImg} alt="hero image" className="absolute w-full top-0" />
      <p className="absolute text-2xl pl-5 pt-10 text-white shadow-sm ">
        Welcome to
      </p>
      <p className="absolute font-bold text-4xl pl-5 pt-[80px] text-white shadow-sm ">
        DR Congo
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
