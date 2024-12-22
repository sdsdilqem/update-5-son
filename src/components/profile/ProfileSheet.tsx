import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import BottomSheet from '../common/BottomSheet';
import { 
  MessageCircle, 
  Heart, 
  Package, 
  Settings, 
  LogOut,
  UserRoundCheck,
  ShoppingBag,
  Shield,
  Star,
  ChevronRight
} from 'lucide-react';

interface ProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileSheet({ isOpen, onClose }: ProfileSheetProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const menuItems = [
    {
      id: 'messages',
      icon: MessageCircle,
      label: 'Mesajlar',
      path: '/messages',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'likes',
      icon: Heart,
      label: 'Bəyənmələr',
      path: '/likes',
      color: 'bg-rose-50 text-rose-600'
    },
    {
      id: 'following',
      icon: UserRoundCheck,
      label: 'İzlədiklərim',
      path: '/following',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'orders',
      icon: ShoppingBag,
      label: 'Sifarişlər',
      path: '/orders',
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'listings',
      icon: Package,
      label: 'Elanlarım',
      path: '/products',
      color: 'bg-amber-50 text-amber-600'
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Parametrlər',
      path: '/settings',
      color: 'bg-gray-50 text-gray-600'
    }
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  const handleProfileClick = () => {
    navigate('/profile');
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-3 pb-6">
        {/* User Profile Header */}
        <button
          onClick={handleProfileClick}
          className="w-full flex items-center justify-between mb-4 p-2 hover:bg-gray-50 rounded-xl transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-12 h-12 rounded-lg object-cover"
              />
              {user.verificationLevel !== 'BASIC' && (
                <div className="absolute -right-1 -bottom-1">
                  <Shield className="w-4 h-4 text-blue-500" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h2 className="text-base font-semibold truncate">{user.username}</h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded-full text-xs">
                  <Star className="w-3 h-3 mr-0.5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{user.rating}</span>
                </div>
                <span className="text-xs text-gray-500">{user.successfulSales} satış</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>

        {/* Menu Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.path)}
              className="flex flex-col items-center p-3 rounded-xl transition-all hover:scale-105 active:scale-95"
              style={{ background: item.color.split(' ')[0] }}
            >
              <item.icon className={`w-5 h-5 mb-1.5 ${item.color.split(' ')[1]}`} />
              <span className={`text-xs font-medium ${item.color.split(' ')[1]}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Çıxış</span>
        </button>
      </div>
    </BottomSheet>
  );
}