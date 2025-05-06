
import React from 'react';
import Layout from '../components/Layout';

const OurStory = () => {
  return (
    <Layout>
      <div className="bg-hush-cream rounded-lg p-8 my-8">
        <h1 className="text-5xl font-serif text-hush-pink text-center mb-8">Our Sweet Journey</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Bakery interior" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif text-hush-darkgreen mb-4">How It All Began</h2>
            <p className="text-hush-text mb-4">
              Founded in 2015 by sisters Emma and Olivia Wright, Hush began as a small kitchen operation 
              in their grandmother's home. With a shared passion for baking and a collection of treasured family recipes, 
              they set out to create something special.
            </p>
            <p className="text-hush-text">
              The name "Hush" came from their grandmother's habit of saying "hush now" whenever 
              anyone would ask about her secret ingredients. Today, that same secrecy around our 
              recipes remains, but the joy they bring is shared with everyone who visits.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1608498689851-d173cfc391c0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Cupcake making process" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif text-hush-darkgreen mb-4">Our Philosophy</h2>
            <p className="text-hush-text mb-4">
              At Hush, we believe in baking from scratch using only the finest ingredients. Every cupcake 
              is handcrafted with love and attention to detail, ensuring a perfect treat every time.
            </p>
            <p className="text-hush-text">
              We source locally and seasonally whenever possible, working with nearby farms for our 
              dairy, eggs, and fruits. Our flour comes from a family-owned mill just outside the city, 
              and our chocolate is ethically sourced and fair trade certified.
            </p>
          </div>
        </div>
        
        <div className="bg-hush-pink/10 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-serif text-center text-hush-darkgreen mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-hush-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9.5a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5H22" />
                  <path d="M2 17h9.5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5H4" />
                </svg>
              </div>
              <h3 className="font-semibold text-hush-text mb-2">Quality</h3>
              <p className="text-sm text-hush-text">We never compromise on ingredients or methods. Every cupcake meets our exacting standards.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-hush-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 2v5h5" />
                  <path d="M21 6v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12z" />
                  <path d="M9 12v-4" />
                  <path d="M12 12v-2" />
                  <path d="M15 12v-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-hush-text mb-2">Sustainability</h3>
              <p className="text-sm text-hush-text">We're committed to reducing waste and using eco-friendly packaging across our operations.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-hush-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0z" />
                  <circle cx="12" cy="8" r="2" />
                </svg>
              </div>
              <h3 className="font-semibold text-hush-text mb-2">Community</h3>
              <p className="text-sm text-hush-text">We support local initiatives and donate a portion of our profits to food security programs.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-serif text-hush-darkgreen mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Emma Wright", role: "Co-Founder & Head Baker" },
              { name: "Olivia Wright", role: "Co-Founder & Creative Director" },
              { name: "Daniel Chen", role: "Pastry Chef" },
              { name: "Sofia Rodriguez", role: "Customer Experience" }
            ].map((person, index) => (
              <div key={index} className="mb-6">
                <div className="w-32 h-32 bg-hush-green/30 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-hush-text">{person.name}</h3>
                <p className="text-sm text-hush-text/80">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurStory;
