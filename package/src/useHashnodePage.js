import { getPage } from "./queries/blog-data";
import { useState, useEffect } from "react";

export default function useHashnodePage(settings = {}) {
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { host, slug } = settings;

  useEffect(() => {
    const getPageInfo = async () => {
      try {
        setLoading(true);
        const res = await getPage(host, slug);
        setPage(res);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog static page: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPageInfo();
  }, [host, slug]);

  return {
    loading,
    error,
    page,
  };
}
