import React, { useState } from 'react';

const images = [
  'https://res.cloudinary.com/dad5dandd/image/upload/v1686375090/JAMAPP/Screenshot_2023-06-10_at_00.31.21_bquqxj.png',
  'https://res.cloudinary.com/dad5dandd/image/upload/v1685894241/JAMAPP/Screenshot_2023-06-04_at_10.57.15_yvjqq1.png',
  'https://res.cloudinary.com/dad5dandd/image/upload/v1685894514/JAMAPP/Screenshot_2023-06-04_at_11.01.49_ivhck3.png',
];

const HomeLandingTop: React.FC = () => {

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };
  
  return (
<div className="flex items-center justify-center">
      <div className="w-full mx-auto max-w-4xl my-16">
        <div className="relative flex flex-col md:flex-row">
          <div className="flex flex-col justify-center md:w-1/2 mx-4 md:mx-16">
            <h1 className="font-sans z-10 text-black font-bold text-2xl md:text-4xl text-center md:text-left max-w-xl">
              Bienvenidos a Jama, la mejor experiencia de comida peruana casera, a un paso de ti
            </h1>
          </div>
          <div className="relative md:w-1/2">
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full object-cover" />
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-200 text-white rounded-full" onClick={handlePrev}>
            🍴
            </button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-200 text-white rounded-full" onClick={handleNext}>
            🍽
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLandingTop;







