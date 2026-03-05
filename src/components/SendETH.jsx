import { useState } from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

export default function SendETH() {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const { data: hash, sendTransaction, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!to || !amount) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(to)) {
      setError('Adresse invalide');
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Montant invalide');
      return;
    }

    try {
      sendTransaction({
        to,
        value: parseEther(amount),
      });
    } catch (err) {
      setError(err.message || 'Erreur lors de la transaction');
    }
  };

  const handleReset = () => {
    setTo('');
    setAmount('');
    setError('');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-black to-slate-900 rounded-2xl p-8 shadow-2xl border border-yellow-500/20">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
        💸 Envoyer ETH
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-yellow-400 mb-2 font-semibold">
            Adresse de destination
          </label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="0x..."
            className="w-full bg-slate-800/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-yellow-400 mb-2 font-semibold">
            Montant (ETH)
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.01"
            className="w-full bg-slate-800/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
            {error}
          </div>
        )}

        {hash && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400">
            <p className="mb-2">Transaction Hash:</p>
            <a
              href={`https://etherscan.io/tx/${hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 break-all underline"
            >
              {hash}
            </a>
          </div>
        )}

        {isConfirming && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-blue-400">
            ⏳ En attente de confirmation...
          </div>
        )}

        {isSuccess && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400">
            ✅ Transaction confirmée!
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isPending || isConfirming}
            className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isPending || isConfirming ? 'Envoi en cours...' : 'Envoyer'}
          </button>

          {(isSuccess || error) && (
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all"
            >
              Réinitialiser
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
