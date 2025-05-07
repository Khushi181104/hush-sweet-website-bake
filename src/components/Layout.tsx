
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CakeSlice } from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-hush-green">
      {/* Navigation */}
      <header className="mt-[30px] mx-[30px]">
        <nav className="flex justify-between items-center bg-hush-cream rounded-[300em] py-[0.5em] max-h-[70px]">
          <div className="logo font-cookie text-hush-text text-[42px] ml-[2em] italic">
            <Link to="/">hush</Link>
          </div>
          <ul className="nav-links flex">
            <li className="mx-[1.5em]">
              <Link 
                to="/" 
                className={`text-hush-text uppercase no-underline text-[18px] font-bold mx-[1.5em] ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="mx-[1.5em]">
              <Link 
                to="/our-story" 
                className={`text-hush-text uppercase no-underline text-[18px] font-bold mx-[1.5em] ${isActive('/our-story') ? 'active' : ''}`}
              >
                Our Story
              </Link>
            </li>
            <li className="mx-[1.5em]">
              <Link 
                to="/contact" 
                className={`text-hush-text uppercase no-underline text-[18px] font-bold mx-[1.5em] ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="cart mr-[2em]">
            <Link to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hush-text">
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
              </svg>
            </Link>
          </div>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="mx-auto px-8 py-4 pb-8">
        {children}
      </main>
      
      {/* Flavor Banner with Cupcake Icons */}
      <div className="bg-hush-pink py-4 overflow-hidden">
        <div className="scroll-container">
          <div className="scroll-text">
            {/* First set of items */}
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">STRAWBERRY</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">CHOCO HEAVEN</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">VANILLA</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">MINT MADNESS</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">RED VELVET</span>
              <CakeSlice className="text-white" size={24} />
            </div>
          </div>
          <div className="scroll-text">
            {/* Second set of items (duplicate for continuous scrolling) */}
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">STRAWBERRY</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">CHOCO HEAVEN</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">VANILLA</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">MINT MADNESS</span>
              <CakeSlice className="text-white" size={24} />
            </div>
            <div className="scroll-item">
              <span className="text-white font-bold tracking-wider uppercase mr-3">RED VELVET</span>
              <CakeSlice className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-hush-darkgreen text-white text-center py-6 mt-8">
        <p>&copy; 2025 HUSH. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
