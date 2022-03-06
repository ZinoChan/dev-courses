import Title from "../UI/Title";
import { fakeData } from "../../../../fakeData";
import CourseCard from "./CourseCard";

function CourseSection() {
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto">
        <Title headline=" popular courses" subHeadline="Top Rated Courses" />

        <div className="grid gap-16 grid-cols-2 mb-12">
          {fakeData.slice(0, 2).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center">
          <button className="rounded-full px-8 py-3 font-bold border-2 border-primary-200 bg-white text-primary-200 shadow-xl">
            View all Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
