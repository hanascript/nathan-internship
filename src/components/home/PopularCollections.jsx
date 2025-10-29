import React from 'react';

import { useFetch } from '../hooks/useFetch';

import { Carousel, CarouselItem } from '../ui/Carousel';
import CollectionCard from '../ui/CollectionCard';

export default function PopularCollections() {
  const { data: popularCollections, loading } = useFetch('/popularCollections');

  if (loading) {
    return (
      <section id='popular-collections'>
        <div className='container'>
          <div className='row'>
            <h2 className='popular-collections__title' data-aos='fade-up' data-aos-delay='0'>
              Popular Collections
            </h2>
            <div data-aos='fade-up' data-aos-delay='100'>
              <Carousel>
                {new Array(9).fill(0).map((_, index) => (
                  <CarouselItem key={index}>
                    <CollectionCard.Skeleton />
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='popular-collections'>
      <div className='container'>
        <div className='row'>
          <h2 className='popular-collections__title' data-aos='fade-up' data-aos-delay='0'>
            Popular Collections
          </h2>
          <div data-aos='fade-up' data-aos-delay='100'>
            <Carousel>
              {popularCollections.map((collection, index) => (
                <CarouselItem key={index}>
                  <CollectionCard {...collection} />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
