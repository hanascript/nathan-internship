import { faShoppingBag, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Skeleton from '../ui/Skeleton';
import ItemCard from '../ui/ItemCard';

export default function RecommendedItems({ collectionId, itemId }) {
  const { data: collection, loading, error } = useFetch(collectionId ? `/collection/${collectionId}` : null);

  const recommendedCollectionItems =
    collection && itemId && collection.items.filter(item => item.itemId !== itemId).slice(0, 10);

    console.log(recommendedCollectionItems);

  if (loading) {
    return (
      <section id='recommended-items'>
        <div className='container'>
          <div className='row recommended-items__row'>
            <div className='recommended-items__wrapper'>
              <div className='recommended-items__header'>
                <Skeleton width='240px' height='16px' borderRadius='4px' />
              </div>
              <div className='recommended-items__body'>
                {new Array(6).fill(0).map((_, index) => (
                  <div className='item-column' key={index}>
                    <ItemCard.Skeleton />
                  </div>
                ))}
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
              {recommendedCollectionItems?.map((item, index) => (
                <div className='item-column' key={index}>
                  <ItemCard {...item} />
                </div>
              ))}
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
