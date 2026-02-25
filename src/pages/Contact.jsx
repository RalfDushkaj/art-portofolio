import contactHero from '../assets/images/gallery/img8.jpg'
import { socialLinks } from '../contsants/links';

const Contact = () => {
  return (
    <section className='w-full h-[92.3vh] bg-center bg-cover'>
      <img 
        src={contactHero} 
        alt="Hero Image" 
        className='w-full h-full object-cover object-[51%_20%] brightness-50'
      />
      <div className='absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
        <h1 className='text-9xl text-center text-white font-thin max-[1300px]:text-6xl max-[600px]:text-5xl'>Get in touch with me</h1>
        <div className='flex flex-col justify-center items-center gap-10 mt-20'>
          {socialLinks.map((social) =>(
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.name}
                >
                <i 
                  className={`fa-brands ${social.icon} text-white text-5xl cursor-pointer hover:animate-bounce`}
                />
              </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact;