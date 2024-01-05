import { getComments } from "./queries/blog-data";
import { useState, useEffect, useCallback } from "react";

export default function useHashnodeComments(settings = {}) {
  const [pageInfo, setPageInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [totalComments, setTotalComments] = useState(0);

  const { host, first, endCursor, slug } = settings;

  const getCommentsForPost = useCallback(
    async (host, slug, first, endCursor, compound) => {
      try {
        setLoading(true);
        const res = await getComments(host, slug, first, endCursor);
        setPageInfo(res.pageInfo);
        if (compound) {
          setComments((prev) => [...prev, ...res.edges]);
        } else {
          setComments(res.edges);
        }
        setTotalComments(res.totalDocuments);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching comments: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getCommentsForPost(host, slug, first, endCursor, false);
  }, [host, first, endCursor, slug]);

  const loadMoreComments = useCallback(() => {
    getCommentsForPost(host, slug, first, endCursor, true);
  }, [pageInfo.endCursor]);

  return {
    loading,
    error,
    pageInfo,
    totalComments,
    comments,
    loadMoreComments,
  };
}
