
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center p-8 bg-hush-green">
        <div className="hero-content">
          <h1 className="text-[6em] font-serif text-hush-pink mb-2 leading-tight">
            Discover<br />
            your new<br />
            favourite
          </h1>
          <h2 className="text-[20px] font-['Copperplate'] font-normal tracking-wide uppercase mb-4">
            Treat yourself with something<br />
            sweet. We have delicious flavours<br />
            for everyone!
          </h2>
          <Button asChild className="bg-hush-darkgreen hover:bg-hush-text text-white rounded-full px-8 py-2 text-[20px]">
            <Link to="/shop">SHOP NOW</Link>
          </Button>
        </div>
        <img 
          src="/lovable-uploads/fc3cf9fd-845b-4230-bf10-a5daa8465a92.png" 
          alt="Colorful cupcakes" 
          className="hero-img rounded-[2em] h-[30em] w-full md:w-[70em] mt-6 md:mt-0 md:ml-8"
        />
      </section>

      {/* Products Section */}
      <section className="bg-hush-cream p-8 mt-8">
        <div className="products flex flex-wrap justify-around gap-8">
          <div className="product-card border-[6px] border-hush-green rounded-[30px] p-6 shadow-md text-center w-[200px] h-[350px] flex flex-col items-center justify-between">
            <img src="https://i.pinimg.com/736x/03/e6/76/03e676c92b62e7d0973bcbb99b6d74ec.jpg" alt="Cupcake 1" className="w-[150px] rounded-full" />
            <h3 className="text-[24px] text-hush-darkgreen mt-4 mb-2">Raspberry Cupcake</h3>
            <p className="text-[20px] text-hush-darkgreen">350 RS</p>
            <button className="buy-btn bg-hush-darkgreen text-white border-none py-2 px-6 text-[20px] rounded-[25px] cursor-pointer mt-4">Add to Cart</button>
          </div>
          <div className="product-card border-[6px] border-hush-green rounded-[30px] p-6 shadow-md text-center w-[200px] h-[350px] flex flex-col items-center justify-between">
            <img src="https://i.pinimg.com/736x/d2/68/76/d268767e9fe329d7bea9bfb3da683a54.jpg" alt="Cupcake 2" className="w-[150px] rounded-full" />
            <h3 className="text-[24px] text-hush-darkgreen mt-4 mb-2">Vanilla Cupcake</h3>
            <p className="text-[20px] text-hush-darkgreen">250 RS</p>
            <button className="buy-btn bg-hush-darkgreen text-white border-none py-2 px-6 text-[20px] rounded-[25px] cursor-pointer mt-4">Add to Cart</button>
          </div>
          <div className="product-card border-[6px] border-hush-green rounded-[30px] p-6 shadow-md text-center w-[200px] h-[350px] flex flex-col items-center justify-between">
            <img src="https://i.pinimg.com/736x/95/68/35/9568353032fcf16a202d9256bef82f48.jpg" alt="Cupcake 3" className="w-[150px] rounded-full" />
            <h3 className="text-[24px] text-hush-darkgreen mt-4 mb-2">Oreo Lava Cupcake</h3>
            <p className="text-[20px] text-hush-darkgreen">300 RS</p>
            <button className="buy-btn bg-hush-darkgreen text-white border-none py-2 px-6 text-[20px] rounded-[25px] cursor-pointer mt-4">Add to Cart</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
