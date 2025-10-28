import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShapes, faShoppingBag, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCountdown from './ItemCountdown';

import Skeleton from '../ui/Skeleton';

export default function ItemContent({
  favorites,
  imageLink,
  title,
  collectionId,
  collection,
  ownerId,
  owner,
  views,
  expiryDate,
  ethPrice,
  usdPrice,
  loading,
}) {
  if (loading) {
    return (
      <section id='item-info'>
        <div className='container'>
          <div className='row item-page__row'>
            <div className='item-page__left'>
              <figure className='item-page__img__wrapper'>
                <div className='item-page__img__details'>
                  <FontAwesomeIcon icon={faEthereum} className='item-page__img__icon' />
                  <div className='item-page__img__likes'>
                    <Skeleton width='36px' height='16px' borderRadius='4px' />
                  </div>
                </div>
                <Skeleton width='100%' height='100%' borderRadius='0px' />
              </figure>
            </div>
            <div className='item-page__right'>
              <div className='item-page__collection light-blue'>
                <Skeleton width='140px' height='16px' borderRadius='4px' />
              </div>
              <h1 className='item-page__name'>
                <Skeleton width='280px' height='16px' borderRadius='4px' />
              </h1>
              <span className='item-page__owner'>
                <Skeleton width='140px' height='16px' borderRadius='4px' />
              </span>
              <div className='item-page__details'>
                <div className='item-page__detail'>
                  <Skeleton width='84px' height='16px' borderRadius='4px' />
                </div>
                <div className='item-page__detail'>
                  <Skeleton width='84px' height='16px' borderRadius='4px' />
                </div>
                <div className='item-page__detail'>
                  <Skeleton width='84px' height='16px' borderRadius='4px' />
                </div>
              </div>
              <div className='item-page__sale'>
                <div className='item-page__sale__header'>
                  <Skeleton width='240px' height='16px' borderRadius='4px' />
                </div>
                <div className='item-page__sale__body'>
                  <span className='item-page__sale__label'>
                    <Skeleton width='84px' height='16px' borderRadius='4px' />
                  </span>
                  <div className='item-page__sale__price'>
                    <span className='item-page__sale__price__eth'>
                      <Skeleton width='152px' height='16px' borderRadius='4px' />
                    </span>
                    <span className='item-page__sale__price__dollars'>
                      <Skeleton width='152px' height='16px' borderRadius='4px' />
                    </span>
                  </div>
                  <div className='item-page__sale__buttons'>
                    <Skeleton width='774px' height='48px' borderRadius='12px' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='item-info'>
      <div className='container'>
        <div className='row item-page__row'>
          <div className='item-page__left'>
            <figure className='item-page__img__wrapper'>
              <div className='item-page__img__details'>
                <FontAwesomeIcon icon={faEthereum} className='item-page__img__icon' />
                <div className='item-page__img__likes'>
                  <FontAwesomeIcon icon={faHeart} className='item-page__img__icon' />
                  <span className='item-page__img__likes__text'>{favorites}</span>
                </div>
              </div>
              <img src={imageLink} alt='' className='item-page__img' />
            </figure>
          </div>
          <div className='item-page__right'>
            <Link to={`/collection/${collectionId}`} className='item-page__collection light-blue'>
              {collection}
            </Link>
            <h1 className='item-page__name'>{title}</h1>
            <span className='item-page__owner'>
              Owned by{' '}
              <Link to={`/user/${ownerId}`} className='light-blue item-page__owner__link'>
                {owner}
              </Link>
            </span>
            <div className='item-page__details'>
              <div className='item-page__detail'>
                <FontAwesomeIcon icon={faEye} className='item-page__detail__icon' />
                <span className='item-page__detail__text'>{views} views</span>
              </div>
              <div className='item-page__detail'>
                <FontAwesomeIcon icon={faHeart} className='item-page__detail__icon' />
                <span className='item-page__detail__text'>{favorites} favorites</span>
              </div>
              <div className='item-page__detail'>
                <FontAwesomeIcon icon={faShapes} className='item-page__detail__icon' />
                <span className='item-page__detail__text'>PFPs</span>
              </div>
            </div>
            <div className='item-page__sale'>
              <div className='item-page__sale__header'>
                <div className='green-pulse'></div>
                <span>
                  Sale ends in <ItemCountdown expiryDate={expiryDate} />
                </span>
              </div>
              <div className='item-page__sale__body'>
                <span className='item-page__sale__label'>Current price</span>
                <div className='item-page__sale__price'>
                  <span className='item-page__sale__price__eth'>{ethPrice} ETH</span>
                  <span className='item-page__sale__price__dollars'>{usdPrice}</span>
                </div>
                <div className='item-page__sale__buttons'>
                  <div className='item-page__sale__buy'>
                    <button className='item-page__sale__buy__button disabled'>Buy now</button>
                    <button className='item-page__sale__buy__icon disabled'>
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                  </div>
                  <button className='item-page__sale__offer disabled'>
                    <FontAwesomeIcon icon={faTag} />
                    Make offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
