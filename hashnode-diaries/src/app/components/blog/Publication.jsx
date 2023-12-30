"use client";
import { useHashnodePosts } from "hashnode-client";
import PostList from "./PostList";
import NoPosts from "../search/NoPosts";
import { useCallback, useState } from "react";

const Publication = ({ host }) => {
  const settings = { host: `${host}` };
  const { loading, posts, loadMorePost, pageInfo } = useHashnodePosts(settings);
  console.log(pageInfo);
  if (posts.length === 0 && loading) {
    return <p>Loading Posts...</p>;
  }

  return (
    <div>
      {posts && posts.length > 0 ? (
        <PostList
          hasNextpage={pageInfo.hasNextPage}
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
