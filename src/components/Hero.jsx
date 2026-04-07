import React from 'react';
import PriceForm from './PriceForm';
import { CheckBadgeIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const Hero = ({ onCalculate }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-600/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-200 rounded-full text-sm font-semibold border border-blue-500/30 backdrop-blur-sm">
                Platform Jual Beli HP Iphone dan Android
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Jual IPhone <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  Tanpa Ribet?
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-blue-100">
                Jual Aja Iphone Kamu di <span className="font-bold text-white">Liphone Store!</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-blue-100/90 text-sm lg:text-base font-medium max-w-md">
              <div className="flex items-center gap-3">
                 <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                 <span>Harga Terbaik & Transparan</span>
              </div>
              <div className="flex items-center gap-3">
                 <TruckIcon className="h-6 w-6 text-orange-400" />
                 <span>Jemput di Rumah (Jabodetabek)</span>
              </div>
              <div className="flex items-center gap-3">
                 <ShieldCheckIcon className="h-6 w-6 text-blue-400" />
                 <span>Privasi & Keamanan Terjamin</span>
              </div>
            </div>
            
            <div className="pt-4 flex gap-4">
              <div className="flex -space-x-2">
                 {['AD', 'RF', 'JK', 'MS'].map((initial, i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-900">
                     {initial}
                   </div> 
                 ))}
              </div>
              <div className="flex flex-col justify-center text-xs text-blue-200">
                <span className="font-bold text-white">40-50</span>
                <span>Customer Puas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex justify-center lg:justify-end">
             <PriceForm onSubmit={onCalculate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
