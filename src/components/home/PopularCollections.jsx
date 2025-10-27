import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetch } from '../hooks/useFetch';

import CollectionCard from '../ui/CollectionCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function PopularCollections() {
  const { data: popularCollections, loading, error } = useFetch('/popularCollections');

  if (loading) {
    return (
      <section id='popular-collections'>
        <div className='container'>
          <div className='row'>
            <h2 className='popular-collections__title'>Popular Collections</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className='popular-collections__body'
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
              {new Array(9).fill(0).map((_, index) => (
                <SwiperSlide className='collection-column' key={index}>
                  <CollectionCard.Skeleton />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id='popular-collections'>
        <div className='container'>
          <div className='row'>
            <h2 className='popular-collections__title'>Popular Collections</h2>
            <p style={{ color: 'red' }}>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='popular-collections'>
      <div className='container'>
        <div className='row'>
          <h2 className='popular-collections__title'>Popular Collections</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className='popular-collections__body'
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
            {popularCollections.map((collection, index) => (
              <SwiperSlide className='collection-column' key={index}>
                <CollectionCard collection={collection} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
