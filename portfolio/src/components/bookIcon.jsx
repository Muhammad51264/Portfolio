import {RiBookMarkFill} from "react-icons/ri"
import { motion } from "framer-motion";
const BookIcon = () => {
  return (
    // <div className="bg-white w-25">
    // <RiBookMarkFill size={35} color="#2ea970">
    // <motion.div whileHover={{ scale: 1.2 }}  />
    // </RiBookMarkFill>
    // </div>
            <motion.div whileHover={{ scale: 1.2 }} style={{width:"35px"}}  >

            <RiBookMarkFill size={35} color="#2ea970"/>

            </motion.div>
  )
}

export default BookIcon
