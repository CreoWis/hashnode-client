'use client'

import Tag from '../tag/Tag';
import {useHashnodePostDetails} from 'hashnode-client';

export default function PostDetails({ host, slug }) {
  const {post, error, loading} = useHashnodePostDetails({host: host, slug: slug});
  console.log(post);
  
  return (
    <>
    {
     !loading && (<article className="bg-white p-3 mt-3 flex flex-col justify-center items-center">
        <img className="rounded-lg" src={post.coverImage?.url} alt={post.title} />
        <h1 className="text-4xl font-bold pt-5">{post?.title}</h1>
        <h2 className="text-xl pt-3 pb-3">{post.subtitle}</h2>
        <div className="flex mb-4">
        {
          post?.tags?.map((tag) => (
            <Tag tag={tag} key={tag.id} />
          ))
        }
        </div>
        <div className="post-details" dangerouslySetInnerHTML={{ __html: post?.content?.html }} />
      </article>)
    }
    </>
  );
}