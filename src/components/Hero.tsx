import {motion} from "framer-motion";
import {coverIcon} from "../assets";

const Hero = () => {

    return (
        <section
            className={"flex h-[15rem] relative text-white flex-col overflow-hidden mx-auto uppercase justify-start items-center my-10 font-eudoxus text-4xl font-bold"}>
            <motion.h1 initial={{opacity: 0, y: -10}}
                       animate={{opacity: 1, y: 0}}
                       transition={{type: "spring", duration: 2}}
                       className={"z-10"}
            >Metaverse
            </motion.h1>
            <motion.div initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{type: "spring", duration: 5}}
                        className={"flex justify-center items-center w-full uppercase z-10"}>
                <span>Ma</span>
                <div className={"inline w-16 h-8 mx-[3px] border-4 rounded-r-full"}/>
                <span>ness</span>
            </motion.div>
            <img src={coverIcon} alt={"cover"}
                 className={"object-cover h-[12rem] absolute top-[30px] z-0 right-[-50px] rounded-tl-[10rem] w-screen"}/>
        </section>
    );
};

export default Hero;