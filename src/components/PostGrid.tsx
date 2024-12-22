import React from 'react';
import Post from './Post';
import type { Post as PostType } from '../types/post';

interface PostGridProps {
  posts: PostType[];
}

export default function PostGrid({ posts }: PostGridProps) {
  // Split posts into two columns for masonry layout
  const leftColumnPosts = posts.filter((_, i) => i % 2 === 0);
  const rightColumnPosts = posts.filter((_, i) => i % 2 === 1);

  return (
    <div className="grid grid-cols-2 gap-[5px]">
      {/* Left Column */}
      <div className="flex flex-col gap-[5px]">
        {leftColumnPosts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-[5px]">
        {rightColumnPosts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}