import {motion} from "framer-motion";
import {texts} from "../json";

const Worlds = () => {
    return (
        <motion.div className={"my-10 text-center"}>
            <div className={"mb-2 text-[10px] text-gray-500"}>| The Worlds</div>
            <h1 className={"text-2xl font-eudoxus text-white font-bold"}>{texts.world.heading}</h1>
        </motion.div>
    );
};

export default Worlds;