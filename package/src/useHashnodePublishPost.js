import { publishPost } from "./mutations/post";
import { getBlogInfo } from "./queries/blog-data";
import { useState } from "react";

export default function useHashnodePublishPost(settings = {}) {
  const [loading, setLoading] = useState(false);

  const publish = async (data = {}) => {
    const { input, first, endCursor } = data;
    const { personalAccessToken, host } = settings;

    if (!personalAccessToken) {
      return {
        post: null,
        loading: false,
        error: "Personal Access Token is required",
      };
    }

    if (!host) {
      return {
        post: null,
        loading: false,
        error: "Host is required",
      };
    }

    try {
      setLoading(true);

      //Get publication id from blog host
      const blogInfo = await getBlogInfo(host);
      const publicationId = blogInfo?.id;

      if (!publicationId) {
        throw new Error("Publication not found, please check your host.");
      }

      const finalPayload = {
        ...input,
        publicationId,
      };

      //Call the publishPost mutation with the final payload
      const res = await publishPost(
        finalPayload,
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
