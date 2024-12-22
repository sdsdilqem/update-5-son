import { createBrowserRouter } from 'react-router-dom';

// Layout import
import MainLayout from '../layouts/MainLayout';

// Page imports
import Feed from '../components/Feed';
import ProductDetail from '../pages/ProductDetail';
import CategoryPage from '../pages/CategoryPage';
import SellerProfile from '../pages/SellerProfile';
import MessagesPage from '../pages/messages/MessagesPage';
import LikesPage from '../pages/likes/LikesPage';
import OrdersPage from '../pages/orders/OrdersPage';
import SettingsPage from '../pages/settings/SettingsPage';
import PromotionPage from '../pages/promotion/PromotionPage';
import SearchResults from '../pages/SearchResults';
import FollowersPage from '../pages/followers/FollowersPage';
import ProfilePage from '../pages/profile/ProfilePage';
import MyProducts from '../pages/products/MyProducts';
import FollowingPage from '../pages/following/FollowingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Feed /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'product/:id/promote', element: <PromotionPage /> },
      { path: 'category/:name', element: <CategoryPage /> },
      { path: 'seller/:username', element: <SellerProfile /> },
      { path: 'messages', element: <MessagesPage /> },
      { path: 'likes', element: <LikesPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'followers', element: <FollowersPage /> },
      { path: 'following', element: <FollowingPage /> },
      { path: 'search', element: <SearchResults /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'products', element: <MyProducts /> }
    ],
  },
]);