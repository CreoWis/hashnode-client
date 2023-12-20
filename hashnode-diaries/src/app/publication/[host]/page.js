import Publication from "@/app/components/blog/Publication";

const BlogLandingPage = ({params: {host}}) => {
  console.log(host);

  return(
   <Publication host={host} />
  )
}

export default BlogLandingPage;