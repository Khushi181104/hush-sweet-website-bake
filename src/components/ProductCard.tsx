
import React from 'react';
import { Product } from '../types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-hush-text">{product.name}</h3>
        <div className="text-sm text-hush-text/70 mb-2">{product.category}</div>
        <p className="text-sm text-hush-text mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-hush-darkgreen">${product.price.toFixed(2)}</span>
          <Button 
            onClick={() => addToCart(product)}
            className="bg-hush-pink hover:bg-hush-darkgreen text-white rounded-full px-4 py-1 text-sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
