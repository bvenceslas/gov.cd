import Cards from "./cards";

const Description: React.FunctionComponent = () => {
  return (
    <div className="desc-wrapper w-full h-[1024px] bg-[#098DCD] p-8 flex flex-col justify-evenly">
      <div className="desc-cards flex flex-col md:flex-row">
        <Cards
          title="Visit DRCongo"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Cards
          title="Free Visa"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Cards
          title="Doing Business"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Cards
          title="Doing Business"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
      <div className="under-card ">
        <h2 className="text-xl text-white font-bold text-center pb-4">
          Get to Know DRCongo
        </h2>
        <p className="text-white text-center text-xs pb-8">
          The Democratic Republic of the Congo is a country located in Central
          Africa. It is the largest country in Sub-Saharan Africa and the
          second-largest in Africa, after Algeria.
        </p>
        <div className="btn-learn-more m-auto w-48 px-5 py-2 rounded-sm bg-white text-black text-center cursor-pointer">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Description;
