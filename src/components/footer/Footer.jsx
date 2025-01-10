

import React from 'react';

const Footer = () => {
  return (
    <footer
      className="relative  text-white py-8 px-6"
      style={{
        backgroundImage: 'url("https://groca.myshopify.com/cdn/shop/files/slider-3.jpg?v=1614918563&width=1500")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">
            <span className="text-white">Al</span>-Anud
          </h2>
          <p className="text-sm">
            Your trusted online grocery app delivering fresh produce and essentials
            right to your doorstep. Quality guaranteed!
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-sm">
            Email: <a href="mailto:kawsarfiroz11@gmail.com" className="underline">kawsarfiroz11@gmail.com</a>
          </p>
          <p className="text-sm">Phone: +966509325731</p>
          <p className="text-sm">Location: Al Anud Park, Tif, Saudi Arabia</p>
        </div>
      </div>
      <div className="relative mt-8 text-center text-sm border-t border-white pt-4">
        © 2025 Grocery App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
