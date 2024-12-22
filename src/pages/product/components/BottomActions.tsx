import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';

interface BottomActionsProps {
  onContactClick: () => void;
  onOrderClick: () => void;
}

export default function BottomActions({ onContactClick, onOrderClick }: BottomActionsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3">
      <div className="flex space-x-3 max-w-2xl mx-auto">
        <button
          onClick={onContactClick}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Əlaqə</span>
        </button>
        <button
          onClick={onOrderClick}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Sifariş et</span>
        </button>
      </div>
    </div>
  );
}