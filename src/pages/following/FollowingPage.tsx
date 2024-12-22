import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FollowList from '../../components/follow/FollowList';
import { useFollowList } from '../../hooks/follow/useFollowList';
import { useAuth } from '../../contexts/AuthContext';
import { useFollowActions } from '../../hooks/follow/useFollowActions';

export default function FollowingPage() {
  const { user } = useAuth();
  const { users, loading } = useFollowList(user?.id || '');
  const { followUser, unfollowUser } = useFollowActions();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/profile" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">İzlədiklərim</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <FollowList
          users={users}
          onFollow={followUser}
          onUnfollow={unfollowUser}
        />
        
        {loading && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
          </div>
        )}
        
        {!loading && users.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Hələ heç kimi izləmirsiniz</p>
          </div>
        )}
      </div>
    </div>
  );
}