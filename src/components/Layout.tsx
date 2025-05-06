
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      <nav className="py-6 px-4">
        <div className="mx-auto max-w-6xl bg-hush-cream rounded-full flex items-center justify-between px-8 py-4">
          <Link to="/" className="font-serif text-2xl text-hush-text italic hover:text-hush-pink transition-colors duration-200">
            hush
          </Link>
          <div className="flex items-center space-x-10">
            <Link 
              to="/shop" 
              className={`text-sm font-semibold tracking-wider transition-all duration-200 relative px-2 py-1
                ${isActive('/shop') 
                  ? 'text-hush-pink' 
                  : 'text-hush-text hover:text-hush-darkgreen'
                }
              `}
            >
              {isActive('/shop') && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-hush-pink rounded-full"></span>
              )}
              SHOP
            </Link>
            <Link 
              to="/our-story" 
              className={`text-sm font-semibold tracking-wider transition-all duration-200 relative px-2 py-1
                ${isActive('/our-story') 
                  ? 'text-hush-pink' 
                  : 'text-hush-text hover:text-hush-darkgreen'
                }
              `}
            >
              {isActive('/our-story') && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-hush-pink rounded-full"></span>
              )}
              OUR STORY
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-semibold tracking-wider transition-all duration-200 relative px-2 py-1
                ${isActive('/contact') 
                  ? 'text-hush-pink' 
                  : 'text-hush-text hover:text-hush-darkgreen'
                }
              `}
            >
              {isActive('/contact') && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-hush-pink rounded-full"></span>
              )}
              CONTACT US
            </Link>
          </div>
          <div>
            <Link 
              to="/cart"
              className={`p-2 hover:bg-hush-green/20 rounded-full transition-all duration-200 relative 
                ${isActive('/cart') ? 'text-hush-pink' : 'text-hush-text'}
              `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store">
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
              </svg>
              {isActive('/cart') && (
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-hush-pink rounded-full"></span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 pb-8">
        {children}
      </main>
      
      {/* Flavor Banner */}
      <div className="bg-hush-pink py-3 overflow-hidden">
        <div className="flex space-x-4 animate-marquee whitespace-nowrap">
          {['STRAWBERRY', 'CHOCO HEAVEN', 'MINT MADNESS', 'RED VELVET', 'VANILLA DREAM', 'LEMON ZEST', 'CARAMEL SWIRL'].map((flavor, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                <path d="M8 10s1.5-1 4-1 4 1 4 1"></path>
                <path d="M9 15l-.5-1"></path>
                <path d="M12 15v-1"></path>
                <path d="M15 15l.5-1"></path>
              </svg>
              <span className="text-white font-semibold tracking-wider">{flavor}</span>
              <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                <path d="M8 10s1.5-1 4-1 4 1 4 1"></path>
                <path d="M9 15l-.5-1"></path>
                <path d="M12 15v-1"></path>
                <path d="M15 15l.5-1"></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
