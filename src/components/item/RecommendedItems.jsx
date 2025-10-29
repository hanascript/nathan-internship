import React from 'react';
import { Link } from 'react-router-dom';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetch } from '../hooks/useFetch';

import { Carousel, CarouselItem } from '../ui/Carousel';

import ItemCard from '../ui/ItemCard';
import Skeleton from '../ui/Skeleton';

export default function RecommendedItems({ collectionId, itemId, loading }) {
  const { data: collection, loading: collectionLoading } = useFetch(
    collectionId ? `/collection/${collectionId}` : null
  );

  const recommendedCollectionItems =
    collection && itemId && collection.items.filter(item => item.itemId !== itemId).slice(0, 10);

  if (loading || collectionLoading) {
    return (
      <section id='recommended-items'>
        <div className='container'>
          <div className='row recommended-items__row'>
            <div className='recommended-items__wrapper'>
              <div className='recommended-items__header'>
                <Skeleton width='240px' height='16px' borderRadius='4px' />
              </div>
              <div className='recommended-items__body'>
                <Carousel>
                  {new Array(6).fill(0).map((_, index) => (
                    <CarouselItem key={index}>
                      <ItemCard.Skeleton />
                    </CarouselItem>
                  ))}
                </Carousel>
              </div>
              <div className='recommended-items__footer'>
                <Skeleton width='168px' height='48px' borderRadius='8px' />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='recommended-items'>
      <div className='container'>
        <div className='row recommended-items__row'>
          <div className='recommended-items__wrapper'>
            <div className='recommended-items__header'>
              <FontAwesomeIcon icon={faTableCells} />
              <h3 className='recommended-items__header__title'>More from this collection</h3>
            </div>
            <div className='recommended-items__body'>
              {recommendedCollectionItems && (
                <Carousel>
                  {recommendedCollectionItems?.map((item, index) => (
                    <CarouselItem key={index}>
                      <ItemCard {...item} />
                    </CarouselItem>
                  ))}
                </Carousel>
              )}
            </div>
            <div className='recommended-items__footer'>
              <Link to={`/collection/${collectionId}`} className='recommended-items__footer__button'>
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
