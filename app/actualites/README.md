# Comment ajouter un nouvel article

## 🎯 Format ultra-simplifié

Il suffit maintenant de mettre l'URL LinkedIn, et le système récupère **automatiquement l'image** !

```javascript
{
  title: "Titre de votre article",
  excerpt: "Les 3 premières lignes qui s'affichent par défaut...",
  date: "Octobre 2025",
  readTime: "4 min",
  linkedinUrl: "https://www.linkedin.com/posts/..." // L'image sera récupérée automatiquement !
}
```

## 📝 Ajouter le texte complet (optionnel)

Si vous voulez afficher le texte complet (pas seulement l'extrait), ajoutez `content` :

```javascript
{
  title: "Mon article",
  excerpt: "Extrait...",
  date: "Octobre 2025",
  readTime: "4 min",
  linkedinUrl: "https://www.linkedin.com/posts/...",
  content: `Votre texte complet ici.
  
Avec plusieurs paragraphes.

Les sauts de ligne sont respectés.`
}
```

## 🖼️ Image automatique

**L'image est récupérée automatiquement depuis LinkedIn !** 

Vous n'avez rien à faire, le système va chercher l'image du post LinkedIn tout seul.

Si vous voulez utiliser votre propre image à la place :
```javascript
image: "/images/mon-image.jpg" // Mettez l'image dans public/images/
```

## 📋 Guide rapide pour copier le texte depuis LinkedIn

1. **Ouvrez votre post LinkedIn**
2. **Sélectionnez tout le texte** (Ctrl+A ou Cmd+A)
3. **Copiez** (Ctrl+C ou Cmd+C)
4. **Collez dans `content`** en respectant les sauts de ligne

C'est tout ! Le système s'occupe du reste.

## 🎨 Fonctionnement

- **Par défaut** : Affiche seulement l'extrait + bouton "Voir plus"
- **Avec `content`** : Le texte complet s'affiche quand on clique sur "Voir plus"
- **Image** : Récupérée automatiquement depuis LinkedIn (ou vous pouvez en mettre une manuellement)
- **Bouton LinkedIn** : Apparaît toujours en bas pour rediriger vers le post original

## 📍 Où ajouter ?

- **`actualitesHomePosts`** : Articles sur la page d'accueil ET actualités
- **`actualitesExtraPosts`** : Articles UNIQUEMENT sur la page actualités

## ✨ Exemple complet

```javascript
{
  title: "Mon nouveau post sur l'IA",
  excerpt: "Aujourd'hui, je vais vous parler de l'évolution de l'IA...",
  date: "Novembre 2025",
  readTime: "4 min",
  linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_mon-nouveau-post-activity-1234567890",
  content: `Aujourd'hui, je vais vous parler de l'évolution de l'IA dans les entreprises.

Les chiffres sont impressionnants : 30% des entreprises utilisent maintenant l'IA générative.

Voici les principaux enseignements que j'en retire...`
  // L'image sera récupérée automatiquement depuis LinkedIn !
}
```

**C'est tout !** Le système fait le reste automatiquement. 🚀
