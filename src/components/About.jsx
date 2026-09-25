import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-40 h-40A object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Bienvenue chez notre auto-école ! Nous offrons une gamme complète de services pour tous vos besoins en matière de conduite. Que vous appreniez à conduire une voiture, une moto, ou que vous cherchiez une formation supervisée, nous avons ce qu'il vous faut.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

// Define your services array with appropriate icons and titles for the driving school
const services = [
  {
    title: "Auto",
    icon: "src/assets/PERMISB.jpeg", // replace with actual path to the auto icon
  },
  {
    title: "Moto (A2)",
    icon: "src/assets/MOTO.png", // replace with actual path to the moto icon
  },
  {
    title: "AAC",
    icon: "src/assets/AAC_Etablissement.png", // replace with actual path to the AAC icon
  },
  {
    title: "Conduite supervisée",
    icon: "src/assets/conduitesupervisee.jpeg", // replace with actual path to the supervised driving icon
  },
];
