import Image from "next/image";
import Title from "../UI/Title";
import pricing_1 from "../../../assets/pricing_1.svg";
import pricing_2 from "../../../assets/pricing_2.svg";
import pricing_3 from "../../../assets/pricing_3.svg";

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto px-2">
        <Title
          headline="Flexible pricing"
          subHeadline="choose the right plan for you"
        />
        <div className="grid grid-cols-3 gap-12">
          <div className="shadow-xl rounded bg-white p-6">
            <div className="mb-2 text-center">
              <Image
                src={pricing_1}
                width={200}
                height={160}
                alt="pricing_illustration"
              />
            </div>
            <h3 className="font-secondary font-bold  text-xl text-center capitalize mb-4 text-primary-dark-200">
              Buy a Single Course
            </h3>
            <p className="text-xs text-center text-gray-700 mb-6">
              starting from{" "}
              <span className="font-bold text-4xl text-primary-300">20 $</span>/
              course
            </p>
            <div className="mb-6 text-sm w-max mx-auto">
              <div className="flex space-x-3 items-center  mb-4">
                <span className="bg-primary-300 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">
                  life time access to the course
                </p>
              </div>
              <div className="flex space-x-3 items-center  mb-4">
                <span className="bg-primary-300 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">
                  life time access to the source code
                </p>
              </div>
              <div className="flex space-x-3 items-center mb-4">
                <span className="bg-primary-300 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">30 days money back garantee</p>
              </div>
            </div>
            <button className="rounded-lg w-full py-2 border-2 border-primary-300 text-primary-300 font-bold capitalize">
              get started
            </button>
          </div>
          <div className="shadow-xl rounded bg-white p-6 ">
            <div className="mb-2 text-center">
              <Image
                src={pricing_2}
                width={200}
                height={160}
                alt="pricing_illustration"
              />
            </div>
            <h3 className="font-secondary font-bold  text-xl text-center capitalize mb-4 text-primary-dark-200">
              yearly subscription
            </h3>
            <p className="text-xs text-center text-gray-700 mb-6">
              <span className="font-bold text-4xl text-primary-100">200 $</span>
              / year
            </p>
            <div className="mb-6 text-sm w-max mx-auto">
              <div className="flex space-x-3 items-center  mb-4">
                <span className="bg-primary-100 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">
                  life time access to the course
                </p>
              </div>
              <div className="flex space-x-3 items-center  mb-4">
                <span className="bg-primary-100 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">
                  life time access to the source code
                </p>
              </div>
              <div className="flex space-x-3 items-center mb-4">
                <span className="bg-primary-100 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">30 days money back garantee</p>
              </div>
            </div>
            <button className="rounded-lg w-full py-2 border-2 border-primary-100 text-primary-100 font-bold capitalize">
              get started
            </button>
          </div>
          <div className="shadow-xl rounded bg-white p-6">
            <div className="mb-2 text-center">
              <Image
                src={pricing_3}
                width={200}
                height={160}
                alt="pricing_illustration"
              />
            </div>
            <h3 className="font-secondary font-bold  text-xl text-center capitalize mb-4 text-primary-dark-200">
              monthly subscription
            </h3>
            <p className="text-xs text-center text-gray-700 mb-6">
              <span className="font-bold text-4xl text-primary-200">19 $</span>/
              month
            </p>
            <div className="mb-6 text-sm w-max mx-auto">
              <div className="flex space-x-3 items-center  mb-4">
                <span className="bg-primary-200 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">
                  life time access to the course
                </p>
              </div>
              <div className="flex space-x-3 items-center  mb-4">
                <span className="bg-primary-200 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">
                  life time access to the source code
                </p>
              </div>
              <div className="flex space-x-3 items-center mb-4">
                <span className="bg-primary-200 w-1 h-1 rounded-full"></span>
                <p className=" text-gray-500 ">30 days money back garantee</p>
              </div>
            </div>
            <button className="rounded-lg w-full py-2 border-2 border-primary-200 text-primary-200 font-bold capitalize">
              get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
