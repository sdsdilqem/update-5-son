import React from 'react';
import { ArrowLeft, Star, Shield, Package, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import PostGrid from '../../components/PostGrid';
import { samplePosts } from '../../data/samplePosts';

export default function ProfilePage() {
  const { user } = useAuth();
  const userPosts = samplePosts.filter(post => post.username === user?.username);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Profilim</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-start space-x-4 mb-6">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              {user.verificationLevel !== 'BASIC' && (
                <Shield className="w-5 h-5 text-blue-500" />
              )}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{user.rating}</span>
              </div>
              <span>•</span>
              <span>{user.successfulSales} satış</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            to="/products"
            className="bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              <Package className="w-4 h-4" />
              <span>Aktiv elanlar</span>
            </div>
            <p className="font-medium">{userPosts.length}</p>
          </Link>

          <Link
            to="/likes"
            className="bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              <Heart className="w-4 h-4" />
              <span>Bəyənmələr</span>
            </div>
            <p className="font-medium">{userPosts.reduce((sum, post) => sum + post.likes, 0)}</p>
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Mənim elanlarım</h3>
          {userPosts.length > 0 ? (
            <PostGrid posts={userPosts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Hələ heç bir elanınız yoxdur</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}