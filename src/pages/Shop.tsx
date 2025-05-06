
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="my-8">
        <h1 className="text-4xl font-serif text-hush-pink text-center mb-8">Our Sweet Creations</h1>
        
        <div className="bg-hush-cream rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search cupcakes..."
                className="w-full px-4 py-2 border border-hush-green/30 rounded-full focus:outline-none focus:border-hush-pink"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                onClick={() => setSelectedCategory(null)}
                className={`rounded-full px-4 py-1 text-sm ${
                  selectedCategory === null
                    ? 'bg-hush-darkgreen text-white'
                    : 'bg-hush-green/20 text-hush-text hover:bg-hush-green/40'
                }`}
              >
                All
              </Button>
              
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1 text-sm ${
                    selectedCategory === category
                      ? 'bg-hush-darkgreen text-white'
                      : 'bg-hush-green/20 text-hush-text hover:bg-hush-green/40'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-hush-text text-lg">No cupcakes found matching your search.</p>
            <Button 
              onClick={() => {
                setSelectedCategory(null);
                setSearchTerm('');
              }}
              className="mt-4 bg-hush-pink hover:bg-hush-darkgreen text-white rounded-full px-6 py-2"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        <div className="bg-hush-pink/20 rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-serif text-hush-darkgreen mb-4 text-center">Custom Orders</h2>
          <p className="text-center text-hush-text mb-6">
            Planning a special event? We offer custom cupcake designs and bulk orders for weddings, 
            birthdays, corporate events, and more.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-hush-darkgreen hover:bg-hush-text text-white rounded-full px-8 py-2"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us for Custom Orders
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
