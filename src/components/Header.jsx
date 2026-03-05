import React from 'react';
import { FaWallet } from 'react-icons/fa';

const Header = () => (
  <header className="w-full py-6 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5 px-8 sticky top-0 z-50">
    <div className="flex items-center gap-3 group cursor-default">
      {/* Logo avec cercle doré */}
      <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.2)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-500 transform group-hover:rotate-12">
        <FaWallet className="text-black text-lg" />
      </div>
      <div>
        <h1 className="text-lg font-black bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent tracking-tighter leading-none">
          GOLDEN
        </h1>
        <h1 className="text-xs font-bold text-yellow-500 tracking-[0.3em] mt-0.5">
          DASHBOARD
        </h1>
      </div>
    </div>
    
    <div className="hidden md:flex items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Systems Nominal</span>
      </div>
    </div>
  </header>
);

export default Header;
