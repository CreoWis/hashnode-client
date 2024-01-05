"use client";

import Tag from "../tag/Tag";
import { useHashnodePostDetails } from "hashnode-client";
import PostComments from "./PostComments";

export default function PostDetails({ host, slug }) {
  const { post, error, loading } = useHashnodePostDetails({
    host: host,
    slug: slug,
  });

  return (
    <>
      {!loading && (
        <article className=" bg-white p-3 mt-10 mb-16 flex flex-col justify-center items-center">
          <img
            className="rounded-lg"
            src={post.coverImage?.url}
            alt={post.title}
          />
          <h1 className="text-4xl font-bold pt-5">{post?.title}</h1>
          <h2 className="text-xl pt-3 pb-3">{post.subtitle}</h2>
          <div className="flex mb-4">
            {post?.tags?.map((tag) => (
              <Tag tag={tag} key={tag.id} host={host} />
            ))}
          </div>
          <div
            className="post-details"
            dangerouslySetInnerHTML={{ __html: post?.content?.html }}
          />
          <div className="w-full">
            <PostComments host={host} postId={slug} />
          </div>
        </article>
      )}
    </>
  );
}
