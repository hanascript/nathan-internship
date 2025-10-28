import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '../ui/Skeleton';

const ItemCard = () => {
  return (
    <Link to={'/item'} className='item'>
      <figure className='item__img__wrapper'>
        <img
          src='https://i.seadn.io/gcs/files/0a085499e0f3800321618af356c5d36b.png?auto=format&dpr=1&w=384'
          alt=''
          className='item__img'
        />
      </figure>
      <div className='item__details'>
        <span className='item__details__name'>Meebit #0001</span>
        <span className='item__details__price'>0.98 ETH</span>
        <span className='item__details__last-sale'>Last sale: 7.45 ETH</span>
      </div>
      <div className='item__see-more'>
        <button className='item__see-more__button'>See More</button>
        <div className='item__see-more__icon'>
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
      </div>
    </Link>
  );
};

ItemCard.Skeleton = () => {
  return (
    <div className='item'>
      <figure className='item__img__wrapper'>
        <Skeleton width='100%' height='100%' borderRadius='0px' />
      </figure>
      <div className='item__details'>
        <span className='item__details__name'>
          <Skeleton width='80px' height='16px' borderRadius='4px' />
        </span>
        <span className='item__details__price'>
          <Skeleton width='48px' height='16px' borderRadius='4px' />
        </span>
        <span className='item__details__last-sale'>
          <Skeleton width='120px' height='16px' borderRadius='4px' />
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
