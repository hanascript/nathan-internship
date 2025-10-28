import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const Carousel = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export const CarouselItem = SwiperSlide;
