import { Link } from 'react-router-dom';
import { writings } from '../contsants/homeWritings.js';



const Writings = () => {
  return (
    <section className='py-10 px-30 max-w-screen-2xl mx-auto max-[700px]:px-10'>
         <div className='flex justify-center pb-30'>
           <h1 className='text-8xl'>Writings</h1>
        </div>
         <div className='grid grid-cols-3 gap-30 justify-center lg:grid-cols-3 md:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:gap-10'>
          {writings.map(writing => (
            <div key={writing.id} className='flex flex-col items-start justify-center'>
             <p className='text-gray-500 text-xl pb-2'>{writing.date}</p>
             <h1 className='text-3xl font-semibold pb-2'>{writing.title}</h1>
             <p className='text-xl pb-3'>{writing.preview}</p>
             <Link 
              to={`/writings/${writing.slug}`} 
              className='cursor-pointer'>
              <p 
               className='text-2xl font-semibold transition hover:translate-x-2 hover:-skew-x-10 hover:duration-500'>
                Read More
              </p>
             </Link>
            </div>
          ))}
         </div>
      </section>
  )
}

export default Writings;