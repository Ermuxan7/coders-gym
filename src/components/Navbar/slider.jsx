import { motion, AnimatePresence} from "framer-motion"
import { NavbarMenu } from "../../mockData/data"


const Slider = ({open}) => {
    return(
        <AnimatePresence mode="wait">
        {open && (
            <motion.div 
            intial = {{opacity: 0, x: 100}}
            animate = {{opacity: 1, x: 0}}
            exit = {{opacity: 0, x: -100}}
            className = "absolute top-20 left-0 h-screen w-full z-20 bg-orange-400"
            >
                <div className="font-semibold text-2xl uppercase rounded-3xl py-10 m-6 text-white">
                    <ul className="flex gap-8 items-center justify-center flex-col">
                        {NavbarMenu.map((item, idx) =>(
                            <li key={idx}><a href="/" className="hover:text-black">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </motion.div>
            )
        }
        </AnimatePresence>
    )

}

export default Slider