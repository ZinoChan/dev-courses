import Image from "next/image";
import rocket from "../../../assets/rocket.svg";
import star from "../../../assets/star.svg";
import MarqueeText from "./MarqueeText";
import { SwapRightOutlined } from "@ant-design/icons";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="flex items-center text-center px-2 justify-center mb-32">
        <div>
          <h1 className="text-7xl mb-6 text-primary-dark-100 font-bold relative">
            <span className="absolute -top-10 -left-20">
              <Image src={star} width={30} height={30} alt="star" />
            </span>
            Bost Your Career With <br /> Hands on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-200">
              Real Projects
            </span>
            <span className="absolute bottom-0 -right-48">
              <Image src={rocket} width={222} height={152} alt="rocket" />
            </span>
          </h1>
          <p className="text-gray-400 text-xl mb-12">
            un testo segnaposto utilizzato nel settore <br /> della tipografia e
            della stampa.
          </p>
          <Button className="rounded-full btn-blue">
            <span className="mr-3">Get Started</span>

            <SwapRightOutlined className="text-xl" />
          </Button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-primary-dark-200 text-sm mb-6">
          Most in demand tech stacks and frameworks
        </p>
        <MarqueeText />
      </div>
    </section>
  );
};

export default Hero;
