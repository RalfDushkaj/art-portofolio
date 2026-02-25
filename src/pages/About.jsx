import aboutHero from '../assets/images/homeImages/homeimg2.jpg'
import { Link } from 'react-router-dom';
import { bios } from '../contsants/aboutSection';
import { achievements } from '../contsants/aboutSection';

const About = () => {
  return (
    <>
      <section className='w-full h-[92.3vh] bg-center bg-cover'>
        <img 
          src={aboutHero} 
          alt="Hero Image" 
          className='w-full h-full object-cover object-[50%_65%] brightness-50'
        />
        <div className='absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
          <h1 className='text-7xl text-center text-white font-thin'>It's Simple</h1>
          <h1 className='text-xl text-center text-white font-thin mt-5'>Colors are seeking stories</h1>
        </div>
      </section>

       <section className='py-20 px-20 max-[600px]:px-5 max-[1000px]:py-10'>
        <div className='grid grid-cols-2 max-[1300px]:grid-cols-1 max-[1300px]:gap-10 items-top justify-center my-20 max-w-screen-2xl mx-auto'>
            <h1 className='font-medium text-center text-black text-6xl max-[600px]:text-5xl'>
              What do I paint?
            </h1>
          <div className='flex flex-col justify-center gap-3'>
            <p className='text-xl text-black'>
             We all inhabit a narrative, willingly or not. Despite the prevailing notion that we must adhere strictly to our own story, 
             within our own world, governed by our own rules, I sense, deep within, the existence of a greater truth. It’s a narrative 
             not of our making, yet one in which we play a par t, leaving our imprint. My journey is dedicated to uncovering this narrative, 
             both for myself and for others. I didn’t craft my life, my values, or the world around me; they existed before me, shaped by 
             forces greater than myself. Unveiling what lies beyond and beneath me is akin to char ting the reality that surrounds us, often 
             hidden in plain sight. Through this exploration, I’ve come to realize that within me resides something greater than the individual
              ‘I,’ alongside a darker aspect I’ve long avoided. The ‘I’ suddenly appears diminutive, caught between these opposing forces, a 
              recurring theme throughout my existence. 
            </p>
          </div>
        </div>
      </section>

      <section className='px-10 py-30 bg-black'>
        <div className='flex flex-row gap-30 items-top justify-center max-[1200px]:flex-col'>
          <div className='flex flex-col w-full'>
          {bios.map((bio) => (
            <div 
             key={bio.id}
             className='flex'>
             <p className='text-white pb-3 text-xl'>{bio.content}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col w-full'>
          {achievements.map((achievement) =>(
            <div 
             key={achievement.id}
             className='flex flex-col'
            >
             <p className='text-white pb-3 text-xl'>{achievement.content}</p>
            </div>
          ))}
        </div>
        </div>

        <div className='pt-20'>  
          <Link 
          to='/works' 
          className='cursor-pointer'>
          <p 
           className='text-white text-2xl pt-10 text-center transition duration-500 hover:translate-x-2 hover:-skew-x-10 hover:animate-pulse'>
            Go to gallery
          </p>
        </Link>
        </div>

      </section>
    </>
  )
}

export default About;