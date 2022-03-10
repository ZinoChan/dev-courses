import type { NextPage } from "next";
import CourseSection from "../common/components/Courses";
import Features from "../common/components/Features";
import Hero from "../common/components/Hero";
import Pricing from "../common/components/Pricing";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CourseSection />
      <Pricing />
      <Features />
    </>
  );
};

export default Home;
