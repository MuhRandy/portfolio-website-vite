import { Section, SectionTitle } from "./ui/section";
import CardBlog from "./ui/card-blog";
import { PostData, PostsData } from "@/lib/type";
import data from "@/assets/data.json";
import { motion } from "framer-motion";
import { defaultAnimation, fromRight } from "@/lib/animationVariants";

function MyBlog() {
  const { posts }: { posts: PostsData } = data;

  return (
    <Section id="my-blog" className="gap-7">
      <SectionTitle className="self-center">
        <motion.span
          className="inline-block"
          variants={defaultAnimation}
          initial={{ opacity: 0 }}
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Blog
        </motion.span>
      </SectionTitle>

      <motion.div
        variants={fromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
      >
        {posts.map((post: PostData, index: number) => {
          return (
            <motion.div key={index} variants={fromRight}>
              <CardBlog
                title={post.title}
                text={post.text}
                date={post.date}
                url={post.url}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

export default MyBlog;
