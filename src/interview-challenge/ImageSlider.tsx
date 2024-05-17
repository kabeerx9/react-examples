import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://ww1.tcbscans.org/wp-content/uploads/WP-manga/data/manga_62bda80970d6c/97e6ca11dff11ddef0922ca4459a7565/16.png',
  },
  {
    id: 2,
    url: 'https://i0.wp.com/www.spielanime.com/wp-content/uploads/2023/10/Jujutsu-Kaisen-Chapter-238-hints-at-Sukunas-next-big-fight-Will-he-lose-this-time-2.webp?resize=928%2C917&ssl=1',
  },
  {
    id: 3,
    url: 'https://beebom.com/wp-content/uploads/2023/06/gvs-223-hollow-purple.jpg?w=528',
  },
];

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => {
        if (prev === images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-around items-center">
      <div className="text-black text-5xl font-semibold">Image slider</div>
      <div className="w-1/2 h-1/2 bg-red-200 relative z-1 ">
        <div className="absolute flex items-center justify-center h-full w-10 left-0 z-10 cursor-pointer">
          <ArrowLeft
            onClick={() => {
              setActiveImage((prev) => {
                if (prev === 0) {
                  return images.length - 1;
                }
                return prev - 1;
              });
            }}
          />
        </div>
        <div className="absolute flex items-center  justify-center h-full w-10 right-0 z-10 cursor-pointer">
          <ArrowRight
            onClick={() => {
              setActiveImage((prev) => {
                if (prev === images.length - 1) {
                  return 0;
                }
                return prev + 1;
              });
            }}
          />
        </div>
        <img
          className="object-fill h-full w-full "
          src={images[activeImage].url}
          alt="image"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
