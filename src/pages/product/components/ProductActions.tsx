import React from 'react';
import { Heart, MessageCircle, BarChart3 } from 'lucide-react';

interface ProductActionsProps {
  likes: number;
  comments: number;
  views: number;
  onCommentClick: () => void;
}

export default function ProductActions({ likes, comments, views, onCommentClick }: ProductActionsProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b">
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-1">
          <Heart className="w-6 h-6" />
          <span className="text-sm">{likes}</span>
        </button>
        <button 
          className="flex items-center space-x-1"
          onClick={onCommentClick}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm">{comments} şərh</span>
        </button>
        <button className="flex items-center space-x-1">
          <BarChart3 className="w-6 h-6 text-emerald-500" />
          <span className="text-sm">{views} baxış</span>
        </button>
      </div>
    </div>
  );
}