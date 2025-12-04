import React from 'react';
import logo from '../public/Wastocash.png'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-green-600 w-full text-white py-12 px-6">
      <div className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-3 ">
              <img 
                src={logo.src} 
                alt="WastoCash Logo" 
                className="w-[85px] h-[85px] flex self-start "
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">WastoCash</h2>
            <p className="text-green-100 text-sm">Turning waste into cash</p>
          </div>

          {/* Actions Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Actions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/buy" className="hover:text-green-200 transition-colors">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-green-200 transition-colors">
                  Sell
                </Link>
              </li>
              <li>
                <Link href="/claim-gifts" className="hover:text-green-200 transition-colors">
                  Claim gifts
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-200 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-200 transition-colors">
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-200 transition-colors">
                  Terms and Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-green-200 transition-colors">
                  Contact us
                </Link>
              </li>
              <li>

                <Link href="/recycle" className="hover:text-green-200 transition-colors">
                  Recycle with us
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-green-500">
          <p className="text-sm">©2025 wastocash all right reserve</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;