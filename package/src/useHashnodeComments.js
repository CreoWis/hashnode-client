import { getComments } from "./queries/blog-data";
import { useState, useEffect } from "react";

export default function useHashnodeComments(settings = {}) {
  
  const [pageInfo, setPageInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [totalComments, setTotalComments] = useState(0);

  const { host, first, endCursor, slug } = settings;
  
  useEffect(() => {
    const getCommentsForPost = async () => {
      try{
        setLoading(true);
        const res = await getComments(host, slug, first, endCursor)
        setPageInfo(res.pageInfo);
        setComments(res.edges);
        setTotalComments(res.totalDocuments);
        setLoading(false);
      }catch(err){ 
        console.error("Error fetching comments: ", err);
        setError(err);
      } finally{
        setLoading(false);
      }
    };
    
    getCommentsForPost();
  }, [host, first, endCursor, slug]);

  return {
    loading, 
    error, 
    pageInfo, 
    totalComments, 
    comments
  };
}
