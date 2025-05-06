
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-serif text-hush-pink leading-tight mb-6">
            Discover<br />
            your new<br />
            favourite
          </h1>
          <p className="uppercase tracking-wider mb-8 text-hush-text">
            Treat yourself with something<br />
            sweet. We have delicious flavours<br />
            for everyone!
          </p>
          <Button asChild className="bg-hush-darkgreen hover:bg-hush-text text-white rounded-full px-8 py-2">
            <Link to="/shop">SHOP NOW</Link>
          </Button>
        </div>
        <div className="md:w-1/2 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/fc3cf9fd-845b-4230-bf10-a5daa8465a92.png" 
            alt="Colorful cupcakes" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
