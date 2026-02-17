import Hero from '../assets/images/Hero.jpg'
import { Link } from 'react-router-dom';


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
            <h1 className='text-xl text-center text-white font-thin mt-5'>Colors are seeking tories</h1>
          </div>
      </section>
      
      <section className='py-40 px-20 max-[600px]:px-5'>
        <div className='grid grid-cols-2 max-[1300px]:grid-cols-1 max-[1300px]:gap-10 items-top justify-center my-20'>
          <div>
             <h1 className='font-medium text-center text-black text-6xl max-[600px]:text-5xl'>What do I paint?</h1>
          </div>
          <div className='flex flex-col justify-center gap-3'>
             <p className='text-xl text-black'>
                We all inhabit a narrative, willingly or not. Despite the prevailing notion that we must adhere 
                strictly to our own story, within our own world, governed by our own rules, I sense, deep within, 
                the existence of a greater truth. It’s a narrative not of our making, yet one in which we play a part, 
                leaving our imprint. My journey is dedicated to uncovering this narrative, both for myself and for others…
              </p>
             <Link
              to='/about'
              className='text-amber-600 text-xl font-semibold max-[600px]:text-center'
             >Read More</Link>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;