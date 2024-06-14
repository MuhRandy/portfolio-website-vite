import { Section, SectionText, SectionTitle } from "./ui/section";
import { Button } from "./ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animationVariants";

function About() {
  return (
    <Section id="about" bgColor="slate" className="gap-5 sm:w-[60vw]">
      <SectionTitle>
        <motion.span
          variants={defaultAnimation}
          initial="fromLeft"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block"
        >
          About Me
        </motion.span>
      </SectionTitle>

      <SectionText>
        <motion.span
          variants={defaultAnimation}
          initial="fromRight"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block"
        >
          As a 2022 Mathematics graduate from Lambung Mangkurat University, I am
          actively engaged in self-learning web programming. With a strong
          passion for web development, I am committed to enhancing my skills in
          crafting dynamic and responsive websites. Eager to bring creativity
          and technical expertise to innovative projects, I am excited to embark
          on a fulfilling career in the dynamic field of web development.
        </motion.span>
      </SectionText>

      <motion.div
        variants={defaultAnimation}
        initial="fromLeft"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button variant={"primary"}>
          <a
            href="https://docs.google.com/document/d/1hIBQzHBIAcHxX6sC5b8NVqLpdS6w0uK7Ynj_wRlGvAY/edit?usp=sharing"
            target="_blank"
            className="flex items-center"
          >
            Read More <IconArrowRight size={15} />
          </a>
        </Button>
      </motion.div>
    </Section>
  );
}

export default About;
