import React from 'react';

const NetworkBadge = ({ isSepolia }) => (
  <span className={`px-2 py-1 rounded text-xs font-semibold ml-2 ${isSepolia ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
    {isSepolia ? '🟢 Sepolia → OK' : '🔴 Wrong network'}
  </span>
);

export default NetworkBadge;
