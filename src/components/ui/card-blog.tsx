import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

type CardBlogProps = {
  title: string;
  text: string;
  date: string;
  url: string;
};

function CardBlog({ title, text, date, url }: CardBlogProps) {
  return (
    <a href={url}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-justify">{text}</p>
        </CardContent>
      </Card>
    </a>
  );
}

export default CardBlog;
