import { useState, useEffect } from 'react';

import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('paris');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log('Error Loading Images', error);
      });
  }, [term, isLoading]);
  return (
    <div className='container mx-auto my-8'>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className='text-6xl mx-auto mt-3 text-center'>No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className='text-6xl mx-auto mt-3 text-center'>Loading...</h1>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images &&
            images.map((image) => <ImageCard key={image.id} image={image} />)}
        </div>
      )}
    </div>
  );
}

export default App;
