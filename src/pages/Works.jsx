import { images } from '../contsants/gallery';

const Works = () => {
  return (
    <section className='bg-black py-30'>
      <div className='flex justify-center pb-10'>
        <h1 className='text-8xl text-white'>Works</h1>
      </div>
      <div className='grid grid-cols-3 justify-center items-top lg:grid-cols-3 md:grid-cols-2 max-[800px]:grid-cols-1'>
        {images.map((image) => (
          <div key={image.id} className='px-8 py-8 mb-5 group'>
            <img
              src={image.image}
              alt={image.title}
              className='w-full h-full object-cover hover:-translate-y-4 hover:duration-300'
            />
              <p className='text-white text-center text-xl mb-5 opacity-0 group-hover:opacity-100 group-hover:duration-1000'>{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works;