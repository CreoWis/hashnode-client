import { getAllPosts } from "./queries/blog-data";
import { useState, useEffect, useCallback } from "react";

export default function useHashnodePosts(settings = {}) {
  const [pageInfo, setPageInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [totalDocs, setTotalDocs] = useState(0);

  const { host, first, endCursor, tags } = settings;

  const getPosts = useCallback(
    async (host, first, endCursor, tags, loadMore) => {
      try {
        setLoading(true);
        const res = await getAllPosts(host, first, endCursor, tags);
        setPageInfo(res.pageInfo);
        if (loadMore) {
          setPosts((prev) => [...prev, ...res.edges]);
        } else {
          setPosts(res.edges);
        }
        setTotalDocs(res.totalDocuments);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog data: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getPosts(host, first, endCursor, tags, false);
  }, [host, first, endCursor, tags]);

  const loadMorePost = useCallback(() => {
    getPosts(host, first, pageInfo.endCursor, tags, true);
  }, [pageInfo.endCursor]);

  return {
    loading,
    error,
    pageInfo,
    totalDocs,
    posts,
    loadMorePost,
  };
}
