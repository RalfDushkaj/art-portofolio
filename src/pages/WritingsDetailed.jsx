import { useParams } from 'react-router-dom';
import { detailedWritings } from '../contsants/writings.js';
import writingsHero from '../assets/images/gallery/img19.jpg'

const WritingsDetailed = () => {
  const { slug } = useParams();

  const writing = detailedWritings.find(
    (item) => item.slug === slug
  );

  if (!writing) {
    return <h1>Writing not found</h1>;
  }

  return (
    <>
      <section className='w-full h-[92.3vh] bg-center bg-cover'>
        <img 
          src={writingsHero} 
          alt="Hero Image" 
          className='w-full h-full object-cover object-[51%_20%] brightness-50'
        />
        <div className='absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
          <h1 className='text-9xl text-center text-white font-thin max-[1300px]:text-8xl max-[600px]:text-8xl'>{writing.title}</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <p className="text-lg leading-8 whitespace-pre-line">
          {writing.content}
        </p>
      </section>
    </>
  );
};

export default WritingsDetailed;