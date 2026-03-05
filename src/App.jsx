import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect, useBalance, useChainId, useSwitchChain } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { FaCopy, FaCheckCircle, FaExclamationCircle, FaPowerOff, FaEthereum, FaInfoCircle, FaDownload } from 'react-icons/fa'

function App() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()
  const [hasWallet, setHasWallet] = useState(true)
  
  const { data: balanceData, isLoading: isBalanceLoading } = useBalance({
    address: address,
  })

  useEffect(() => {
    // Vérifier si une extension de wallet est injectée
    if (typeof window !== 'undefined') {
      const isWalletDetected = !!(window.ethereum || window.web3 || window.phantom);
      setHasWallet(isWalletDetected);
    }
  }, []);

  const [copied, setCopied] = useState(false)
  const isWrongNetwork = isConnected && chainId !== sepolia.id

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-yellow-500/30">
      {/* Background Glow Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-yellow-600/5 blur-[100px] rounded-full"></div>
      </div>

      <Header />
      
      <main className="flex-1 py-12 px-4 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-md w-full">
          {!isConnected ? (
            /* --- ETAT DÉCONNECTÉ --- */
            <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
              <div className="inline-block p-1 rounded-full bg-gradient-to-r from-yellow-500/50 to-transparent mb-4">
                <div className="px-4 py-1 rounded-full bg-black text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-500">
                  Secure Access
                </div>
              </div>
              <h2 className="text-6xl font-black text-white mb-6 leading-none">
                PREMIUM <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600">DASHBOARD</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Connectez votre portefeuille pour gérer vos actifs sur le réseau <span className="text-yellow-500 font-semibold">Sepolia</span>.
                </p>

                {/* --- FEEDBACK UTILISATEUR OPTIMISÉ --- */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-3">
                  <div className="flex items-start gap-3 text-left">
                    <FaInfoCircle className="text-yellow-500/50 mt-1 shrink-0" />
                    <p className="text-xs text-gray-500 leading-tight">
                      Assurez-vous que votre extension de wallet est <span className="text-gray-300">installée</span> et <span className="text-gray-300">ouverte</span> avant de tenter la connexion.
                    </p>
                  </div>

                  {!hasWallet && (
                    <div className="pt-2 border-t border-white/5">
                      <a 
                        href="https://metamask.io/download/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 rounded-xl text-[10px] font-black tracking-widest transition-all uppercase"
                      >
                        <FaDownload size={10} /> Installer MetaMask
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex justify-center transform hover:scale-105 transition-transform duration-500">
                  <ConnectButton label="ENTRER DANS LE DASHBOARD" />
                </div>
              </div>
            </div>
          ) : (
            /* --- ETAT CONNECTÉ --- */
            <div className="relative group">
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-500/30 to-transparent rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl space-y-8 backdrop-blur-xl">
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-yellow-500/70 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Network Status</h3>
                    <div className={`flex items-center gap-2 text-sm font-bold ${isWrongNetwork ? 'text-red-400' : 'text-green-400'}`}>
                      <div className={`w-2 h-2 rounded-full ${isWrongNetwork ? 'bg-red-500 animate-ping' : 'bg-green-500'}`}></div>
                      {isWrongNetwork ? 'WRONG NETWORK' : 'SEPOLIA LIVE'}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <FaEthereum className="text-yellow-500 text-2xl" />
                  </div>
                </div>

                {isWrongNetwork && (
                  <button 
                    onClick={() => switchChain({ chainId: sepolia.id })}
                    className="w-full bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 py-4 rounded-2xl text-xs font-black tracking-widest transition-all duration-300"
                  >
                    SWITCH TO SEPOLIA
                  </button>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest ml-1">Account Address</label>
                    <div className="bg-white/5 border border-white/5 hover:border-yellow-500/20 px-5 py-4 rounded-[1.25rem] flex items-center justify-between transition-colors">
                      <span className="font-mono text-gray-300 text-sm">
                        {address?.slice(0, 6)}...{address?.slice(-4)}
                      </span>
                      <button
                        onClick={handleCopy}
                        className="p-2 rounded-lg text-gray-500 hover:text-yellow-500 transition-colors"
                      >
                        {copied ? <FaCheckCircle size={16} /> : <FaCopy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest ml-1">Available Balance</label>
                    <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-[1.25rem] border border-white/5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-light tracking-tighter text-white">
                          {isBalanceLoading ? "---" : parseFloat(balanceData?.formatted || "0").toFixed(4)}
                        </span>
                        <span className="text-yellow-500 font-black text-lg">ETH</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => disconnect()}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/5 text-gray-400 rounded-2xl hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all duration-300 font-bold tracking-widest text-[10px] uppercase"
                >
                  <FaPowerOff className="text-xs" /> Disconnect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="py-8 text-center bg-black/50 backdrop-blur-sm border-t border-white/5">
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
           Decentralized Dashboard v2.0
        </p>
      </footer>
    </div>
  )
}

export default App
