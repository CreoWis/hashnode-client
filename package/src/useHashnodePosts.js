import { getAllPosts } from "./queries/blog-data";
import { useState, useEffect, useCallback } from "react";

export default function useHashnodePosts(settings = {}) {
  const [pageInfo, setPageInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [totalDocs, setTotalDocs] = useState(0);

  const { host, first, endCursor, tags } = settings;

  const getPosts = useCallback(async (host, first, endCursor, tags) => {
    try {
      setLoading(true);
      const res = await getAllPosts(host, first, endCursor, tags);
      setPageInfo(res.pageInfo);
      setPosts(res.edges);
      setTotalDocs(res.totalDocuments);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching blog data: ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getMorePosts = useCallback(async (host, first, endCursor, tags) => {
    try {
      setLoading(true);
      const res = await getAllPosts(host, first, endCursor, tags);
      setPageInfo((prev) => [...prev, ...res.pageInfo]);
      setPosts(res.edges);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching more post: ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts(host, first, endCursor, tags);
  }, [host, first, endCursor, tags]);

  const loadMorePost = useCallback(() => {
    getMorePosts(host, first, pageInfo.endCursor, tags);
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
