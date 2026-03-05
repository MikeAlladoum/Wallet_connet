import { useState, useEffect } from 'react';
import { useAccount, useChainId } from 'wagmi';
import { formatEther } from 'viem';

export default function TransactionHistory() {
  const { address } = useAccount();
  const chainId = useChainId();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!address) {
      setTransactions([]);
      return;
    }

    fetchTransactions();
  }, [address, chainId]);

  const fetchTransactions = async () => {
    if (!address) return;

    setLoading(true);
    setError('');

    try {
      // Pour Mainnet (chainId 1)
      const apiKey = 'YourEtherscanAPIKey'; // Remplacez par votre clé API Etherscan
      const network = chainId === 1 ? 'api' : 'api-sepolia';
      const url = `https://${network}.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === '1' && data.result) {
        setTransactions(data.result.slice(0, 10));
      } else {
        setError('Aucune transaction trouvée');
        setTransactions([]);
      }
    } catch (err) {
      setError('Erreur lors du chargement des transactions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getExplorerUrl = (hash) => {
    return chainId === 1
      ? `https://etherscan.io/tx/${hash}`
      : `https://sepolia.etherscan.io/tx/${hash}`;
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!address) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-black to-slate-900 rounded-2xl p-8 shadow-2xl border border-yellow-500/20">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          📜 Historique des Transactions
        </h2>
        <p className="text-gray-400">Connectez votre wallet pour voir l'historique</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-black to-slate-900 rounded-2xl p-8 shadow-2xl border border-yellow-500/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          📜 Historique des Transactions
        </h2>
        <button
          onClick={fetchTransactions}
          disabled={loading}
          className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 px-4 py-2 rounded-lg transition-all disabled:opacity-50"
        >
          {loading ? '⏳' : '🔄'} Actualiser
        </button>
      </div>

      {loading && (
        <div className="text-center py-8 text-gray-400">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
          <p className="mt-2">Chargement...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
          {error}
        </div>
      )}

      {!loading && !error && transactions.length === 0 && (
        <p className="text-gray-400">Aucune transaction trouvée</p>
      )}

      {!loading && transactions.length > 0 && (
        <div className="space-y-3">
          {transactions.map((tx) => {
            const isOutgoing = tx.from.toLowerCase() === address.toLowerCase();
            const value = formatEther(BigInt(tx.value));

            return (
              <div
                key={tx.hash}
                className="bg-slate-800/30 rounded-xl p-4 border border-yellow-500/10 hover:border-yellow-500/30 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl ${isOutgoing ? 'text-red-400' : 'text-green-400'}`}>
                      {isOutgoing ? '📤' : '📥'}
                    </span>
                    <div>
                      <p className="text-white font-semibold">
                        {isOutgoing ? 'Envoyé' : 'Reçu'}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {formatTimestamp(tx.timeStamp)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${isOutgoing ? 'text-red-400' : 'text-green-400'}`}>
                      {isOutgoing ? '-' : '+'}{parseFloat(value).toFixed(6)} ETH
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <p className="text-gray-500">
                    {isOutgoing ? 'À: ' : 'De: '}
                    {isOutgoing ? tx.to.slice(0, 10) : tx.from.slice(0, 10)}...
                    {isOutgoing ? tx.to.slice(-8) : tx.from.slice(-8)}
                  </p>
                  <a
                    href={getExplorerUrl(tx.hash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Voir sur Etherscan →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
