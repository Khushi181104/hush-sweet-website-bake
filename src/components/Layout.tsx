
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
      
      {/* Flavor Banner with Cupcake Icons */}
      <div className="bg-hush-pink py-3 overflow-hidden">
        <div className="scroll-container">
          <div className="scroll-content animate-marquee whitespace-nowrap flex items-center">
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              STRAWBERRY <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              CHOCO HEAVEN <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              VANILLA <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              MINT MADNESS <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              RED VELVET <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            {/* Duplicate items to create continuous effect */}
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              STRAWBERRY <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              CHOCO HEAVEN <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              VANILLA <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              MINT MADNESS <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
            <span className="flex items-center mx-4 text-white font-semibold tracking-wider">
              RED VELVET <img src="https://cdn-icons-png.flaticon.com/512/193/193777.png" alt="cupcake" className="w-5 h-5 ml-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
