# 🚀 Guide de Déploiement Vercel

## Prérequis
- Compte Vercel (gratuit sur [vercel.com](https://vercel.com))
- Code poussé sur GitHub
- Variable d'environnement WalletConnect Project ID

## 📋 Étapes de Déploiement

### Option 1: Interface Web Vercel (Recommandée)

1. **Connectez-vous à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Sign Up" ou "Log In"
   - Connectez votre compte GitHub

2. **Importez votre Projet**
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez votre repository `Wallet_connet`
   - Cliquez sur "Import"

3. **Configurez le Projet**
   - **Framework Preset**: Vite
   - **Root Directory**: Laissez vide (ou sélectionnez `frontend` si demandé)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Ajoutez les Variables d'Environnement**
   ⚠️ **CRITIQUE**: Sans cette étape, votre app ne fonctionnera pas!
   
   Dans la section "Environment Variables":
   ```
   Name: VITE_WALLETCONNECT_PROJECT_ID
   Value: 252f0835516f8d2c4c5b39edeb29e01d
   ```
   
   Assurez-vous de l'ajouter pour tous les environnements:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. **Déployez**
   - Cliquez sur "Deploy"
   - Attendez 2-3 minutes
   - Votre site sera disponible sur `https://votre-projet.vercel.app`

### Option 2: Vercel CLI

```powershell
# Installer Vercel CLI (si pas déjà fait)
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
cd C:\Users\HP\Documents\Connect_Wallet\frontend
vercel

# Ajouter la variable d'environnement
vercel env add VITE_WALLETCONNECT_PROJECT_ID

# Redéployer avec les nouvelles variables
vercel --prod
```

## 🔧 Configuration Post-Déploiement

### Vérifier le Déploiement
1. Ouvrez l'URL de votre application
2. Ouvrez la Console (F12)
3. Vérifiez qu'il n'y a pas d'erreurs
4. Testez la connexion wallet

### Problèmes Courants

**❌ WalletConnect ne fonctionne pas**
- Vérifiez que `VITE_WALLETCONNECT_PROJECT_ID` est bien configuré
- Allez dans Settings → Environment Variables sur Vercel
- Redéployez après avoir ajouté la variable

**❌ Erreur 404 sur les routes**
- Le fichier `vercel.json` devrait gérer ça automatiquement
- Vérifiez qu'il est bien présent dans votre repo

**❌ Build échoue**
- Vérifiez `package.json` et `package-lock.json` sont à jour
- Essayez de supprimer `node_modules` et réinstaller localement
- Poussez les changements et redéployez

## 🌐 Domaine Personnalisé (Optionnel)

1. Allez dans Settings → Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS
4. Attendez la propagation (quelques minutes à quelques heures)

## 📊 Analytics et Monitoring

Vercel fournit gratuitement:
- Analytics de performance
- Logs en temps réel
- Métriques Web Vitals

Activez-les dans Settings → Analytics

## 🔄 Déploiements Automatiques

Chaque push sur la branche `main` déclenchera automatiquement un nouveau déploiement!

```powershell
# Faire des changements
git add .
git commit -m "Update feature"
git push origin main

# Vercel déploiera automatiquement
```

## 🎯 Checklist Finale

- ✅ Projet déployé sur Vercel
- ✅ Variable d'environnement `VITE_WALLETCONNECT_PROJECT_ID` configurée
- ✅ Site accessible via HTTPS
- ✅ Connexion wallet fonctionne
- ✅ Changement de réseau fonctionne
- ✅ Aucune erreur dans la console

## 🆘 Support

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Vite](https://vitejs.dev/guide/)
- [WalletConnect Docs](https://docs.walletconnect.com/)
