import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

type CardExperienceProps = {
  jobTitle: string;
  company: string;
  jobDescription: string;
};

function CardExperience({
  jobTitle,
  company,
  jobDescription,
}: CardExperienceProps) {
  return (
    <Card className="sm:max-w-[350px]">
      <CardHeader>
        <CardTitle>{jobTitle}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>

      <CardContent className="text-justify">{jobDescription}</CardContent>
    </Card>
  );
}

export default CardExperience;
