import Image from "next/image";
import Marquee from "react-fast-marquee";
import textStar from "../../../assets/text-star.svg";

const MarqueeText = () => {
  return (
    <Marquee style={{ overflow: "clip" }}>
      <p
        style={{ WebkitTextStroke: ".1px #BBBBBE" }}
        className="font-bold font-primary text-4xl capitalize flex items-center space-x-3 text-white overflow-visible"
      >
        <span> Next Js </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> React Js </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Javascript </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Typescript </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Node Js </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Firebase </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span>Framer Motion </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Gatsby Js </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Figma </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Webflow </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
        <span> Redux </span>
        <span>
          <Image src={textStar} width={20} height={20} alt="star" />
        </span>
      </p>
    </Marquee>
  );
};

export default MarqueeText;
