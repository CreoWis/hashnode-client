import { useHashnodeComments } from "hashnode-client";
import React from "react";
import CommentCard from "./CommentCard";

const PostComments = ({ host, postId }) => {
  const {
    loading,
    error,
    pageInfo,
    totalComments,
    comments,
    loadMoreComments,
  } = useHashnodeComments({ host: host, slug: postId });
  const { hasNextPage } = pageInfo;
  return (
    <div className="px-5 w-full">
      <div className="mt-5 pb-10 w-full">
        <h2 className="mt-2 w-full text-left text-3xl font-bold  flex items-center gap-3">
          Comments{" "}
          <span className="inline-flex h-[24px] w-[24px] bg-black rounded-full text-white text-base justify-center items-center">
            {totalComments}
          </span>
        </h2>

        <div className="mt-5 flex flex-col gap-3">
          {comments.map((comment) => {
            return <CommentCard comment={comment.node} />;
          })}
        </div>
        <div className="w-full flex justify-center">
          <button
            disabled={loading || !hasNextPage}
            className="w-fit bg-black hover:bg-black p-2 text-white text-lg capitalize mt-8 disabled:bg-gray-600"
            onClick={loadMoreComments}
          >
            {!hasNextPage
              ? "No More Comments"
              : loading
              ? "Loading More.."
              : `Show More Comments`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
