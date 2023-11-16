import {texts} from "../json";

const About = () => {
    return (
        <section className={"text-gray-300 px-5 text-center text-[20px] font-eudoxus"}>
            <div className={"mb-2 text-[10px] text-gray-500"}>| About Metaverse</div>
            {texts.about}
        </section>
    );
};

export default About;