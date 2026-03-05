// Hook pour gérer les infos wallet (exemple)
import { useAccount, useBalance, useNetwork } from 'wagmi';

export function useWalletInfo() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const { chain } = useNetwork();

  return {
    address,
    isConnected,
    balance: balance?.formatted,
    chain,
  };
}
