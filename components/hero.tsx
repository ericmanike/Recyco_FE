'use client'
import React, { use } from 'react';
import { Trash2, ShoppingCart, DollarSign, Truck } from 'lucide-react';
import Link from 'next/link';

export default function WasteManagementHero() {
  return (
    <div className="min-h-screen  md:mt-30  bg-transparent">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black  mb-4">
            Smart Waste Management
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your waste into value. Order pickups, buy recycled materials, or sell your recyclables - all in one place.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Order Pickup */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Order Pickup
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a convenient pickup time for your waste. We'll come to you.
            </p>
            <Link href={'/orderPickup'}>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Pickup
              </button>
            </Link>
          </div>

          {/* Buy Waste */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
              <ShoppingCart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Buy Recycled Materials
            </h3>
            <p className="text-gray-600 mb-6">
              Browse quality recycled materials for your business or projects.
            </p>
            <Link href={'/buy'}>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Browse Materials
              </button>
            </Link>
          </div>

          {/* Sell Waste */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
              <DollarSign className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Sell Your Waste
            </h3>
            <p className="text-gray-600 mb-6">
              Turn your recyclables into cash. Get paid for what you recycle.
            </p>
            <Link href={'/sell'}>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Start Selling
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Pickups Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Active Sellers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Recycling Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}