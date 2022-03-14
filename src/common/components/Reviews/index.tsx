import Title from "../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { reviewsSimple } from "../../../../fakeData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StarFilled } from "@ant-design/icons";

const ReviewsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto px-2">
        <Title
          headline="Reviews"
          subHeadline="what our students say about us"
        />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
        >
          {reviewsSimple.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="w-full rounded-lg bg-white shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2 items-center">
                    <div className="rounded-full w-12 h-12 bg-gray-200"></div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 text-primary-dark-200">
                        {review.user_name}
                      </h4>
                      <span className="text-xs text-gray-600">
                        {review.user_location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <span className="font-bold">{review.rating}</span>
                    <StarFilled className="ml-1 text-lg text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{review.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
