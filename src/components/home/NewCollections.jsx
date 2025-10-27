import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetch } from '../hooks/useFetch';

import CollectionCard from '../ui/CollectionCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function NewCollections() {
  const { data: collections, loading, error } = useFetch('/newCollections');

  if (loading) {
    return (
      <section id='new-collections'>
        <div className='container'>
          <div className='row'>
            <h2 className='new-collections__title'>New Collections</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className='new-collections__body'
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
      <section id='new-collections'>
        <div className='container'>
          <div className='row'>
            <h2 className='new-collections__title'>New Collections</h2>
            <p style={{ color: 'red' }}>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='new-collections'>
      <div className='container'>
        <div className='row'>
          <h2 className='new-collections__title'>New Collections</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className='new-collections__body'
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
            {collections.map((collection, index) => (
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
