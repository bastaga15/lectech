# Configuration de l'envoi d'email automatique

## Étapes pour activer l'envoi d'email automatique

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour)
3. Allez dans "API Keys" et créez une nouvelle clé API

### 2. Configurer la variable d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Remplacez `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` par votre clé API Resend.

### 3. Vérifier votre domaine (optionnel)

Par défaut, l'API utilise `onboarding@resend.dev` pour les tests. Pour utiliser votre propre domaine :

1. Allez dans "Domains" sur Resend
2. Ajoutez votre domaine (ex: `lectech.business`)
3. Suivez les instructions pour vérifier le domaine
4. Modifiez `app/api/contact/route.ts` ligne 18 pour utiliser votre domaine :
   ```typescript
   from: 'LecTech Contact <contact@lectech.business>',
   ```

### 4. Tester

1. Redémarrez le serveur de développement : `npm run dev`
2. Remplissez le formulaire de contact
3. Vérifiez que vous recevez l'email à `lectech.business@gmail.com`

## Déploiement

Lors du déploiement (Vercel, Netlify, etc.), ajoutez la variable d'environnement `RESEND_API_KEY` dans les paramètres de votre projet.

