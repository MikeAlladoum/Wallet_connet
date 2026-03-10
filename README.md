#  Premium Web3 Dashboard

Un tableau de bord Web3 moderne et premium pour la connexion de wallet et la gestion d'actifs blockchain.

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple) ![Wagmi](https://img.shields.io/badge/Wagmi-2.19-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-cyan)

 Fonctionnalités

-  **Connexion Multi-Wallet** : MetaMask, WalletConnect, Coinbase Wallet, Rainbow
-  **Support Multi-Chain** : Ethereum Mainnet & Sepolia Testnet
-  **Affichage en Temps Réel** : Balance ETH et adresse wallet
-  **Switch Automatique de Réseau** : Bascule vers Sepolia si nécessaire
-  **Design Premium** : Thème Gold & Black avec glassmorphism
-  **UX Optimisée** : Animations fluides, feedback utilisateur, responsive design
-  **Détection de Wallet** : Guide l'utilisateur si aucune extension n'est installée

## 📸 Aperçu de l'Application

### Interface de Connexion
<div align="center">
  <img src="docs/screenshots/Capture d'écran 2026-03-05 195638.png" alt="Page de connexion" width="700"/>
  <p><em>Écran d'accueil avec bouton de connexion premium</em></p>
</div>

### Connexion Multi-Wallet
<div align="center">
  <img src="docs/screenshots/Capture d'écran 2026-03-05 195747.png" alt="Sélection de wallet" width="700"/>
  <p><em>Choix entre MetaMask, WalletConnect, Coinbase et Rainbow</em></p>
</div>

### Dashboard Principal
<div align="center">
  <img src="docs/screenshots/Capture d'écran 2026-03-05 195947.png" alt="Dashboard connecté" width="700"/>
  <p><em>Affichage du solde et des informations de compte</em></p>
</div>

### Interface d'Envoi ETH
<div align="center">
  <img src="docs/screenshots/Capture d'écran 2026-03-05 200126.png" alt="Interface d'envoi" width="700"/>
  <p><em>Formulaire d'envoi de transactions avec validation</em></p>
</div>

### Historique des Transactions
<div align="center">
  <img src="docs/screenshots/Capture d'écran 2026-03-05 215853.png" alt="Historique des transactions" width="700"/>
  <p><em>Visualisation des transactions avec liens Etherscan</em></p>
</div>

##  Installation

### Prérequis

- **Node.js** >= 18.x
- **npm** ou **yarn**
- Une extension de wallet (MetaMask recommandé)

### Étapes

1. **Cloner le projet**
   ```bash
   cd frontend
   ```

2. **Installer les dépendances**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configurer WalletConnect Project ID**

    **ÉTAPE CRITIQUE** : Pour que les boutons **WalletConnect** et **Rainbow** fonctionnent :

   - Allez sur [cloud.walletconnect.com](https://cloud.walletconnect.com/)
   - Créez un compte gratuit (GitHub OAuth disponible)
   - Cliquez sur **"Create New Project"**
   - Nommez votre projet (ex: "Premium Dashboard")
   - Copiez le **Project ID** généré

4. **Créer le fichier `.env`**
   ```bash
   # Copier le template
   cp .env.example .env
   ```

   Ouvrez `.env` et remplacez la valeur :
   ```env
   VITE_WALLETCONNECT_PROJECT_ID=votre_project_id_ici
   ```

5. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

   Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

##  Structure du Projet

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # En-tête avec logo premium
│   │   ├── WalletCard.jsx      # Carte d'affichage de wallet (non utilisé)
│   │   └── NetworkBadge.jsx    # Badge de réseau (non utilisé)
│   ├── hooks/
│   │   └── useWalletInfo.js    # Hook personnalisé (optionnel)
│   ├── utils/
│   │   └── web3.js             # Utilitaires Web3
│   ├── App.jsx                 # Composant principal
│   ├── main.jsx                # Point d'entrée avec providers
│   └── index.css               # Styles Tailwind
├── .env                        # Variables d'environnement (non versionné)
├── .env.example                # Template de configuration
├── vite.config.js              # Configuration Vite
├── tailwind.config.js          # Configuration Tailwind
└── package.json
```

##  Technologies Utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| **React** | 19.2.0 | Framework UI avec React Compiler |
| **Vite** | 7.3.1 | Build tool ultra-rapide |
| **Wagmi** | 2.19.5 | Hooks React pour Ethereum |
| **RainbowKit** | 2.2.10 | UI de connexion wallet |
| **TailwindCSS** | 4.1.18 | Framework CSS utility-first |
| **Viem** | 2.46.2 | Alternative moderne à ethers.js |
| **TanStack Query** | 5.90.21 | Gestion de cache et requêtes |

##  Palette de Couleurs

Le design utilise un thème **Gold & Black Premium** :

- **Primary Gold** : `#facc15` (yellow-500)
- **Dark Gold** : `#ca8a04` (yellow-600)
- **Background** : `#050505` (near-black)
- **Card Background** : `#0a0a0a`
- **Accents** : Blanc transparent (`white/5`, `white/10`)

##  Configuration Avancée

### Ajouter un Nouveau Réseau

Éditez `src/main.jsx` :

```javascript
import { mainnet, sepolia, polygon } from 'wagmi/chains';

const config = getDefaultConfig({
  chains: [mainnet, sepolia, polygon], // Ajoutez polygon
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http('https://rpc.ankr.com/eth_sepolia'),
    [polygon.id]: http('https://polygon-rpc.com'), // Nouveau RPC
  },
});
```

### Personnaliser le Thème RainbowKit

Dans `src/main.jsx` :

```javascript
<RainbowKitProvider 
  theme={darkTheme({
    accentColor: '#facc15',      // Gold
    accentColorForeground: 'black',
    borderRadius: 'large',
  })} 
  modalSize="compact"
>
```

##  Résolution des Problèmes

### Les boutons WalletConnect/Rainbow ne réagissent pas

1.  Vérifiez que votre **Project ID** est correct dans `.env`
2.  Assurez-vous que votre extension de wallet est **ouverte**
3.  Videz le cache du navigateur ou testez en **navigation privée**
4.  Consultez la console (F12) pour voir les erreurs

### Erreur "Project ID not found" (401)

 Votre Project ID n'est pas valide. Créez-en un nouveau sur [cloud.walletconnect.com](https://cloud.walletconnect.com/).

### Le solde n'apparaît pas

 Vérifiez que vous êtes connecté au réseau **Sepolia** (testnet). Le mainnet nécessite des vrais ETH.

##  Build de Production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

Les fichiers de production seront dans le dossier `dist/`.

##  Déploiement

### Vercel (Recommandé)

1. Installez Vercel CLI : `npm i -g vercel`
2. Lancez : `vercel`
3. Ajoutez votre `VITE_WALLETCONNECT_PROJECT_ID` dans les **Environment Variables** du dashboard Vercel

### Netlify

1. Connectez votre repo GitHub
2. Build command : `npm run build`
3. Publish directory : `dist`
4. Ajoutez la variable d'environnement dans **Site Settings → Environment Variables**

##  Licence

Ce projet est open-source et disponible sous licence MIT.

##  Remerciements

- [RainbowKit](https://www.rainbowkit.com/) pour l'UI de connexion
- [Wagmi](https://wagmi.sh/) pour les hooks React
- [TailwindCSS](https://tailwindcss.com/) pour le framework CSS
- [Vite](https://vitejs.dev/) pour le build ultra-rapide

---

**Développé avec ❤️ pour la communauté Web3**
