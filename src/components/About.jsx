import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { eu } from '../assets'

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center
        flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
      
      </Tilt>
  )
}

const LinkedIn = () => {
  window.open("https://www.linkedin.com/in/yuri-brasiliano-664635160/", "_blank");
}

const Curriculo = () => {

  window.open('https://drive.google.com/file/d/1lrcUA3NzP_Z6O5Odhyl_GT6logu-IQrQ/view?usp=drive_link', '_blank');
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h1 className={styles.sectionHeadText}>Overview.</h1>
    </motion.div>
    <div style={{ display: "flex", flexDirection: "row" }}>
    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-12 text-secondary text-[17px] max-w-3xl leading-[30px]">
    Experienced Full-Stack Developer with a proven track record of crafting captivating and user-friendly web
applications. Successfully founded and led projects for small businesses, achieving exceptional results by
strategically aligning technology with objectives.<br />
Currently working on the development of a full-stack web application with significant potential to expand the
client's customer base and drive remarkable ROI. Proficient in multiple programming languages, enabling the
creation of scalable and resilient applications for the modern digital landscape. Committed to staying at the
forefront of technological advancements, consistently delivering digital experiences that exceed expectations.
<br />Dedicated to driving meaningful change through innovative, future-ready applications that enrich user lives and
fuel sustainable business growth. Excited to contribute expertise to your esteemed organization for ambitious
and cutting-edge development projects.
    </motion.p>
    <motion.div variants={fadeIn("","",1,1)}>
    <img 
    src={eu}
    style={{ marginLeft: "100px" }}
    className="sm:block hidden mt-[68px] rounded-full w-[200px] mb-10"
    />
    <button
    className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold 
     rounded-xl ml-[130px] sm:block hidden hover:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300'
     onClick={LinkedIn}>LinkedIn</button>
        <button
    className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold 
    rounded-xl mt-4 ml-[90px] sm:block hidden hover:bg-purple-800 focus:outline-none focus:ring focus:ring-violet-300'
    onClick={Curriculo}>Download Resume</button>
    </motion.div>
</div>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
