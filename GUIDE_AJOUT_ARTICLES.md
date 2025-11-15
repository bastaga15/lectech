# 📝 Guide complet : Ajouter des articles manuellement

## 🎯 Étape par étape

### 1. Ouvrir le fichier

Ouvrez le fichier : `app/actualites/page.tsx`

### 2. Trouver où ajouter

Il y a **deux endroits** :

- **`actualitesHomePosts`** (ligne ~24) : Articles qui apparaissent sur la page d'accueil ET sur la page actualités
- **`actualitesExtraPosts`** (ligne ~77) : Articles qui apparaissent UNIQUEMENT sur la page actualités

### 3. Copier le modèle

Copiez ce modèle et collez-le dans le tableau :

```javascript
{
  title: "Titre de votre article",
  excerpt: "Les 3 premières lignes qui s'affichent par défaut...",
  date: "Octobre 2025",
  readTime: "4 min",
  linkedinUrl: "https://www.linkedin.com/posts/...",
  content: `Votre texte complet ici.
  
Avec plusieurs paragraphes.

Les sauts de ligne sont respectés.`,
  image: null, // Ou "https://media.licdn.com/..." ou "/images/mon-image.jpg"
}
```

### 4. Remplir les champs

#### `title` : Le titre de votre article
```javascript
title: "Mon super article sur l'IA"
```

#### `excerpt` : Les 3 premières lignes (affichées par défaut)
```javascript
excerpt: "Aujourd'hui, je vais vous parler de l'évolution de l'IA dans les entreprises..."
```

#### `date` : La date de publication
```javascript
date: "Octobre 2025"  // Format : "Mois Année" ou "Jour Mois Année"
```

#### `readTime` : Temps de lecture estimé
```javascript
readTime: "4 min"
```

#### `linkedinUrl` : L'URL du post LinkedIn
1. Allez sur votre post LinkedIn
2. Cliquez sur les **3 points** (⋯) en haut à droite
3. Sélectionnez **"Copier le lien vers le post"**
4. Collez ici :
```javascript
linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_mon-post-activity-1234567890"
```

#### `content` : Le texte complet (optionnel mais recommandé)
1. Ouvrez votre post LinkedIn
2. **Sélectionnez tout le texte** (Ctrl+A ou Cmd+A)
3. **Copiez** (Ctrl+C ou Cmd+C)
4. Collez dans `content` en respectant les sauts de ligne :
```javascript
content: `Votre texte complet ici.

Avec plusieurs paragraphes.

Les sauts de ligne sont respectés.`
```

**Important** : Utilisez des **backticks** (`` ` ``) et non des guillemets pour `content` !

#### `image` : L'image du post (optionnel)

**Option A : URL LinkedIn**
1. Ouvrez votre post LinkedIn
2. **Clic droit sur l'image** → "Copier l'adresse de l'image"
3. Collez ici :
```javascript
image: "https://media.licdn.com/dms/image/..."
```

**Option B : Image locale**
1. Placez votre image dans `public/images/`
2. Utilisez :
```javascript
image: "/images/mon-image.jpg"
```

**Option C : Pas d'image**
```javascript
image: null
```

### 5. Exemple complet

```javascript
{
  title: "Mon nouveau post sur l'IA",
  excerpt: "Aujourd'hui, je vais vous parler de l'évolution de l'IA dans les entreprises. Les chiffres sont impressionnants...",
  date: "Novembre 2025",
  readTime: "5 min",
  linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_mon-nouveau-post-activity-1234567890",
  content: `Aujourd'hui, je vais vous parler de l'évolution de l'IA dans les entreprises.

Les chiffres sont impressionnants : 30% des entreprises utilisent maintenant l'IA générative.

Voici les principaux enseignements que j'en retire...`,
  image: "https://media.licdn.com/dms/image/..."
}
```

### 6. Où placer dans le fichier

Ajoutez votre nouvel article **au début** du tableau (pour qu'il apparaisse en premier) :

```javascript
const actualitesHomePosts = [
  {
    // VOTRE NOUVEL ARTICLE ICI (en premier)
    title: "...",
    // ...
  },
  {
    // Articles existants...
  }
];
```

### 7. Vérifier

1. Sauvegardez le fichier
2. Le site se recharge automatiquement
3. Allez sur `/actualites` pour voir votre article

## 🎬 Ajouter des vidéos

Oui, vous pouvez ajouter des vidéos ! Voici comment :

### Option 1 : Vidéo YouTube

Ajoutez dans `content` :

```javascript
content: `Votre texte...

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Plus de texte...`
```

**Pour obtenir l'ID de la vidéo** :
- URL YouTube : `https://www.youtube.com/watch?v=VIDEO_ID`
- Remplacez `VIDEO_ID` dans l'iframe

### Option 2 : Vidéo locale

1. Placez votre vidéo dans `public/videos/`
2. Ajoutez dans `content` :

```javascript
content: `Votre texte...

<video width="100%" controls>
  <source src="/videos/mon-video.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la vidéo.
</video>

Plus de texte...`
```

### Option 3 : Vidéo Vimeo

```javascript
content: `Votre texte...

<iframe src="https://player.vimeo.com/video/VIDEO_ID" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

Plus de texte...`
```

## ⚠️ Notes importantes

- Les articles sont **automatiquement triés par date** (du plus récent au plus ancien)
- Si vous ne mettez pas `content`, seul l'extrait s'affiche avec un bouton vers LinkedIn
- Les sauts de ligne dans `content` sont respectés grâce aux backticks
- Pour les vidéos, utilisez des iframes dans `content`

## 🆘 Problèmes courants

**Le texte ne s'affiche pas correctement ?**
- Vérifiez que vous utilisez des **backticks** (`` ` ``) et non des guillemets pour `content`

**L'image ne s'affiche pas ?**
- Vérifiez que l'URL est complète (commence par `https://`)
- Pour les images locales, vérifiez qu'elles sont dans `public/images/`

**La vidéo ne s'affiche pas ?**
- Vérifiez que l'ID de la vidéo est correct
- Pour YouTube, utilisez l'URL d'embed, pas l'URL de partage

