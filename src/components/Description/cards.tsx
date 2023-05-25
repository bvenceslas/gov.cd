type Props = {
  title: string;
  description: string;
};

const Cards: React.FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div className="card-wrapper bg-white w-full min-h-[84px] p-8 border-b-2">
      <div className="card-title text-xl text-[#098DCD] font-poppins font-bold mb-4">
        {title}
      </div>
      <p className="card-desc text-sm">{description}</p>
    </div>
  );
};

export default Cards;
