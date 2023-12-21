import Publication from "@/app/components/blog/Publication";
import PostList from "@/app/components/blog/PostList";

const BlogLandingPage = ({params: {host}}) => {
  console.log(host);

  return(
   <Publication host={host} />
  )
}

export default BlogLandingPage;