import { IconBrandGmail, IconBrandWhatsapp } from "@tabler/icons-react";
import { Card } from "./ui/card";
import { Section, SectionTitle } from "./ui/section";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animationVariants";
import { cn } from "@/lib/utils";

function Contact() {
  const contactIconSize = 25;
  return (
    <Section id="contact" height={0} className="relative top-24">
      <Card
        className={cn(
          "flex flex-col lg:flex-row items-center",
          "text-white sm:text-xl",
          "bg-black gap-3 lg:gap-10 px-6 py-10 w-screen sm:w-[80vw]"
        )}
      >
        <SectionTitle className="self-center lg:self-start text-center">
          Contact Me
        </SectionTitle>

        <div className="flex flex-col items-center justify-around w-[70%] md:flex-row gap-2 md:gap-5">
          <motion.span
            variants={defaultAnimation}
            initial="fromTop"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block"
          >
            <a
              href="mailto:muhammadrandy0027@gmail.com"
              className="flex items-center"
            >
              <IconBrandGmail
                size={contactIconSize}
                className="text-red-500 inline"
              />
              muhammadrandy0027@gmail.com
            </a>
          </motion.span>

          <motion.span
            variants={defaultAnimation}
            initial="fromBottom"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block"
          >
            <a
              href="https://wa.me/+6285822283507"
              className="flex items-center"
            >
              <IconBrandWhatsapp
                size={contactIconSize}
                className="text-green-600 inline"
              />
              +6285822283507
            </a>
          </motion.span>
        </div>
      </Card>
    </Section>
  );
}

export default Contact;
