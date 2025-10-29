import React, { useEffect } from 'react';
import AOS from 'aos';

import SelectedCollection from '../components/home/SelectedCollection.jsx';
import NewCollections from '../components/home/NewCollections.jsx';
import PopularCollections from '../components/home/PopularCollections.jsx';
import Trending from '../components/home/Trending.jsx';

import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <SelectedCollection />
      <Trending />
      <NewCollections />
      <PopularCollections />
    </>
  );
}
