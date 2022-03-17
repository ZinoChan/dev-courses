import Title from "../UI/Title";
import { fakeData } from "../../../../fakeData";
import CourseCard from "./CourseCard";
import Button from "../UI/Button";

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
          <Button className="rounded-full outlined-primary-200">
            View all Courses
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
