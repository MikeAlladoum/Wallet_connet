# 🔑 Guide : Obtenir votre WalletConnect Project ID

## Étape 1 : Créer un Compte

1. **Visitez** [cloud.walletconnect.com](https://cloud.walletconnect.com/)
2. **Cliquez** sur "Sign Up" (en haut à droite)
3. **Choisissez** votre méthode de connexion :
   - GitHub (recommandé)
   - Email

![WalletConnect Sign Up](https://docs.walletconnect.com/assets/images/sign-in-e8d1f9e0c9c9e8e0c9c9e8e0c9c9e8e0.png)

## Étape 2 : Créer un Nouveau Projet

1. Une fois connecté, cliquez sur **"Create New Project"**
2. **Remplissez** les informations :
   - **Project Name** : "Premium Web3 Dashboard" (ou votre nom)
   - **Description** (optionnel) : "Dashboard de gestion de wallet"
   - **Project Homepage** : Laissez vide pour l'instant

3. Cliquez sur **"Create"**

## Étape 3 : Copier le Project ID

1. Vous serez redirigé vers la page de votre projet
2. Vous verrez une section **"Project ID"** avec un identifiant unique
3. **Cliquez** sur l'icône de copie (📋) à côté du Project ID

   Exemple de Project ID :
   ```
   3fccdc30141f6c449c25da73041c2c36
   ```

## Étape 4 : Configurer dans Votre Projet

### Option A : Via Fichier .env (Recommandé)

1. **Ouvrez** le terminal dans le dossier `frontend/`
2. **Copiez** le template :
   ```bash
   cp .env.example .env
   ```
   
   Sur Windows PowerShell :
   ```powershell
   Copy-Item .env.example .env
   ```

3. **Ouvrez** `.env` avec votre éditeur
4. **Collez** votre Project ID :
   ```env
   VITE_WALLETCONNECT_PROJECT_ID=3fccdc30141f6c449c25da73041c2c36
   ```

5. **Sauvegardez** le fichier

### Option B : Directement dans le Code (Non Recommandé)

Si vous ne voulez pas utiliser de fichier `.env`, vous pouvez modifier directement `src/main.jsx` :

```javascript
const config = getDefaultConfig({
  appName: 'Premium Web3 Dashboard',
  projectId: 'VOTRE_PROJECT_ID_ICI', // ⬅️ Collez ici
  chains: [mainnet, sepolia],
  // ...
});
```

⚠️ **Attention** : Ne commitez JAMAIS votre Project ID dans Git si vous rendez le projet public !

## Étape 5 : Tester la Connexion

1. **Lancez** le serveur de développement :
   ```bash
   npm run dev
   ```

2. **Ouvrez** votre navigateur sur [http://localhost:5173](http://localhost:5173)

3. **Cliquez** sur "ENTRER DANS LE DASHBOARD"

4. **Essayez** de vous connecter avec :
   - **MetaMask** (fonctionne toujours)
   - **WalletConnect** (devrait maintenant fonctionner ✅)
   - **Rainbow** (devrait maintenant fonctionner ✅)

## ✅ Vérification

Si la configuration est correcte, vous verrez dans la console du navigateur (F12) :

```
Initializing Web3 Config...
```

Sans erreur `401 Unauthorized` sur les requêtes vers `relay.walletconnect.com`.

## 🐛 Dépannage

### Le Project ID ne fonctionne pas

- ✅ Vérifiez qu'il n'y a pas d'espaces avant/après l'ID dans `.env`
- ✅ Redémarrez le serveur Vite (`Ctrl+C` puis `npm run dev`)
- ✅ Videz le cache du navigateur (Ctrl+Shift+Del)

### Erreur "Failed to fetch configuration"

➡️ Vérifiez que votre connexion internet n'est pas bloquée par un firewall d'entreprise.

### Le fichier .env n'est pas lu

➡️ Assurez-vous que le fichier s'appelle exactement `.env` (avec le point) et est à la racine du dossier `frontend/`.

## 📚 Ressources Supplémentaires

- [Documentation WalletConnect Cloud](https://docs.walletconnect.com/2.0/cloud/relay)
- [FAQ RainbowKit](https://www.rainbowkit.com/docs/installation#configure)
- [Guide Wagmi Configuration](https://wagmi.sh/react/getting-started)

---

**Besoin d'aide ?** Consultez le [README.md](README.md) principal pour plus d'informations.
