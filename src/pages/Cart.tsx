
import React from 'react';
import Layout from '../components/Layout';
import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  
  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: "Thank you for your order. We'll send you a confirmation shortly.",
    });
    clearCart();
  };
  
  if (cart.length === 0) {
    return (
      <Layout>
        <div className="my-8 p-8 bg-hush-cream rounded-lg text-center">
          <h1 className="text-4xl font-serif text-hush-pink mb-6">Your Cart</h1>
          <p className="text-hush-text mb-8">Your cart is empty.</p>
          <Button asChild className="bg-hush-darkgreen hover:bg-hush-text text-white rounded-full px-8 py-2">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="my-8">
        <h1 className="text-4xl font-serif text-hush-pink text-center mb-8">Your Cart</h1>
        
        <div className="bg-hush-cream rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-hush-green/20">
                  <th className="text-left p-4">Product</th>
                  <th className="text-center p-4">Price</th>
                  <th className="text-center p-4">Quantity</th>
                  <th className="text-center p-4">Total</th>
                  <th className="text-right p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-hush-green/20">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-hush-text">{item.name}</h3>
                          <p className="text-sm text-hush-text/70">{item.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center p-4">${item.price.toFixed(2)}</td>
                    <td className="text-center p-4">
                      <div className="flex items-center justify-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-hush-green/20 text-hush-text flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-hush-green/20 text-hush-text flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="text-right p-4">
                      <Button
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                        className="text-hush-text hover:text-red-500 hover:bg-transparent"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="font-semibold text-hush-text mb-4">Order Notes</h3>
              <textarea 
                className="w-full p-3 border border-hush-green/30 rounded-lg focus:outline-none focus:border-hush-pink" 
                rows={4}
                placeholder="Any special instructions for your order?"
              ></textarea>
            </div>
            
            <div className="w-full md:w-1/2 bg-hush-green/10 p-6 rounded-lg">
              <h3 className="font-semibold text-hush-text mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="border-t border-hush-green/20 my-4 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>${(totalPrice + 5).toFixed(2)}</span>
              </div>
              
              <Button
                onClick={handleCheckout}
                className="w-full bg-hush-darkgreen hover:bg-hush-text text-white rounded-full py-3 mt-4"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
