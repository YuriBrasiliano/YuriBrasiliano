import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import {courses} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from "../hoc"
import{ capa } from "../assets"

const CoursesCard = ({index, title, date, points}) => (
    <motion.div
    variants={fadeIn("","spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[100px] w-full xs:h-[200px] h-full ">
      <div>
      <p className="text-white tracking-wider text-[18px] rotate-90">{title}</p>
      </div>
    </motion.div>
)



const Courses = () => {
  return (
    <>
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have studied</p>
      <h1 className={styles.sectionHeadText}>Certificates.</h1>
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