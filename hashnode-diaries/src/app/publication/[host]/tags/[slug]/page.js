import Publication from "@/app/components/blog/Publication";
const BlogDetailPage = ({ params: { host, slug } }) => {
  return <Publication host={host} tag={slug} />;
};

export default BlogDetailPage;
