# 🧪 Guide de Test sur Sepolia Testnet

## 📋 **Prérequis**

Avant de commencer, assurez-vous d'avoir :
- ✅ MetaMask ou un autre wallet installé
- ✅ Votre Dashboard fonctionnel sur http://localhost:5175
- ✅ Une connexion Internet stable

---

## 🎯 **Étape 1 : Obtenir des ETH de Test Sepolia**

Les ETH Sepolia sont **gratuits** et servent uniquement aux tests. Voici comment les obtenir :

### 🚰 **Faucets Recommandés** (Robinets ETH Gratuits)

#### Option A : Alchemy Faucet (Le plus fiable)
1. **Allez sur** : [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
2. **Connectez-vous** avec votre compte Alchemy (gratuit)
3. **Collez** votre adresse wallet MetaMask
4. **Demandez** 0.5 ETH Sepolia
5. ⏱️ **Délai** : Quelques secondes

#### Option B : QuickNode Faucet
1. **Allez sur** : [https://faucet.quicknode.com/ethereum/sepolia](https://faucet.quicknode.com/ethereum/sepolia)
2. **Créez un compte** QuickNode (gratuit)
3. **Collez** votre adresse
4. **Recevez** 0.1 ETH Sepolia

#### Option C : Infura Faucet
1. **Allez sur** : [https://www.infura.io/faucet/sepolia](https://www.infura.io/faucet/sepolia)
2. **Connectez-vous** avec Google/GitHub
3. **Collez** votre adresse
4. **Recevez** 0.5 ETH Sepolia

### 📱 **Comment obtenir votre adresse MetaMask ?**

1. Ouvrez **MetaMask** (extension Chrome)
2. Cliquez sur le nom de votre compte en haut
3. Votre adresse apparaît (commence par `0x...`)
4. Cliquez dessus pour **copier**

---

## 🔧 **Étape 2 : Ajouter Sepolia à MetaMask**

### Méthode Automatique (Recommandée)

1. **Allez sur** [Chainlist](https://chainlist.org/)
2. **Cherchez** "Sepolia"
3. **Cliquez** sur "Connect Wallet"
4. **Approuvez** dans MetaMask
5. ✅ Sepolia est ajouté automatiquement !

### Méthode Manuelle

Si vous préférez ajouter Sepolia manuellement :

1. Ouvrez **MetaMask**
2. Cliquez sur le menu **réseau** en haut
3. Cliquez sur **"Ajouter un réseau"**
4. Cliquez sur **"Ajouter manuellement"**
5. Remplissez les informations :

```
Nom du réseau     : Sepolia
URL RPC           : https://rpc.ankr.com/eth_sepolia
ID de chaîne      : 11155111
Symbole           : ETH
Explorateur       : https://sepolia.etherscan.io
```

6. Cliquez sur **"Enregistrer"**

---

## 🚀 **Étape 3 : Se Connecter au Dashboard**

1. **Ouvrez** [http://localhost:5175](http://localhost:5175)
2. **Cliquez** sur "ENTRER DANS LE DASHBOARD"
3. **Sélectionnez** "MetaMask"
4. **Approuvez** la connexion dans MetaMask
5. ✅ Vous êtes connecté !

---

## ⚙️ **Étape 4 : Basculer sur Sepolia**

### Si vous n'êtes PAS sur Sepolia :

Vous verrez un **badge rouge** qui dit :
```
🔴 WRONG NETWORK
```

**Action** :
1. Cliquez sur le bouton **"SWITCH TO SEPOLIA"**
2. **Approuvez** le changement dans MetaMask
3. ✅ Le badge devient **vert** "SEPOLIA LIVE"

### Vérification Manuelle dans MetaMask :

1. Ouvrez MetaMask
2. En haut, vérifiez que le réseau affiché est **"Sepolia"**
3. Si ce n'est pas le cas, sélectionnez Sepolia manuellement

---

## 📊 **Étape 5 : Vérifier Votre Solde**

Une fois connecté et sur Sepolia, vous devriez voir :

```
┌─────────────────────────────────┐
│  Available Balance              │
│  0.5000 ETH                     │
└─────────────────────────────────┘
```

### Si le solde affiche `0.0000 ETH` :

1. ✅ Vérifiez que vous êtes bien sur **Sepolia** (badge vert)
2. ✅ Confirmez que vos ETH de test sont arrivés :
   - Ouvrez MetaMask
   - Vérifiez le solde affiché
3. ✅ Rafraîchissez la page du Dashboard (F5)

---

## 🧪 **Étape 6 : Tester les Fonctionnalités**

### Test 1 : Copier l'Adresse
- Cliquez sur l'icône **📋** à côté de votre adresse
- Vérifiez que l'icône change en **✅**
- Collez dans un éditeur de texte pour confirmer

### Test 2 : Vérifier le Réseau
- Le badge doit afficher **"SEPOLIA LIVE"** en vert
- Un point vert doit clignoter à côté

### Test 3 : Déconnexion
- Cliquez sur **"Disconnect Wallet"**
- Vous revenez à l'écran d'accueil
- Reconnectez-vous pour tester à nouveau

---

## 🔍 **Vérification avec Etherscan**

Vous pouvez consulter votre compte Sepolia publiquement :

1. **Copiez** votre adresse (commence par `0x...`)
2. **Allez sur** [https://sepolia.etherscan.io](https://sepolia.etherscan.io)
3. **Collez** votre adresse dans la barre de recherche
4. Vous verrez :
   - Votre solde ETH
   - L'historique de vos transactions
   - Les tokens que vous possédez

---

## 🐛 **Dépannage**

### Problème : "Le solde n'apparaît pas"

**Solutions** :
1. Attendez 30 secondes (la blockchain met du temps à se synchroniser)
2. Rafraîchissez la page (F5)
3. Déconnectez et reconnectez votre wallet
4. Vérifiez que vous êtes sur Sepolia dans MetaMask

### Problème : "WRONG NETWORK ne passe pas en vert"

**Solutions** :
1. Cliquez **plusieurs fois** sur "SWITCH TO SEPOLIA"
2. Changez manuellement le réseau dans MetaMask vers Sepolia
3. Redémarrez le serveur Vite (`Ctrl+C` puis `npm run dev`)

### Problème : "Les ETH de test ne sont pas arrivés"

**Solutions** :
1. Vérifiez votre adresse sur [sepolia.etherscan.io](https://sepolia.etherscan.io)
2. Essayez un autre faucet (voir Étape 1)
3. Les faucets ont parfois des limites (1 fois par 24h par IP)
4. Utilisez un VPN si vous avez épuisé votre quota

### Problème : "MetaMask ne se connecte pas"

**Solutions** :
1. Actualisez la page du Dashboard
2. Ouvrez l'extension MetaMask manuellement
3. Déverrouillez MetaMask en entrant votre mot de passe
4. Essayez en navigation privée

---

## 📸 **Captures d'Écran de Référence**

### État Déconnecté
```
╔════════════════════════════════════╗
║      PREMIUM DASHBOARD             ║
║  Connectez votre portefeuille...   ║
║  [ENTRER DANS LE DASHBOARD]        ║
╚════════════════════════════════════╝
```

### État Connecté (Mauvais Réseau)
```
╔════════════════════════════════════╗
║  🔴 WRONG NETWORK                  ║
║  [SWITCH TO SEPOLIA]               ║
╚════════════════════════════════════╝
```

### État Connecté (Bon Réseau)
```
╔════════════════════════════════════╗
║  🟢 SEPOLIA LIVE                   ║
║  Account Address: 0x1234...5678    ║
║  Available Balance: 0.5000 ETH     ║
╚════════════════════════════════════╝
```

---

## ✅ **Checklist Complète de Test**

Cochez chaque étape au fur et à mesure :

- [ ] J'ai obtenu des ETH de test Sepolia
- [ ] J'ai ajouté Sepolia à MetaMask
- [ ] Je me suis connecté au Dashboard
- [ ] Le Dashboard détecte mon wallet
- [ ] Je suis passé sur le réseau Sepolia
- [ ] Le badge affiche "SEPOLIA LIVE" en vert
- [ ] Mon solde ETH s'affiche correctement
- [ ] Je peux copier mon adresse
- [ ] Je peux me déconnecter et reconnecter

---

## 🎉 **Félicitations !**

Si toutes les étapes sont validées, votre **Premium Web3 Dashboard** est 100% fonctionnel sur Sepolia ! 

Vous pouvez maintenant :
- 🚀 Déployer sur Vercel/Netlify
- 💼 Ajouter ce projet à votre portfolio
- 🔧 Implémenter des fonctionnalités avancées

---

## 📚 **Ressources Supplémentaires**

- [Documentation Sepolia](https://ethereum.org/en/developers/docs/networks/#sepolia)
- [Explorer Sepolia](https://sepolia.etherscan.io/)
- [Status Sepolia](https://sepolia.dev/)
- [Faucet List](https://faucetlink.to/sepolia)

---

**Besoin d'aide ?** Consultez le [README.md](README.md) ou [SETUP.md](SETUP.md) pour plus d'informations.
