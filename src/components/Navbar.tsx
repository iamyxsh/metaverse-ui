import {menuIcon, searchIcon} from "../assets";
import {motion, useSpring} from "framer-motion"

const Navbar = () => {
    const spring = useSpring(100)

    return (
        <motion.nav
            initial={{y: 10, opacity: 0.5}}
            animate={{y: 0, opacity: 1}}
            transition={spring}
            className="flex justify-around items-center">
            <img src={searchIcon} alt="searchIcon"/>
            <h1 className={"font-eudoxus text-white uppercase text-1xl"}>Metaversus</h1>
            <img src={menuIcon} alt="menuIcon"/>
        </motion.nav>
    );
};

export default Navbar;