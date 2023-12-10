// ImageDataFetcher.js
import { useState, useEffect } from 'react';

const useImageData = (filePath) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, [filePath]);

  return images;
};

export default useImageData;
