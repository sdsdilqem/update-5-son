import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ProductHeaderProps {
  productId: string;
}

export default function ProductHeader({ productId }: ProductHeaderProps) {
  return (
    <div className="sticky top-0 z-30 bg-white border-b">
      <div className="max-w-2xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Məhsul</h1>
          </div>
          <Link
            to={`/product/${productId}/promote`}
            className="flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reklam et</span>
          </Link>
        </div>
      </div>
    </div>
  );
}