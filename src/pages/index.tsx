import type { NextPage } from "next";
import CourseSection from "../common/components/Courses";
import Features from "../common/components/Features";
import Hero from "../common/components/Hero";
import Pricing from "../common/components/Pricing";
import ReviewsSection from "../common/components/Reviews";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <CourseSection />
      <Pricing />
      <Features />
      <ReviewsSection />
    </>
  );
};

export default Home;
