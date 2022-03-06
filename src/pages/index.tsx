import type { NextPage } from "next";
import CourseSection from "../common/components/Courses";
import Hero from "../common/components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CourseSection />
    </>
  );
};

export default Home;
