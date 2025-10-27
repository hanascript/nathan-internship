import { Link } from 'react-router-dom';

import Skeleton from './Skeleton';

const CollectionCard = ({ id, imageLink, title, floor, totalVolume }) => {
  return (
    <Link to={`/collection/${id}`} className='collection'>
      <img src={imageLink} alt='' className='collection__img' />
      <div className='collection__info'>
        <h3 className='collection__name'>{title}</h3>
        <div className='collection__stats'>
          <div className='collection__stat'>
            <span className='collection__stat__label'>Floor</span>
            <span className='collection__stat__data'>{Number(floor).toFixed(2)} ETH</span>
          </div>
          <div className='collection__stat'>
            <span className='collection__stat__label'>Total Volume</span>
            <span className='collection__stat__data'>{totalVolume} ETH</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

CollectionCard.Skeleton = () => {
  return (
    <div className='collection'>
      <div className='collection__img'>
        <Skeleton width='100%' height='100%' borderRadius='2px' />
      </div>
      <div className='collection__info'>
        <h3 className='collection__name'>
          <Skeleton width='100%' height='18px' borderRadius='2px' />
        </h3>
        <div className='collection__stats'>
          <div className='collection__stat'>
            <span className='collection__stat__label'>
              <Skeleton width='60%' height='18px' borderRadius='2px' />
            </span>
            <span className='collection__stat__data'>
              <Skeleton width='85%' height='18px' borderRadius='2px' />
            </span>
          </div>
          <div className='collection__stat'>
            <span className='collection__stat__label'>
              <Skeleton width='60%' height='18px' borderRadius='2px' />
            </span>
            <span className='collection__stat__data'>
              <Skeleton width='85%' height='18px' borderRadius='2px' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
