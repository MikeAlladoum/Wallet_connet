// Utilitaire pour les fonctions web3 (exemple)
export const shortenAddress = (address) => {
  if (!address) return '';
  return address.slice(0, 6) + '...' + address.slice(-4);
};
