import React, { useState } from 'react';
import { HeartHandshake, MessageSquareMore, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactSheet from './ContactSheet';
import CommentsSheet from './CommentsSheet';
import { sampleComments } from '../data/sampleComments';
import type { Post as PostType } from '../types/post';

type PostProps = PostType;

export default function Post({ 
  id,
  image, 
  title, 
  price, 
  username,
  avatar,
  likes, 
  comments,
  views = 0,
  isSponsored
}: PostProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const navigate = useNavigate();

  const handlePostClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest('button') ||
      target.tagName.toLowerCase() === 'button'
    ) {
      return;
    }
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div 
        className={`
          bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer 
          transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md
          ${isSponsored ? 'ring-2 ring-blue-500/20' : ''}
        `}
        onClick={handlePostClick}
      >
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
          
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
            <span className="font-semibold text-blue-600 text-xs">₼{price}</span>
          </div>

          {isSponsored && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
              Endirim
            </div>
          )}
        </div>
        
        <div className="p-2">
          <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2">{title}</h3>
          
          <div className="flex items-center space-x-3">
            <button 
              className="flex items-center space-x-1 group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1 rounded-full bg-rose-50 group-hover:bg-rose-100 transition-colors">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-rose-500 transition-colors">{likes}</span>
            </button>
            
            <button 
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                setIsCommentsOpen(true);
              }}
            >
              <div className="p-1 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <MessageSquareMore className="w-3.5 h-3.5 text-blue-500" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">{comments}</span>
            </button>

            <button 
              className="flex items-center space-x-1 group ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-emerald-500 transition-colors">{views}</span>
            </button>
          </div>
        </div>
      </div>

      <ContactSheet
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        username={username}
        avatar={avatar}
      />

      <CommentsSheet
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={sampleComments}
      />
    </>
  );
}