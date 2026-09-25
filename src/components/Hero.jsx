import { motion } from "framer-motion";
import { styles } from "../styles";
import './Hero.css';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className='absolute inset-0 flex justify-center items-center'>
        <img
          src="src/assets/drivingschool(1).png"
          alt="Hero Image Large"
          className="hero-image hero-image-large"
        />
        <img
          src="src/assets/driving.png"
          alt="Hero Image Small"
          className="hero-image hero-image-small"
        />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <div className='flex flex-col items-center'>
          <a href='#about' className='see-more'>
            <span>NOS OFFRES</span>
            <motion.svg
              className='see-more-icon'
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 21c-.553 0-1-.447-1-1v-16.586l-5.293 5.293c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l7-7c.391-.391 1.023-.391 1.414 0l7 7c.391.391.391 1.023 0 1.414s-1.023.391-1.414 0l-5.293-5.293v16.586c0 .553-.447 1-1 1z"/>
            </motion.svg>
          </a>
        </div>
      </div>

      <div className='absolute bottom-32 left-10'>
        <a href='#contact' className='contact-us'>
          Contacter Nous
        </a>
      </div>
    </section>
  );
};

export default Hero;
