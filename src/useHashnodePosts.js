import { getAllPosts } from "./queries/blog-data";
import { useState, useEffect } from "react";

export default function useHashnodePosts(settings = {}) {
  
  const [pageInfo, setPageInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [totalDocs, setTotalDocs] = useState(0);

  const { host, first, endCursor, tags } = settings;
  
  useEffect(() => {
    const getPosts = async () => {
      try{
        setLoading(true);
        const res = await getAllPosts(host, first, endCursor, tags)
        setPageInfo(res.pageInfo);
        setPosts(res.edges);
        setTotalDocs(res.totalDocuments);
        setLoading(false);
      }catch(err){ 
        console.error("Error fetching blog data: ", err);
        setError(err);
        setLoading(false);
      };
    };
    
    getPosts();
  }, []);

  return {
    loading, 
    error, 
    pageInfo, 
    totalDocs, 
    posts
  };
}
