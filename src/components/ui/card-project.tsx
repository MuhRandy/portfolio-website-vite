import { Card, CardTitle } from "./card";
import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGithubFilled,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { ProjectData } from "@/lib/type";
import { cn } from "@/lib/utils";
import schoolWebsite from "@/assets/projects/school-website.jpg";
import quranMemorizeQuiz from "@/assets/projects/quran-memorize-quiz.png";
import markdownPreview from "@/assets/projects/react-markdown-preview.jpg";
import randomQuoteMachine from "@/assets/projects/random-quote-machine.jpg";
import bookshelfApp from "@/assets/projects/bookshelf-app.jpg";

function CardProject({
  projectName,
  imgSrc,
  siteLink,
  githubLink,
  desc,
  buildWith,
}: ProjectData) {
  const generateBuildWithElement = (
    buildWith: string,
    key: string | number
  ) => {
    switch (buildWith) {
      case "html":
        return (
          <li key={key}>
            <IconBrandHtml5 className="text-orange-600 inline" />
            HTML
          </li>
        );

      case "css":
        return (
          <li key={key}>
            <IconBrandCss3 className="text-blue-600 inline" />
            CSS
          </li>
        );

      case "javascript":
        return (
          <li key={key}>
            <IconBrandJavascript className="text-yellow-500 inline" />
            Javascript
          </li>
        );

      case "typescript":
        return (
          <li key={key}>
            <IconBrandTypescript className="text-blue-500 inline" />
            Typescript
          </li>
        );

      case "tailwindcss":
        return (
          <li key={key}>
            <IconBrandTailwind className="text-teal-500 inline" />
            TailwindCSS
          </li>
        );

      case "reactjs":
        return (
          <li key={key}>
            <IconBrandReact className="text-blue-400 inline" />
            ReactJs
          </li>
        );

      case "firebase":
        return (
          <li key={key}>
            <IconBrandFirebase className="text-orange-400 inline" />
            Firebase
          </li>
        );

      case "nextjs":
        return (
          <li key={key}>
            <IconBrandNextjs className="inline" />
            Next.js
          </li>
        );

      default:
        break;
    }
  };

  const generateIMG = (imgSrc: string, projectName: string) => {
    switch (imgSrc) {
      case "schoolWebsite":
        return <img src={schoolWebsite} alt={projectName} />;
      case "markdownPreview":
        return <img src={markdownPreview} alt={projectName} />;
      case "randomQuoteMachine":
        return <img src={randomQuoteMachine} alt={projectName} />;
      case "quranMemorizeQuiz":
        return <img src={quranMemorizeQuiz} alt={projectName} />;
      case "bookshelfApp":
        return <img src={bookshelfApp} alt={projectName} />;

      default:
        break;
    }
  };

  return (
    <Card className="overflow-hidden relative group">
      {generateIMG(imgSrc, projectName)}

      <div
        className={cn(
          "w-full h-full pb-4 px-4",
          "flex flex-col justify-center items-center gap-2"
        )}
      >
        <CardTitle className="text-center text-lg">{projectName}</CardTitle>

        <p className="text-center">{desc}</p>

        <div className="text-center">
          <p>Build with:</p>

          <ul className="flex flex-wrap justify-center gap-x-4">
            {buildWith?.map((item) => generateBuildWithElement(item, item))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <a href={siteLink} className="underline">
            Live Site
          </a>

          <a href={githubLink} className="flex items-center underline">
            <IconBrandGithubFilled size={15} /> Github
          </a>
        </div>
      </div>
    </Card>
  );
}

export default CardProject;
