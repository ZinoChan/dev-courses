import Image from "next/image";
import Title from "../UI/Title";
import pricing_1 from "../../../assets/pricing_1.svg";
import pricing_2 from "../../../assets/pricing_2.svg";
import pricing_3 from "../../../assets/pricing_3.svg";

const Pricing = () => {
  const plans = [
    {
      title: "Buy a Single Course",
      price: 20,
      per: "course",
      pros: [
        "life time access to the course",
        "life time access to the source code",
        "30 days money back garantee",
      ],
      color: "primary-300",
      icon: pricing_1,
    },
    {
      title: "yearly subscription",
      price: 200,
      per: "year",
      pros: [
        "life time access to the course",
        "life time access to the source code",
        "30 days money back garantee",
      ],
      color: "primary-100",
      icon: pricing_2,
    },
    {
      title: "monthly subscription",
      price: 19,
      per: "month",
      pros: [
        "life time access to the course",
        "life time access to the source code",
        "30 days money back garantee",
      ],
      color: "primary-200",
      icon: pricing_3,
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto px-2">
        <Title
          headline="Flexible pricing"
          subHeadline="choose the right plan for you"
        />
        <div className="grid grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div
              key={`${plan.title}-${index}`}
              className="shadow-xl rounded bg-white p-6"
            >
              <div className="mb-2 text-center">
                <Image
                  src={plan.icon}
                  width={200}
                  height={160}
                  alt="pricing_illustration"
                />
              </div>
              <h3 className="font-secondary font-bold  text-xl text-center capitalize mb-4 text-primary-dark-200">
                {plan.title}
              </h3>
              <p className="text-xs text-center text-gray-700 mb-6">
                <span className={`font-bold text-4xl text-${plan.color}`}>
                  {plan.price} $
                </span>
                /{plan.per}
              </p>
              <div className="mb-6 text-sm w-max mx-auto">
                {plan.pros.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex space-x-3 items-center  mb-4"
                  >
                    <span
                      className={`bg-${plan.color} w-1 h-1 rounded-full`}
                    ></span>
                    <p className=" text-gray-500">
                      life time access to the course
                    </p>
                  </div>
                ))}
              </div>
              <button
                className={`rounded-lg w-full py-2 border-2 border-${plan.color} text-${plan.color} font-bold capitalize`}
              >
                get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
