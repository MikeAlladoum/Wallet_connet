import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Buffer } from 'buffer'

// Polyfills pour la compatibilité Web3/WalletConnect
if (typeof window !== 'undefined') {
  window.global = window;
  window.Buffer = Buffer;
  window.process = { env: {} };
}

import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

console.log("Initializing Web3 Config...");

// Vérification du Project ID (Debugging)
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '3fccdc30141f6c449c25da73041c2c36';
if (projectId === '3fccdc30141f6c449c25da73041c2c36') {
  console.warn('⚠️ WARNING: Vous utilisez le Project ID de test par défaut.');
  console.warn('⚠️ Pour activer WalletConnect/Rainbow, configurez votre propre ID dans .env');
  console.warn('📖 Consultez SETUP.md pour les instructions complètes');
} else {
  console.log('✅ Project ID personnalisé détecté');
}

const config = getDefaultConfig({
  appName: 'Premium Web3 Dashboard',
  projectId: projectId,
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http('https://rpc.ankr.com/eth_sepolia'),
  },
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()} modalSize="compact">
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
