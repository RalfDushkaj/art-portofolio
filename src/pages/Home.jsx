import Hero from '../assets/images/Hero.jpg'
import { Link } from 'react-router-dom';
import { works } from '../contsants/homeImages'
import { writings } from '../contsants/homeWritings';


const Home = () => {
  return (
    <>
      <section className='w-full h-[92.3vh] bg-center bg-cover'>
          <img 
            src={Hero} 
            alt="Hero Image" 
            className='w-full h-full object-cover object-[51%_20%] brightness-50'
          />
          <div className='absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
            <h1 className='text-7xl text-center text-white font-thin'>It's Simple</h1>
            <h1 className='text-xl text-center text-white font-thin mt-5'>Colors are seeking stories</h1>
          </div>
      </section>
      
      <section className='py-30 px-20 max-[600px]:px-5 max-[600px]:py-10'>
        <div className='grid grid-cols-2 max-[1300px]:grid-cols-1 max-[1300px]:gap-10 items-top justify-center my-20 max-w-screen-2xl mx-auto'>
            <h1 className='font-medium text-center text-black text-6xl max-[600px]:text-5xl'>
              What do I paint?
            </h1>
          <div className='flex flex-col justify-center gap-3'>
            <p className='text-xl text-black'>
              We all inhabit a narrative, willingly or not. Despite the prevailing notion that we must adhere 
              strictly to our own story, within our own world, governed by our own rules, I sense, deep within, 
              the existence of a greater truth. It’s a narrative not of our making, yet one in which we play a part, 
              leaving our imprint. My journey is dedicated to uncovering this narrative, both for myself and for others…
            </p>
             <Link
              to='/about'
              className='text-amber-600 text-xl font-semibold max-[600px]:text-center hover:translate-x-2 hover:-skew-x-10 hover:duration-500'
             >Read More</Link>
          </div>
        </div>
      </section>

      <section className='bg-black py-20 px-2'>
        <div className='flex justify-center pb-10'>
           <h1 className='text-8xl text-white'>Works</h1>
        </div>
        <div className='grid grid-cols-3 justify-center items-center lg:grid-cols-3 md:grid-cols-2 max-[800px]:grid-cols-1'>
           {works.map((work) => (
             <div key={work.id} className='p-3 pb5 group'>
               <img
                src={work.image}
                alt={work.name}
                className='w-full h-full object-cover'
               />
                <p className='text-white text-center text-xl mt-5'>{work.name}</p>
             </div>
           ))}
        </div>
        <Link 
          to='/works' 
          className='hover:animate-pulse'>
          <p 
           className='text-white text-2xl pt-10 text-center'>
            Go to gallery
          </p>
        </Link>
      </section>

      <section className='py-10 px-30 max-w-screen-2xl mx-auto max-[700px]:px-10'>
         <div className='flex justify-center pb-30'>
           <h1 className='text-8xl'>Writings</h1>
        </div>
         <div className='grid grid-cols-3 gap-30 justify-center lg:grid-cols-3 md:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:gap-10'>
          {writings.map(writing => (
            <div key={writing.id} className='flex flex-col items-start'>
             <p className='text-gray-500 text-xl pb-2'>{writing.date}</p>
             <h1 className='text-3xl font-semibold pb-2'>{writing.title}</h1>
             <p className='text-xl pb-3'>{writing.preview}</p>
             <Link 
              to={`writings/${writing.slug}`} 
              className='cursor-pointer'>
              <p 
               className='text-2xl font-semibold transition duration-500 hover:translate-x-2 hover:-skew-x-10'>
                Read More
              </p>
             </Link>
            </div>
          ))}
         </div>
      </section>
    </>
  )
};

export default Home;