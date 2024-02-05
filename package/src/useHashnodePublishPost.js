import { publishPost } from "./mutations/post";
import { useState } from "react";

export default function useHashnodePublishPost(settings = {}) {
  const [loading, setLoading] = useState(false);

  const { personalAccessToken } = settings;

  const publish = async (data = {}) => {
    const { input, first, endCursor } = data;

    try {
      setLoading(true);
      const res = await publishPost(
        input,
        first,
        endCursor,
        personalAccessToken
      );
      return {
        post: res,
        loading,
        error: null,
      };
    } catch (err) {
      console.error("Error publishing post: ", err);
      return {
        post: null,
        loading,
        error: err,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    publish,
  };
}
