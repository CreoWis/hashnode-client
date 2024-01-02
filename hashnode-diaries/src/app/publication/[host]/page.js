import Publication from "@/app/components/blog/Publication";
import Link from "next/link";

const BlogLandingPage = ({ params: { host } }) => {
  return (
    <>
      <Publication host={host} />
    </>
  );
};

export default BlogLandingPage;
