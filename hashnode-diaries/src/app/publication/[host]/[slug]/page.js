import PostDetails from "@/app/components/blog/PostDetails"
const BlogDetailPage = ({params: {host, slug}}) => {
  return(
    <PostDetails host={host} slug={slug} />
  )
}

export default BlogDetailPage