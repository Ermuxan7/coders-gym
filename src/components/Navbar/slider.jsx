import { motion, AnimatePresence} from "framer-motion"


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
                            <li><a href="/" className="hover:text-black">Home</a></li>
                            <li><a href="/" className="hover:text-black">Trainer</a></li>
                            <li><a href="/" className="hover:text-black">Program</a></li>
                            <li><a href="/" className="hover:text-black">Blog</a></li>
                            <li><a href="/" className="hover:text-black">Pricing</a></li>
                        </ul>
                    </div>
                </motion.div>
                )
            }
        </AnimatePresence>
    )

}

export default Slider