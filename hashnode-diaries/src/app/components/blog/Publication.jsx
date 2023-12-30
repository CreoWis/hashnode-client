"use client";
import { useHashnodePosts } from "hashnode-client";
import PostList from "./PostList";
import NoPosts from "../search/NoPosts";
import { useCallback, useState } from "react";

const Publication = ({ host }) => {
  const settings = { host: `${host}` };
  const { loading, posts, loadMorePost } = useHashnodePosts(settings);

  return (
    <div>
      {posts && posts.length > 0 ? (
        <PostList
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
