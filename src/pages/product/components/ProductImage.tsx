import React from 'react';
import { Bookmark } from 'lucide-react';

interface ProductImageProps {
  image: string;
  title: string;
}

export default function ProductImage({ image, title }: ProductImageProps) {
  return (
    <div className="relative mb-6">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square object-cover rounded-2xl"
      />
      <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
        <Bookmark className="w-5 h-5" />
      </button>
    </div>
  );
}