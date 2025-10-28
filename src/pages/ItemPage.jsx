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
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data: item, loading, error } = useFetch(`/item/${id}`);

  return (
    <>
      <ItemContent {...item} loading={loading} />
      <RecommendedItems collectionId={item?.collectionId} itemId={item?.id} collectionLoading={loading} />
    </>
  );
}
