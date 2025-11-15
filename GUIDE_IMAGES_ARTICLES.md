# 📸 Guide : Ajouter des images à vos articles

## 🎯 À quoi sert `excerpt` ?

L'**`excerpt`** est un **extrait court** qui apparaît :
- Sur la **page d'accueil** dans la section "Actualités" (les 3 cartes)
- Il sert de **description/accroche** pour donner envie de lire l'article complet

**Exemple :**
```javascript
excerpt: "L'un des moments que je préfère sur Strava, c'est quand je vois mes statistiques après une sortie..."
```

C'est comme un "résumé" qui donne un aperçu de l'article.

## 🖼️ Comment ajouter des images à un article

### Option 1 : Une seule image

```javascript
{
  title: "Mon article",
  excerpt: "Extrait...",
  date: "Octobre 2025",
  readTime: "4 min",
  linkedinUrl: "https://...",
  content: `Votre texte complet...`,
  image: "https://media.licdn.com/..." // Une seule image
}
```

### Option 2 : Plusieurs images (recommandé)

```javascript
{
  title: "Mon article",
  excerpt: "Extrait...",
  date: "Octobre 2025",
  readTime: "4 min",
  linkedinUrl: "https://...",
  content: `Votre texte complet...`,
  images: [
    "https://media.licdn.com/...", // Image 1
    "https://media.licdn.com/...", // Image 2
    "/images/mon-image.jpg"        // Image locale
  ]
}
```

## 📍 Où les images apparaissent ?

Les images s'affichent :
- ✅ **Seulement après avoir cliqué sur "Voir plus"**
- ✅ **Entre la fin du texte et les boutons** (Voir moins / Aller voir sur LinkedIn)
- ✅ **Dans l'ordre** : d'abord le texte complet, puis les images, puis les boutons

## 🔗 Comment obtenir l'URL d'une image LinkedIn ?

1. **Ouvrez votre post LinkedIn**
2. **Clic droit sur l'image** → "Copier l'adresse de l'image"
3. **Collez l'URL** dans le tableau `images`

**Exemple d'URL LinkedIn :**
```
https://media.licdn.com/dms/image/v2/D5622AQH_YI0df4vujg/feedshare-shrink_800/...
```

## 📁 Images locales (optionnel)

Si vous préférez utiliser vos propres images :

1. **Placez l'image** dans `public/images/`
2. **Utilisez le chemin** : `"/images/nom-image.jpg"`

```javascript
images: [
  "/images/mon-image-1.jpg",
  "/images/mon-image-2.jpg"
]
```

## ✨ Exemple complet

```javascript
{
  title: "Mon article avec images",
  excerpt: "Découvrez comment j'ai créé ce projet...",
  date: "Novembre 2025",
  readTime: "5 min",
  linkedinUrl: "https://www.linkedin.com/posts/...",
  content: `Voici mon texte complet.

Avec plusieurs paragraphes.

Les images apparaîtront après ce texte.`,
  images: [
    "https://media.licdn.com/dms/image/...",
    "https://media.licdn.com/dms/image/..."
  ]
}
```

## ⚠️ Notes importantes

- Les images sont **toujours cachées** par défaut
- Elles apparaissent **seulement après "Voir plus"**
- Elles s'affichent **entre le texte et les boutons**
- Vous pouvez mélanger URLs LinkedIn et images locales
- L'ordre dans le tableau `images` est l'ordre d'affichage

