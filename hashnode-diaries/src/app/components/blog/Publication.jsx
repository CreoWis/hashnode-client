'use client'
import {useHashnodePosts} from 'hashnode-client';
import PostList from './PostList';
import NoPosts from '../search/NoPosts';

const Publication = ({host}) => {
  const settings = {'host': `${host}`};
  const {loading, posts} = useHashnodePosts(settings);
  console.log(posts);

  if (loading) {
    return <p>Loading Posts...</p>
  }

  return(
    <div>
      {posts && posts.length > 0 ? <PostList host={host} posts={posts} /> : <NoPosts host={host} />}
    </div>
  )
}

export default Publication;