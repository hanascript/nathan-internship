import React from 'react';
import Skeleton from '../ui/Skeleton';

export default function CollectionInfo({ description, creatorEarnings, chain, createdDate, totalItems, loading }) {
  if (loading) {
    return (
      <section id='collection-info'>
        <div className='row'>
          <div className='collection-info__wrapper'>
            <div className='collection-info__description'>
              <Skeleton width='620px' height='16px' borderRadius='4px' />
              <Skeleton width='620px' height='16px' borderRadius='4px' />
              <Skeleton width='434px' height='16px' borderRadius='4px' />
            </div>
            <div className='collection-info__details'>
              <span className='collection-info__detail'>
                <Skeleton width='58px' height='16px' borderRadius='4px' />
              </span>

              <span className='collection-info__detail'>
                <Skeleton width='120px' height='16px' borderRadius='4px' />
              </span>

              <span className='collection-info__detail'>
                <Skeleton width='132px' height='16px' borderRadius='4px' />
              </span>

              <span className='collection-info__detail'>
                <Skeleton width='108px' height='16px' borderRadius='4px' />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id='collection-info'>
      <div className='row'>
        <div className='collection-info__wrapper'>
          <p className='collection-info__description'>{description}</p>
          <div className='collection-info__details'>
            <span className='collection-info__detail'>
              Items
              <span className='collection-info__detail__data'> {totalItems}</span>
            </span>
            ·
            <span className='collection-info__detail'>
              Created
              <span className='collection-info__detail__data'> {createdDate}</span>
            </span>
            ·
            <span className='collection-info__detail'>
              Creator earnings
              <span className='collection-info__detail__data'> {creatorEarnings}%</span>
            </span>
            ·
            <span className='collection-info__detail'>
              Chain
              <span className='collection-info__detail__data'> {chain}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
