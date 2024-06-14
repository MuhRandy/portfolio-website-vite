import { IconBrandTailwind } from "@tabler/icons-react";
import { Section, SectionText, SectionTitle } from "./ui/section";
import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animationVariants";

function SkillAndExperience() {
  const skillIconSize = 30;
  return (
    <Section id="skill-and-experience" className="gap-7">
      <div className="flex flex-col md:flex-row items-start justify-start gap-7">
        <div className="md:max-w-[70%] flex flex-col gap-7">
          <SectionTitle className="flex flex-col">
            <motion.span
              variants={defaultAnimation}
              whileInView="visible"
              viewport={{ once: true }}
              initial="fromTop"
              className="inline-block"
            >
              <span>Skill &</span>
              <span>Experience</span>
            </motion.span>
          </SectionTitle>

          <SectionText>
            <motion.span
              variants={defaultAnimation}
              initial="fromBottom"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block"
            >
              Having pursued a self-directed learning path in web development
              since graduating with my bachelor&apos;s degree, I&apos;ve
              actively engaged with online resources such as YouTube and
              platforms like Freecodecamp and Dicoding. Through dedication and
              practical application, I&apos;ve successfully developed several
              personal projects that showcase my skills and passion for web
              development. These projects not only reflect my technical
              abilities but also demonstrate my commitment to continuous
              learning and innovation. I am excited to contribute my knowledge
              and expertise to real-world projects and further expand my
              capabilities as a web developer.
            </motion.span>
          </SectionText>
        </div>

        <motion.div
          variants={defaultAnimation}
          initial="fromRight"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:max-w-[50%] text-xl"
        >
          <ul className="md:flex md:flex-col gap-2 grid grid-cols-2 sm:grid-cols-3">
            <li>
              <IconBrandHtml5
                size={skillIconSize}
                className="text-orange-600 inline"
              />
              HTML
            </li>

            <li>
              <IconBrandCss3
                size={skillIconSize}
                className="text-blue-600 inline"
              />
              CSS
            </li>

            <li>
              <IconBrandJavascript
                size={skillIconSize}
                className="text-yellow-500 inline"
              />
              Javascript
            </li>

            <li>
              <IconBrandTypescript
                size={skillIconSize}
                className="text-blue-500 inline"
              />
              Typescript
            </li>

            <li>
              <IconBrandTailwind
                size={skillIconSize}
                className="text-teal-500 inline"
              />
              TailwindCSS
            </li>

            <li>
              <IconBrandReact
                size={skillIconSize}
                className="text-blue-400 inline"
              />
              ReactJs
            </li>

            <li>
              <IconBrandFirebase
                size={skillIconSize}
                className="text-orange-400 inline"
              />
              Firebase
            </li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

export default SkillAndExperience;
