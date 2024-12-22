import React, { useState } from 'react';
import CategorySheet from './CategorySheet';
import { categories } from './constants';
import type { Category } from '../../types/category';

export default function CategoriesBar() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsSheetOpen(true);
  };

  return (
    <>
      <div className="bg-white shadow-sm mb-4">
        <div className="grid grid-cols-3 gap-2 p-3">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`
                flex flex-col items-center p-2.5 space-y-1.5 rounded-xl transition-all
                hover:bg-gray-50 active:scale-95
                ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}
              `}
            >
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                ${index % 3 === 0 ? 'bg-blue-50 text-blue-500' :
                  index % 3 === 1 ? 'bg-purple-50 text-purple-500' :
                  'bg-amber-50 text-amber-500'}
                transform transition-transform group-hover:scale-110
              `}>
                {<category.icon className="w-5 h-5" />}
              </div>
              <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <CategorySheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        category={selectedCategory}
      />
    </>
  );
}