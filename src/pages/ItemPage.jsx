import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShapes, faShoppingBag, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../components/hooks/useFetch';
import ItemCountdown from '../components/item/ItemCountdown';
import RecommendedItems from '../components/item/RecommendedItems';
import ItemContent from '../components/item/ItemContent';

export default function ItemPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const { data: item, loading, error } = useFetch(`/item/${id}`);

  return (
    <>
      <ItemContent
        // favorites={item?.favorites}
        // imageLink={item?.imageLink}
        // title={item?.title}
        // collectionId={item?.collectionId}
        // collection={item?.collection}
        // ownerId={item?.ownerId}
        // owner={item?.owner}
        // views={item?.views}
        // expiryDate={item?.expiryDate}
        // ethPrice={item?.ethPrice}
        // usdPrice={item?.usdPrice}
        {...item}
        loading={loading}
      />

      <RecommendedItems />
    </>
  );
}
