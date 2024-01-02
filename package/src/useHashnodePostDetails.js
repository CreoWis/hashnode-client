import { getPost } from "./queries/blog-data";
import { useState, useEffect } from "react";

export default function useHashnodePostDetails(settings = {}) {
  
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { host, slug } = settings;
  
  useEffect(() => {
    const getPostDetails = async () => {
      try{
        setLoading(true);
        const res = await getPost(host, slug);
        setPost(res);
        setLoading(false);
      }catch(err){ 
        console.error("Error fetching blog data: ", err);
        setError(err);
      }finally{
        setLoading(false);
      }
    };
    
    getPostDetails();
  }, [host, slug]);

  return {
    loading, 
    error, 
    post
  };
}
