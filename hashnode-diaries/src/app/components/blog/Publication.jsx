'use client'
import {useHashnodePosts} from 'hashnode-client';
import PostList from './PostList';

const Publication = ({host}) => {
  const settings = {'host': `${host}`};
  const {loading, posts} = useHashnodePosts(settings);
  
  return(
    <div>
      {posts && posts.length > 0 && <PostList host={host} posts={posts} /> }
    </div>
  )
}

export default Publication;