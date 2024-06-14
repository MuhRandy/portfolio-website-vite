import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Section } from "./ui/section";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";

function Footer() {
  return (
    <footer>
      <Section
        id="footer"
        bgColor="slate"
        className="gap-2 text-base sm:text-xl text-center"
      >
        <div className="flex gap-3 pt-24">
          <a href="https://www.linkedin.com/in/muhammad-randy/">
            <IconBrandLinkedin size={35} className="text-blue-500" />
          </a>

          <a href="#">
            <IconBrandFacebookFilled size={35} className="text-blue-700" />
          </a>

          <a href="#">
            <IconBrandInstagram size={35} className="text-red-500" />
          </a>

          <a href="https://twitter.com/RandyThz">
            <IconBrandTwitterFilled size={35} className="text-blue-500" />
          </a>

          <a href="https://github.com/MuhRandy">
            <IconBrandGithubFilled size={35} />
          </a>
        </div>

        <p>Copyright © 2024 - Created by Muhammad Randy</p>

        <p>Made with ❤ using Vite</p>
      </Section>
    </footer>
  );
}

export default Footer;
