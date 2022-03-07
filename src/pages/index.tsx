import type { NextPage } from "next";
import CourseSection from "../common/components/Courses";
import Hero from "../common/components/Hero";
import Pricing from "../common/components/Pricing";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CourseSection />
      <Pricing />
    </>
  );
};

export default Home;
