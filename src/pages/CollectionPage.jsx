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

  const { data: collection, loading } = useFetch(`/collection/${id}`);

  return (
    <>
      <CollectionHeader {...collection} loading={loading} />
      <CollectionInfo {...collection} loading={loading} />
      <CollectionItems items={collection?.items} loading={loading} />
    </>
  );
}
