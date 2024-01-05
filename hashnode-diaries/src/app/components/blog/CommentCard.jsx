import Image from "next/image";
import React from "react";

const CommentCard = ({ comment }) => {
  const { author, content, replies } = comment;
  const allReplies = replies?.edges;
  return (
    <div>
      <div className="flex gap-3 items-start">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-black">
          <Image
            width={320}
            height={320}
            src={author.profilePicture}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-300 w-full min-h-[64px] pt-2 px-5">
          <div className="font-bold text-[13px]">{author.name}</div>
          <div
            className="text-[14px]"
            dangerouslySetInnerHTML={{ __html: content.html }}
          ></div>
        </div>
      </div>
      {allReplies?.length > 0 && (
        <div className="ml-20 mt-5">
          {allReplies.map((reply) => (
            <CommentCard comment={reply.node} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentCard;
