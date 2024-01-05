import PostCard from "./PostCard";
import LatestPost from "./LatestPost";

export default function PostList({
  host,
  posts,
  loadNextPost,
  loading,
  hasNextPage,
}) {
  const latestPost = posts[0].node;
  const restPosts = posts.slice(1);

  return (
    <div className="pb-8">
      <div className="px-8 pt-4 pb-8 bg-gray-100">
        <LatestPost post={latestPost} host={host} />
      </div>
      {restPosts.length > 0 && (
        <div className="px-8 py-16">
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post) => (
              <PostCard key={post?.node?.slug} host={host} post={post?.node} />
            ))}
          </div>

          <div className="w-full flex justify-center">
            <button
              disabled={loading || !hasNextPage}
              className="w-fit bg-black hover:bg-black p-2 text-white text-lg capitalize mt-8 disabled:bg-gray-600"
              onClick={loadNextPost}
            >
              {!hasNextPage
                ? "No More Posts"
                : loading
                ? "Loading More.."
                : `Show More Posts`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
