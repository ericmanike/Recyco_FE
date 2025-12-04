'use client';
import { useState } from 'react';
import { ChevronLeft, MessageSquare, Share2, Calendar, MapPin, Package, Clock, CheckCircle,  Phone} from 'lucide-react';

export default function WasteListingDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  

  const wasteDetails = {
    id: "WL-2025-1147",
    title: "Mixed Recyclable Materials Available",
    description: "I have a collection of recyclable materials ready for pickup including plastic bottles, cardboard boxes, aluminum cans, and glass bottles. All items are sorted and ready for collection. Looking for a reliable collector to pick up today or tomorrow.",
    images: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop"
    ],
    status: "Available",
    estimatedValue: "GH₵ 35 - 50",
    location: "East Legon, Accra",
    distance: "3.2 km away",
    postedDate: "2 hours ago",
    pickupBy: "Nov 22, 2025",
    wasteTypes: ["Plastic Bottles", "Cardboard", "Aluminum Cans", "Glass Bottles"],
    estimatedWeight: "25-30 kg",
    condition: "Sorted and Clean",
    seller: {
      name: "Kwame Mensah",
      rating: 4.6,
      totalListings: 28,
      verified: true,
      responseTime: "Within 1 hour",
      memberSince: "March 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
   
  };

  
  return (
    <div className="min-h-screen bg-gray-50 pb-20 mt-28">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 sticky top-0 z-10 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-green-700 rounded-lg transition-colors" 
          
            >
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-xl font-semibold">Waste Details</h1>
          </div>
          <button className="p-2 hover:bg-green-700 rounded-lg transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Image Gallery */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="relative h-64 md:h-96 w-full bg-gray-200">
            <img 
              src={wasteDetails.images[selectedImage]} 
              alt={wasteDetails.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2">
              <CheckCircle size={18} />
              {wasteDetails.status}
            </div>
            <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">
              {wasteDetails.estimatedValue}
            </div>
          </div>
          {/* Image thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {wasteDetails.images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`View ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg object-cover border-2 cursor-pointer transition-all ${
                  selectedImage === index 
                    ? 'border-green-500 ring-2 ring-green-300' 
                    : 'border-gray-200 hover:border-green-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {wasteDetails.title}
            </h2>
            <p className="text-gray-600 text-sm mb-3">Listing ID: {wasteDetails.id}</p>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-lg">
                Earn: {wasteDetails.estimatedValue}
              </div>
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {wasteDetails.condition}
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {wasteDetails.description}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-gray-200">
            <div className="flex items-start gap-3">
              <MapPin className="text-green-600 mt-1 shrink-0" size={20} />
              <div>
                <div className="text-sm text-gray-600">Location</div>
                <div className="font-medium text-gray-900">{wasteDetails.location}</div>
                <div className="text-xs text-gray-500">{wasteDetails.distance}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="text-green-600 mt-1 shrink-0" size={20} />
              <div>
                <div className="text-sm text-gray-600">Pickup By</div>
                <div className="font-medium text-gray-900">{wasteDetails.pickupBy}</div>
                <div className="text-xs text-gray-500">Posted {wasteDetails.postedDate}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="text-green-600 mt-1 shrink-0" size={20} />
              <div>
                <div className="text-sm text-gray-600">Est. Weight</div>
                <div className="font-medium text-gray-900">{wasteDetails.estimatedWeight}</div>
              </div>
            </div>
          </div>

          {/* Material Types */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-900">Materials Available</h3>
            <div className="flex flex-wrap gap-2">
              {wasteDetails.wasteTypes.map((type, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Listed By</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-green-500">
              <img 
                src={wasteDetails.seller.image} 
                alt={wasteDetails.seller.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-lg text-gray-900">{wasteDetails.seller.name}</h4>
                {wasteDetails.seller.verified && (
                  <CheckCircle className="text-blue-500 fill-blue-500" size={18} />
                )}
              </div>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                <span>⭐ {wasteDetails.seller.rating}</span>
                <span>•</span>
                <span>{wasteDetails.seller.totalListings} listings</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={16} className="text-green-600" />
              <span>Responds {wasteDetails.seller.responseTime}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} className="text-green-600" />
              <span>Member since {wasteDetails.seller.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            className="py-4 bg-green-600 text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <MessageSquare size={20} />
            Chat
          </button>
          <button className="py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold text-lg hover:bg-green-50 transition-colors shadow-sm flex items-center justify-center gap-2">
            <Phone size={20} />
            Call
          </button>
        </div>
      </div>
    </div>
  );
}