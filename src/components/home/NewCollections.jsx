import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useFetch } from '../hooks/useFetch';

import Skeleton from '../ui/Skeleton';

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
                <SwiperSlide className='collection-column'>
                  <Link to='/collection' key={index} className='collection'>
                    <div className='collection__img'>
                      <Skeleton width='100%' height='100%' borderRadius='2px' />
                    </div>
                    <div className='collection__info'>
                      <h3 className='collection__name'>
                        <Skeleton width='100%' height='18px' borderRadius='2px' />
                      </h3>
                      <div className='collection__stats'>
                        <div className='collection__stat'>
                          <span className='collection__stat__label'>
                            <Skeleton width='60%' height='18px' borderRadius='2px' />
                          </span>
                          <span className='collection__stat__data'>
                            <Skeleton width='85%' height='18px' borderRadius='2px' />
                          </span>
                        </div>
                        <div className='collection__stat'>
                          <span className='collection__stat__label'>
                            <Skeleton width='60%' height='18px' borderRadius='2px' />
                          </span>
                          <span className='collection__stat__data'>
                            <Skeleton width='85%' height='18px' borderRadius='2px' />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
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
              <SwiperSlide className='collection-column'>
                <Link to={`/collection/${collection.collectionId}`} key={index} className='collection'>
                  <img src={collection.imageLink} alt='' className='collection__img' />
                  <div className='collection__info'>
                    <h3 className='collection__name'>{collection.title}</h3>
                    <div className='collection__stats'>
                      <div className='collection__stat'>
                        <span className='collection__stat__label'>Floor</span>
                        <span className='collection__stat__data'>{Number(collection.floor).toFixed(2)} ETH</span>
                      </div>
                      <div className='collection__stat'>
                        <span className='collection__stat__label'>Total Volume</span>
                        <span className='collection__stat__data'>{collection.totalVolume} ETH</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
