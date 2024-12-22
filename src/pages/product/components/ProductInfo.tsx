import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

interface ProductInfoProps {
  title: string;
  price: number;
  username: string;
  avatar: string;
}

export default function ProductInfo({ title, price, username, avatar }: ProductInfoProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between mb-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <span className="text-2xl font-bold text-blue-600">₼{price}</span>
      </div>
      
      <Link
        to={`/seller/${username}`}
        className="flex items-center space-x-2"
      >
        <img
          src={avatar}
          alt={username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex items-center">
          <span className="font-medium">{username}</span>
          <ShieldCheck className="w-4 h-4 text-blue-500 ml-1" />
        </div>
      </Link>
    </div>
  );
}