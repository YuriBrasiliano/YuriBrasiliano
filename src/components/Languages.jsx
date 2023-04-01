import { motion } from "framer-motion"
import Tilt from 'react-tilt'
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import {fadeIn, textVariant} from '../utils/motion'
import { languages } from '../constants'

const LanguagesCard = ({index, title, icon}) =>{
    return(
      <Tilt className="xs:w-[225px] w-full">
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
            className="w-60 h-90 object-contain rounded-[30px]" />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
        
        </Tilt>
    )
  }


const Languages = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Where can I work</p>
      <h1 className={styles.sectionHeadText}>Languages.</h1>
    </motion.div>
    <div className='mt-20 flex flex-wrap gap-10'>
      {languages.map((language,index) => (
        <LanguagesCard key={language.title} index={index} {...language}/>
      ))}
      
    </div>

      </div>
    </div>
  )
}

export default SectionWrapper(Languages, "")