import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PostGrid from '../../components/PostGrid';
import { samplePosts } from '../../data/samplePosts';
import { useAuth } from '../../contexts/AuthContext';

export default function MyProducts() {
  const { user } = useAuth();
  const userPosts = samplePosts.filter(post => post.username === user?.username);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/profile" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Mənim elanlarım</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {userPosts.length > 0 ? (
          <PostGrid posts={userPosts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Hələ heç bir elanınız yoxdur</p>
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Elan yerləşdir
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}