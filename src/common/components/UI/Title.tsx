type Props = {
  headline: string;
  subHeadline: string;
};

const Title = ({ headline, subHeadline }: Props) => {
  return (
    <div className="text-center mb-16">
      <h3 className="mb-2 tracking-widest uppercase font-bold text-sm font-secondary text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-200">
        {subHeadline}
      </h3>
      <h2 className="font-bold text-4xl capitalize text-primary-dark-100">
        {headline}
      </h2>
    </div>
  );
};

export default Title;
