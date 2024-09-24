// src/components/ImageGallery.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const API_KEY = 'zCDfY1tFsGY5fvEctpSOzEa-rdLcrs2V7aEw_WyTpnE'; 
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: {
            query: 'electric vehicle',
            per_page: 10,
          },
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        });
        setImages(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching images.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description || 'Electric Vehicle'}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
