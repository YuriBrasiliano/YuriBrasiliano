import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import {courses} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from "../hoc"
import Tilt from "react-tilt"


const CoursesCard = ({index, title, hours, link}) => (
    <Tilt>
    <motion.div
    variants={fadeIn("","spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[200px] w-full xs:h-[130px] h-full">
      <div>
      <a href={`${link}`} target="_blank" >
      <p className="text-white tracking-wider text-[18px]">{title}</p>
      <p className="text-secondary tracking-wider text-[18px] mt-4 px-7">{hours}</p></a>
      </div>
    </motion.div>
    </Tilt>
)



const Courses = () => {
  return (
    <>
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have studied</p>
      <h1 className={styles.sectionHeadText}>Courses.</h1>
    </motion.div>

      <div className={`${styles.paddingX} mt-10 pb-14 flex flex-wrap gap-7 `}>
        {courses.map((title, index) => (
          <CoursesCard
          key = {title}
          {...title}          
           />
        ))}
      </div>
  
      </div>  


    </>
  )
}

export default SectionWrapper(Courses, "")