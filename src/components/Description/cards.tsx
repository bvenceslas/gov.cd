type Props = {
  title: string;
  description: string;
};

const Cards: React.FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div className="card-wrapper bg-white w-full min-h-[84px] p-8 border-b-2 md:min-w-[100px] md:border-r-2">
      <div className="card-title text-xl text-[#098DCD] font-poppins font-bold mb-4 md:text-2xl">
        {title}
      </div>
      <p className="card-desc text-sm md:text-base">{description}</p>
    </div>
  );
};

export default Cards;
