import React from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';

import VerifiedIcon from '../../assets/verified.png';
import Skeleton from '../ui/Skeleton';

export default function SelectedCollection() {
  const { data: collection, loading, error } = useFetch('/selectedCollection');

  if (loading) {
    return (
      <header>
        <div className='selected-collection'>
          <Skeleton width='100%' height='100%' borderRadius='0px' />
        </div>
      </header>
    );
  }

  if (error) {
    return (
      <header>
        <div className='selected-collection'>
          <div className='selected-collection__description'>
            <p style={{ color: 'red', fontSize: '24px' }}>{error}</p>
          </div>
        </div>
      </header>
    );
  }

  if (!collection) {
    return (
      <header>
        <div className='selected-collection'>
          <div className='selected-collection__description'>
            <p style={{ color: 'red', fontSize: '24px' }}>No collection found</p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header>
      <div className='selected-collection'>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={collection.thumbnail}
          src={collection.videoLink}
          className='selected-collection__bg'
        />
        <div className='selected-collection__description'>
          <img src={collection.logo} alt='' className='selected-collection__logo' />
          <h1 className='selected-collection__title'>{collection.title}</h1>
          <Link to={`/user/${collection.creatorId}`} className='selected-collection__author'>
            By {collection.creator}
            <img src={VerifiedIcon} className='selected-collection__author__verified' />
          </Link>
          <div className='selected-collection__details'>
            {collection.amountOfItems} items · {collection.floorPrice} ETH
          </div>
          <Link to={`/collection/${collection.collectionId}`} className='selected-collection__button'>
            <div className='green-pulse'></div>
            View Collection
          </Link>
        </div>
      </div>
    </header>
  );
}
