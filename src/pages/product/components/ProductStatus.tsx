import React from 'react';
import { Package } from 'lucide-react';

export default function ProductStatus() {
  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        <span className="text-sm">Aktiv</span>
      </div>
      <div className="flex items-center space-x-2">
        <Package className="w-5 h-5 text-gray-400" />
        <span className="text-sm">Stokda</span>
      </div>
    </div>
  );
}