import React from 'react';
import { shortenAddress } from '../utils/web3';

const WalletCard = ({ address, balance, onCopy, onDisconnect, isSepolia, onSwitchNetwork }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-md">
    <div className="flex items-center mb-4">
      <span className="text-white font-mono text-lg">{shortenAddress(address)}</span>
      <button onClick={onCopy} className="ml-2 px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 text-white text-xs">📋 Copy</button>
    </div>
    <div className="text-gray-300 mb-2">Balance: {balance} ETH</div>
    <div className="mb-4">
      <span className={`px-2 py-1 rounded text-xs font-semibold ${isSepolia ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>{isSepolia ? '🟢 Sepolia → OK' : '🔴 Wrong network'}</span>
    </div>
    {!isSepolia && (
      <button onClick={onSwitchNetwork} className="mb-2 px-3 py-1 bg-blue-700 rounded hover:bg-blue-600 text-white text-xs">Switch Network</button>
    )}
    <button onClick={onDisconnect} className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-white text-xs">Disconnect</button>
  </div>
);

export default WalletCard;
