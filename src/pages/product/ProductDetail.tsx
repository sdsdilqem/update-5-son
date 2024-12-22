import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { samplePosts } from '../../data/samplePosts';
import { sampleComments } from '../../data/sampleComments';

// Components
import ProductHeader from './components/ProductHeader';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import ProductActions from './components/ProductActions';
import ProductStatus from './components/ProductStatus';
import BottomActions from './components/BottomActions';
import ContactSheet from '../../components/ContactSheet';
import CommentsSheet from '../../components/CommentsSheet';
import OrderSheet from '../../components/order/OrderSheet';

export default function ProductDetail() {
  const { id } = useParams();
  const { user, setShowAuthSheet } = useAuth();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const product = samplePosts.find(post => post.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Məhsul tapılmadı</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Ana səhifəyə qayıt
          </Link>
        </div>
      </div>
    );
  }

  const handleContactClick = () => {
    if (!user) {
      setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
      return;
    }
    setIsContactOpen(true);
  };

  const handleOrderClick = () => {
    if (!user) {
      setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
      return;
    }
    setIsOrderOpen(true);
  };

  return (
    <div className="pb-24">
      <ProductHeader productId={id!} />

      <div className="max-w-2xl mx-auto px-4 py-6">
        <ProductImage image={product.image} title={product.title} />
        
        <ProductInfo
          title={product.title}
          price={product.price}
          username={product.username}
          avatar={product.avatar}
        />
        
        <ProductActions
          likes={product.likes}
          comments={product.comments}
          views={product.views || 0}
          onCommentClick={() => setIsCommentsOpen(true)}
        />
        
        <ProductStatus />
      </div>

      <BottomActions
        onContactClick={handleContactClick}
        onOrderClick={handleOrderClick}
      />

      {/* Sheets */}
      <ContactSheet
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        username={product.username}
        avatar={product.avatar}
      />

      <CommentsSheet
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={sampleComments}
      />

      <OrderSheet
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        productTitle={product.title}
        productPrice={product.price}
      />
    </div>
  );
}