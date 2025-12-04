'use client'
import { useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';
import { useToast } from './toastProvider';

export default function RecyclingGiftComponent() {
  const [selectedGift, setSelectedGift] = useState<{ id: number; name: string; points: number; description: string; icon: any; color: string } | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);

  const gifts = [
    {
      id: 1,
      name: 'Welcome Bonus',
      points: 500,
      description: 'Start your recycling journey!',
      icon: Gift,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 2,
      name: 'Sustainability Star',
      points: 250,
      description: '25 items recycled milestone',
      icon: Sparkles,
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const handleOpenGift = (gift :{ id: number; name: string; points: number; description: string; icon: any; color: string }) => {
    setIsOpening(true);
    setSelectedGift(gift);
    setShowPhoneInput(false);
    setPhoneNumber('');
    setTimeout(() => {
      setIsOpening(false);
    }, 1500);
  };

  const handleClaimAirtime = () => {
    setShowPhoneInput(true);
  };

  const handleSubmitPhone = () => {
    if (phoneNumber.trim() === '') {
      alert('Please enter your phone number');
      return;
    }
    alert(`Free airtime will be sent to ${phoneNumber}!`);
    setSelectedGift(null);
    setPhoneNumber('');
    setShowPhoneInput(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 md:p-8  mt-26">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Gift className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-green-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Recycling Rewards</h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">Unlock gifts as you make a difference for our planet!</p>
        </div>

        {/* Gift Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
          {gifts.map((gift) => {
            const Icon = gift.icon;
            return (
              <div
                key={gift.id}
                className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div 
                  onClick={() => handleOpenGift(gift)}
                  className="hover:-translate-y-2 transition-transform"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br ${gift.color} flex items-center justify-center transform hover:rotate-12 transition-transform`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-2">
                    {gift.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center mb-3">
                    {gift.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm sm:text-base mb-4">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{gift.points} points</span>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenGift(gift)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all text-sm sm:text-base"
                >
                  Claim Gift
                </button>
              </div>
            );
          })}
        </div>

        {/* Gift Opening Animation */}
        {selectedGift && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full transform transition-all duration-500 ${
              isOpening ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
            }`}>
              <div className="text-center">
                <div className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br ${selectedGift.color} flex items-center justify-center animate-bounce`}>
                  {(() => {
                    const Icon = selectedGift.icon;
                    return <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />;
                  })()}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Congratulations! 🎉
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-2 sm:mb-3">
                  {selectedGift.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  {selectedGift.description}
                </p>
                
                {!showPhoneInput ? (
                  <div className="mb-4 sm:mb-6">
                    <p className="text-gray-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Choose your reward:</p>
                    <button
                      onClick={handleClaimAirtime}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-700 transition-all mb-3 text-sm sm:text-base"
                    >
                      Claim Free Airtime
                    </button>
                  </div>
                ) : (
                  <div className="mb-4 sm:mb-6">
                    <p className="text-gray-700 font-semibold mb-3 text-sm sm:text-base">Enter your phone number:</p>
                    <input
                      type="tel"
                      placeholder="e.g. 0244123456"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-full focus:border-green-500 focus:outline-none mb-3 text-sm sm:text-base"
                    />
                    <button
                      onClick={handleSubmitPhone}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-700 transition-all text-sm sm:text-base"
                    >
                      Submit & Claim
                    </button>
                  </div>
                )}
                
                <button
                  onClick={() => setSelectedGift(null)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all text-sm sm:text-base"
                >
                  {showPhoneInput ? 'Cancel' : 'Maybe Later'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}