"use client";
import { useHashnodePosts } from "hashnode-client";
import PostList from "./PostList";
import NoPosts from "../search/NoPosts";
import Link from "next/link";

const Publication = ({ host, tag }) => {
  const settings = { host: host, tags: tag };
  const { loading, posts, loadMorePost, pageInfo } = useHashnodePosts(settings);

  const tagName = tag
    ? posts[0]?.node.tags.filter((tagBox) => tagBox.id === tag)[0]?.name
    : undefined;

  if (posts.length === 0 && loading) {
    return <p>Loading Posts...</p>;
  }

  return (
    <div>
      <div className="w-full flex items-end bg-gray-100">
        <Link className="text-xl ml-auto px-3 pt-2" href={`${host}/about`}>
          About Page
        </Link>
      </div>
      {tagName && (
        <h1 className="text-2xl font-bold px-8 py-4 bg-gray-100">
          Results for Tag&nbsp;|&nbsp;{tagName}
        </h1>
      )}
      {posts && posts.length > 0 ? (
        <PostList
          hasNextPage={pageInfo.hasNextPage}
          loading={loading}
          host={host}
          posts={posts}
          loadNextPost={loadMorePost}
        />
      ) : (
        <NoPosts host={host} />
      )}
    </div>
  );
};

export default Publication;
