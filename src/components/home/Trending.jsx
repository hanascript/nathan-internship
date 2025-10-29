import React from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';

import VerifiedIcon from '../../assets/verified.png';
import Skeleton from '../ui/Skeleton';

export default function Trending() {
  const { data: trending, loading } = useFetch('/trendingNFTs');

  if (loading) {
    return (
      <section id='trending' data-aos='fade-up'>
        <div className='container'>
          <div className='row trending__row'>
            <div className='trending__header' data-aos='fade-up' data-aos-delay='0'>
              <h2 className='trending__header__title'>Trending NFTs</h2>
              <Link className='trending__header__button' to={'/collections'}>
                View All
              </Link>
            </div>
            <div className='trending__body' data-aos='fade-up' data-aos-delay='100'>
              <div className='trending-column'>
                <div className='trending-column__header'>
                  <div className='trending-column__header__rank'>#</div>
                  <div className='trending-column__header__collection'>Collection</div>
                  <div className='trending-column__header__price'>Floor Price</div>
                  <div className='trending-column__header__price'>Volume</div>
                </div>
                <div className='trending-column__body'>
                  {new Array(5).fill(0).map((_, index) => (
                    <div key={index} className='trending-collection'>
                      <div className='trending-collection__rank'>{index + 1}</div>
                      <div className='trending-collection__collection'>
                        <figure className='trending-collection__img__wrapper'>
                          <Skeleton width='100%' height='100%' borderRadius='12px' />
                        </figure>
                        <div className='trending-collection__name'>
                          <Skeleton width='130px' height='18px' borderRadius='2px' />
                        </div>
                      </div>
                      <div className='trending-collection__price'>
                        <span className='trending-collection__price__span'>
                          <Skeleton width='70px' height='18px' borderRadius='2px' />
                        </span>
                      </div>
                      <div className='trending-collection__volume'>
                        <span className='trending-collection__volume__span'>
                          <Skeleton width='70px' height='18px' borderRadius='2px' />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='trending-column'>
                <div className='trending-column__header trending-column__header2'>
                  <div className='trending-column__header__rank'>#</div>
                  <div className='trending-column__header__collection'>Collection</div>
                  <div className='trending-column__header__price'>Floor Price</div>
                  <div className='trending-column__header__price'>Volume</div>
                </div>
                <div className='trending-column__body'>
                  {new Array(5).fill(0).map((_, index) => (
                    <div key={index} className='trending-collection'>
                      <div className='trending-collection__rank'>{index + 6}</div>
                      <div className='trending-collection__collection'>
                        <figure className='trending-collection__img__wrapper'>
                          <Skeleton width='100%' height='100%' borderRadius='12px' />
                        </figure>
                        <div className='trending-collection__name'>
                          <Skeleton width='130px' height='18px' borderRadius='2px' />
                        </div>
                      </div>
                      <div className='trending-collection__price'>
                        <span className='trending-collection__price__span'>
                          <Skeleton width='70px' height='18px' borderRadius='2px' />
                        </span>
                      </div>
                      <div className='trending-collection__volume'>
                        <span className='trending-collection__volume__span'>
                          <Skeleton width='70px' height='18px' borderRadius='2px' />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='trending' data-aos='fade-up'>
      <div className='container'>
        <div className='row trending__row'>
          <div className='trending__header' data-aos='fade-up' data-aos-delay='0'>
            <h2 className='trending__header__title' >Trending NFTs</h2>
            <Link className='trending__header__button' to={'/collections'}>
              View All
            </Link>
          </div>
          <div className='trending__body' data-aos='fade-up' data-aos-delay='100'>
            <div className='trending-column'>
              <div className='trending-column__header'>
                <div className='trending-column__header__rank'>#</div>
                <div className='trending-column__header__collection'>Collection</div>
                <div className='trending-column__header__price'>Floor Price</div>
                <div className='trending-column__header__price'>Volume</div>
              </div>
              <div className='trending-column__body'>
                {trending.slice(0, 5).map((item, index) => (
                  <Link to={`/collection/${item.collectionId}`} key={index} className='trending-collection'>
                    <div className='trending-collection__rank'>{item.rank}</div>
                    <div className='trending-collection__collection'>
                      <figure className='trending-collection__img__wrapper'>
                        <img src={item.imageLink} alt='' className='trending-collection__img' />
                      </figure>
                      <div className='trending-collection__name'>{item.title}</div>
                      <img src={VerifiedIcon} className='trending-collection__verified' />
                    </div>
                    <div className='trending-collection__price'>
                      <span className='trending-collection__price__span'>{Number(item.floor).toFixed(2)} ETH</span>
                    </div>
                    <div className='trending-collection__volume'>
                      <span className='trending-collection__volume__span'>{item.totalVolume} ETH</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className='trending-column'>
              <div className='trending-column__header trending-column__header2'>
                <div className='trending-column__header__rank'>#</div>
                <div className='trending-column__header__collection'>Collection</div>
                <div className='trending-column__header__price'>Floor Price</div>
                <div className='trending-column__header__price'>Volume</div>
              </div>
              <div className='trending-column__body'>
                {trending.slice(5, 10).map((item, index) => (
                  <Link to={`/collection/${item.collectionId}`} key={index} className='trending-collection'>
                    <div className='trending-collection__rank'>{item.rank}</div>
                    <div className='trending-collection__collection'>
                      <figure className='trending-collection__img__wrapper'>
                        <img src={item.imageLink} alt='' className='trending-collection__img' />
                      </figure>
                      <div className='trending-collection__name'>{item.title}</div>
                      <img src={VerifiedIcon} className='trending-collection__verified' />
                    </div>
                    <div className='trending-collection__price'>
                      <span className='trending-collection__price__span'>{Number(item.floor).toFixed(2)} ETH</span>
                    </div>
                    <div className='trending-collection__volume'>
                      <span className='trending-collection__volume__span'>{item.totalVolume} ETH</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
