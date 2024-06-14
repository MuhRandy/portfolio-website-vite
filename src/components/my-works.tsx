import { Section, SectionTitle } from "./ui/section";
import CardProject from "./ui/card-project";
import { ProjectData, ProjectsData } from "@/lib/type";
import data from "@/assets/data.json";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animationVariants";

function MyWorks() {
  const { projects }: { projects: ProjectsData } = data;

  return (
    <Section id="my-work" className="gap-7" bgColor="slate">
      <SectionTitle className="self-center">
        <motion.span
          variants={defaultAnimation}
          initial={{ opacity: 0 }}
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block"
        >
          My Works
        </motion.span>
      </SectionTitle>

      <div className="flex flex-col gap-4 sm:px-10">
        {projects.map((project: ProjectData, index: number) => {
          return (
            <motion.div
              key={index}
              variants={defaultAnimation}
              initial="fromRight"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CardProject
                projectName={project.projectName}
                imgSrc={project.imgSrc}
                siteLink={project.siteLink}
                githubLink={project.githubLink}
                desc={project.desc}
                buildWith={project.buildWith}
              />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default MyWorks;
