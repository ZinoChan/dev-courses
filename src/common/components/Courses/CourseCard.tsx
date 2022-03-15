import Image from "next/image";

export type CourseType = {
  id: string;
  courseImg: string | StaticImageData;
  courseTitle: string;
  description: string;
  courseDuration: number;
  numberOfVideos: number;
  rating: number;
};

type CardProps = {
  course: CourseType;
};

const CourseCard = ({ course }: CardProps) => {
  const {
    courseImg,
    courseTitle,
    description,
    courseDuration,
    numberOfVideos,
    rating,
  } = course;
  return (
    <div className="rounded bg-white shadow-lg">
      <div>
        <Image src={courseImg} width={496} height={260} alt="course" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg capitalize font-bold text-primary-dark-100">
            {courseTitle}
          </h4>
        </div>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>{courseDuration} h / </span>
            <span>{numberOfVideos}</span>
          </div>
          <span className="font-bold capitalize underline text-primary-100">
            view
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
