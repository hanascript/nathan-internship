import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from '../components/hooks/useFetch';

import ItemContent from '../components/item/ItemContent';
import RecommendedItems from '../components/item/RecommendedItems';

export default function ItemPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data: item, loading } = useFetch(`/item/${id}`);

  return (
    <>
      <ItemContent {...item} loading={loading} />
      <RecommendedItems collectionId={item?.collectionId} itemId={item?.id} loading={loading} />
    </>
  );
}
