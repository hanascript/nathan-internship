import React, { useEffect, useState } from 'react';
import { useFetch } from '../components/hooks/useFetch';
import CollectionCard from '../components/ui/CollectionCard';

export default function CollectionsPage() {
  const { data: collections, loading, error } = useFetch('/collections');

  const [visibleCollections, setVisibleCollections] = useState(12);

  const visibleItems = collections && collections.slice(0, visibleCollections);
  const hasMore = collections && visibleCollections < collections.length;

  const handleLoadMore = () => {
    setVisibleCollections(prev => prev + 6);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className='container'>
        <div className='row'>
          <h1 className='collections-page__title'>Collections</h1>
          <div className='collections__body'>
            {new Array(12).fill(0).map((_, index) => (
              <div className='collection-column' key={index}>
                <CollectionCard.Skeleton />
              </div>
            ))}
          </div>
          <button className='collections-page__button'>Load more</button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container'>
        <div className='row'>
          <h1 className='collections-page__title'>Collections</h1>
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='collections-page__title'>Collections</h1>
        <div className='collections__body'>
          {visibleItems.map((collection, index) => (
            <div className='collection-column' key={index}>
              <CollectionCard {...collection} />
            </div>
          ))}
        </div>
        {hasMore && (
          <button className='collections-page__button' onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
