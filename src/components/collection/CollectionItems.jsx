import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemCard from '../ui/ItemCard';
import Skeleton from '../ui/Skeleton';

export default function CollectionItems({ items, loading }) {
  const [visible, setVisible] = useState(12);
  const [sortOrder, setSortOrder] = useState('DEFAULT');

  const sortedItems = useMemo(() => {
    if (!items) return [];

    const itemsCopy = [...items];

    switch (sortOrder) {
      case 'HIGH_TO_LOW':
        return itemsCopy.sort((a, b) => b.price - a.price);
      case 'LOW_TO_HIGH':
        return itemsCopy.sort((a, b) => a.price - b.price);
      default:
        return itemsCopy;
    }
  }, [items, sortOrder]);

  const visibleItems = items && sortedItems.slice(0, visible);
  const hasMore = items && visible < items.length;

  const handleLoadMore = () => {
    setVisible(prev => prev + 6);
  };

  const handleSort = e => {
    setSortOrder(e.target.value);
  };

  if (loading) {
    return (
      <section id='collection-items'>
        <div className='row collection-items__row'>
          <div className='collection-items__header'>
            <div className='collection-items__header__left'>
              <Skeleton width='52px' height='16px' borderRadius='4px' />

              <Skeleton width='72px' height='16px' borderRadius='4px' />
            </div>

            <Skeleton width='240px' height='48px' borderRadius='8px' />
          </div>
          <div className='collection-items__body'>
            {new Array(12).fill(0).map((_, index) => (
              <div className='item-column' key={index}>
                <ItemCard.Skeleton />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='collection-items'>
      <div className='row collection-items__row'>
        <div className='collection-items__header'>
          <div className='collection-items__header__left'>
            <span className='collection-items__header__live'>
              <div className='green-pulse'></div>
              Live
            </span>
            <span className='collection-items__header__results'>10 results</span>
          </div>
          <select className='collection-items__header__sort' onChange={handleSort}>
            <option value='DEFAULT' default>
              Default
            </option>
            <option value='HIGH_TO_LOW'>Price high to low</option>
            <option value='LOW_TO_HIGH'>Price low to high</option>
          </select>
        </div>
        <div className='collection-items__body'>
          {visibleItems.map((item, index) => (
            <div className='item-column' key={index}>
              <ItemCard {...item} />
            </div>
          ))}
        </div>
      </div>
      {hasMore && (
        <button className='collection-page__button' onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
}
