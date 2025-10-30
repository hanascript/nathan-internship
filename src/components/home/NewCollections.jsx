import React from 'react';

import { useFetch } from '../hooks/useFetch';

import { Carousel, CarouselItem } from '../ui/Carousel';
import CollectionCard from '../ui/CollectionCard';

export default function NewCollections() {
  const { data: collections, loading } = useFetch('/newCollections');

  if (loading) {
    return (
      <section id='new-collections'>
        <div className='container'>
          <div className='row'>
            <h2 className='new-collections__title' data-aos='fade-up' data-aos-delay='0'>
              New Collections
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
    <section id='new-collections'>
      <div className='container'>
        <div className='row'>
          <h2 className='new-collections__title' data-aos='fade-up' data-aos-delay='0'>
            New Collections
          </h2>
          <div data-aos='fade-up' data-aos-delay='100'>
            <Carousel>
              {collections.map((collection, index) => (
                <CarouselItem key={index}>
                  <CollectionCard
                    id={collection.collectionId}
                    imageLink={collection.imageLink}
                    title={collection.title}
                    floor={collection.floor}
                    totalVolume={collection.totalVolume}
                  />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
