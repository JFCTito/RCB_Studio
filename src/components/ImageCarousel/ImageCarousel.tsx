import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
}

const ImageCarousel = ({ images, interval = 3000, className = '' }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) {
    return <div className={`bg-gray-300 ${className}`}></div>;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className='w-full h-full object-cover transition-opacity duration-500'
      />

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
