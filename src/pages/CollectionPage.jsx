import React, { useEffect } from 'react';
import CollectionHeader from '../components/collection/CollectionHeader';
import CollectionInfo from '../components/collection/CollectionInfo';
import CollectionItems from '../components/collection/CollectionItems';
import { useParams } from 'react-router-dom';
import { useFetch } from '../components/hooks/useFetch';

export default function CollectionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const { data: collection, loading, error } = useFetch(`/collection/${id}`);

  return (
    <>
      <CollectionHeader
        title={collection.title}
        logo={collection.logo}
        imageLink={collection.imageLink}
        creatorId={collection.creatorId}
        creator={collection.creator}
        totalVolume={collection.totalVolume}
        floor={collection.floor}
        bestOffer={collection.bestOffer}
        listed={collection.listed}
        owners={collection.owners}
        loading={loading}
      />
      <CollectionInfo />
      <CollectionItems />
    </>
  );
}
