import React from 'react';
import { Check, Sparkles, BadgeCheck } from 'lucide-react';

export default function RecycloSubscriptions() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-teal-50 p-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        
        {/* Premium Plan */}
        <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-shadow">
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              POPULAR
            </span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-emerald-50">For the eco-warrior</p>
          </div>
          
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold">$9.99</span>
              <span className="text-emerald-100 ml-2">/month</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span>Scan and identify recyclables</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span>Local recycling center locations</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span>AI-powered recycling recommendations</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span>Carbon footprint calculator</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span>Track your recycling impact</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span>Earn rewards and badges</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5  shrink-0" />
              <span>Community challenges</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span className="flex items-center">
                Premium verified badge
                <BadgeCheck className="w-5 h-5 text-white ml-1.5" />
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-yellow-300 mr-3 mt-0.5 shrink-0" />
              <span>Priority support</span>
            </li>
          </ul>
          
          <button className="w-full bg-white hover:bg-gray-50 text-emerald-700 font-semibold py-3 px-6 rounded-lg transition-colors">
            Choose Premium
          </button>
        </div>
        
      </div>
    </div>
  );
}