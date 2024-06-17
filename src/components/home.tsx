import { Button } from "./ui/button";
import { Section, SectionText, SectionTitle } from "./ui/section";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animationVariants";
import { cn } from "@/lib/utils";
import profil from "@/assets/profil.jpg";

function Home() {
  return (
    <Section id="home" className="md:flex-row md:justify-around">
      {/* Home Text */}
      <div
        className={cn(
          "max-w-full md:max-w-[60%]",
          "flex flex-col justify-between gap-5"
        )}
      >
        <SectionTitle>
          <TypeAnimation
            sequence={[
              "Hello, I'm Muhammad Randy",
              3000,
              "Hello, I'm a Web Developer",
              3000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </SectionTitle>

        <SectionText>
          <motion.span
            variants={defaultAnimation}
            animate="visible"
            initial="fromLeft"
            className="inline-block"
          >
            I am a Web Developer. Now I live in Banjar, South Kalimantan. If you
            are interested in working with me, you can contact me to hire me.
          </motion.span>
        </SectionText>

        <motion.div
          variants={defaultAnimation}
          animate="visible"
          initial="fromRight"
          className="self-center"
        >
          <img
            src={profil}
            alt="Muhammad Randy's Profil Picture"
            className="w-[40vw] h-auto md:hidden"
          />
        </motion.div>

        <div className="flex gap-2 self-center md:self-auto">
          <motion.div
            variants={defaultAnimation}
            initial="fromBottom"
            animate="visible"
          >
            <Button variant={"primary"}>
              <a href="https://docs.google.com/document/export?format=pdf&id=1hIBQzHBIAcHxX6sC5b8NVqLpdS6w0uK7Ynj_wRlGvAY">
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={defaultAnimation}
            initial="fromTop"
            animate="visible"
          >
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <Button variant={"outlineSecondary"}>Contact Me</Button>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* --- */}

      <motion.div
        animate={{ rotate: 5 }}
        initial={{ rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <img
          src={profil}
          alt="Muhammad Randy's Profil Picture"
          className="w-[200px] h-auto hidden md:block rounded-xl"
        />
      </motion.div>
    </Section>
  );
}

export default Home;
