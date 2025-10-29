import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Skeleton from '../components/ui/Skeleton';

import { useFetch } from '../components/hooks/useFetch';
import ItemCard from '../components/ui/ItemCard';

export default function UserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const { data: user, loading, error } = useFetch(`/user/${id}`);

  const [visible, setVisible] = useState(12);
  const [sortOrder, setSortOrder] = useState('DEFAULT');

  const sortedItems = useMemo(() => {
    if (!user?.items) return [];

    const itemsCopy = [...user?.items];

    switch (sortOrder) {
      case 'HIGH_TO_LOW':
        return itemsCopy.sort((a, b) => b.price - a.price);
      case 'LOW_TO_HIGH':
        return itemsCopy.sort((a, b) => a.price - b.price);
      default:
        return itemsCopy;
    }
  }, [user?.items, sortOrder]);

  const visibleItems = user?.items && sortedItems.slice(0, visible);
  const hasMore = user?.items && visible < user?.items.length;

  const handleLoadMore = () => {
    setVisible(prev => prev + 6);
  };

  const handleSort = e => {
    setSortOrder(e.target.value);
  };

  if (loading) {
    return (
      <>
        <header id='user-header'>
          <Skeleton width='100%' height='100%' borderRadius='0px' />
        </header>

        <section id='user-info'>
          <div className='row'>
            <div className='user-info__wrapper'>
              <figure className='user-info__img__wrapper'>
                <Skeleton width='100%' height='100%' borderRadius='0px' />
              </figure>
              <h1 className='user-info__name'>
                <Skeleton width='240px' height='16px' borderRadius='4px' />
              </h1>
              <div className='user-info__details'>
                <Skeleton width='300px' height='16px' borderRadius='4px' />

                <Skeleton width='120px' height='16px' borderRadius='4px' />
              </div>
            </div>
          </div>
        </section>

        <section id='user-items'>
          <div className='row user-items__row'>
            <div className='user-items__header'>
              <div className='user-items__header__left'>
                <Skeleton width='120px' height='16px' borderRadius='4px' />
              </div>
              <Skeleton width='240px' height='48px' borderRadius='8px' />
            </div>
            <div className='user-items__body'>
              {new Array(12).fill(0).map((_, index) => (
                <div className='item-column' key={index}>
                  <ItemCard.Skeleton />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${user?.imageLink})`,
        }}
        id='user-header'
      ></header>

      <section id='user-info'>
        <div className='row'>
          <div className='user-info__wrapper'>
            <figure className='user-info__img__wrapper'>
              <img src={user?.profilePicture} alt='' className='user-info__img' />
            </figure>
            <h1 className='user-info__name'>{user?.name}</h1>
            <div className='user-info__details'>
              <span className='user-info__wallet'>
                <FontAwesomeIcon icon={faEthereum} className='user-info__wallet__icon' />
                <span className='user-info__wallet__data'>{user?.walletCode}</span>
              </span>
              <span className='user-info__year'>
                <span className='user-info__year__data'>Joined {user?.creationDate}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id='user-items'>
        <div className='row user-items__row'>
          <div className='user-items__header'>
            <div className='user-items__header__left'>
              <span className='user-items__header__text'>{user?.items.length} items</span>
            </div>
            <select className='user-items__header__sort' onChange={handleSort}>
              <option value='DEFAULT'>Recently purchased</option>
              <option value='HIGH_TO_LOW'>Price high to low</option>
              <option value='LOW_TO_HIGH'>Price low to high</option>
            </select>
          </div>
          <div className='user-items__body'>
            {visibleItems &&
              visibleItems.map((item, index) => (
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
    </>
  );
}
