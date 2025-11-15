"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";

// Actualités posts pour la page d'accueil ET la page Actualités
// 
// FORMAT SIMPLIFIÉ : Il suffit de mettre linkedinUrl, et le système récupère automatiquement l'image !
// Vous pouvez ensuite ajouter 'content' pour le texte complet (ou le laisser vide pour juste l'extrait)
//
// Exemple minimal :
// {
//   title: "Mon titre",
//   excerpt: "Extrait...",
//   date: "Octobre 2025",
//   readTime: "4 min",
//   linkedinUrl: "https://www.linkedin.com/posts/..."
// }
//
// Le système récupérera automatiquement l'image depuis LinkedIn !
//
const actualitesHomePosts = [
  {
    title: "Bilan 6 mois LecTech",
    excerpt: "Depuis début 2025, je note dans un carnet de bord ce que je fais et mes ressentis. \n\n6 mois, 41 posts LinkedIn, +30 projets, 11 missions, 4 clients, 100% de satisfaction...",
    date: "Septembre 2025",
    readTime: "5 min",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7366390279009939456/",
    // Optionnel : Ajoutez 'content' pour le texte complet, sinon seul l'extrait s'affiche
    content: `Bilan 6 mois LecTech

Depuis début 2025, je note dans un carnet de bord ce que je fais et mes ressentis pour pouvoir me replonger dans qui j’étais dans plusieurs années. L’avantage, c’est que je sais que le 12 février j’ai eu pour la première fois l’idée de lancer une micro-entreprise spécialisée dans l’IA et l’automatisation : LecTech. Aujourd’hui, ça fait plus de 6 mois, donc j’ai eu envie de faire un petit bilan.

6 mois.
Envie d’abandonner au moins 10 fois (et 1 arrêt pendant tout le mois de mars).
Peur d’échouer ou l’impression d’avoir des mauvaises idées : au moins 3 fois par semaine.

41 posts LinkedIn.
1 vidéo YouTube.
3 TikTok.
30 jours pour apprendre l’IA (28 en vrai).
0€ dépensé en pub.

+30 projets.
11 missions.
4 clients. 
100% de taux de satisfaction, et 100% de mes clients qui m’ont recontacté pour une autre mission.

Chaque salaire qui représente beaucoup plus pour moi que n’importe laquelle de mes fiches de paie précédentes.

100%. Même quand c’est dur, quand j’ai l’impression d’être face à un mur sans pouvoir y arriver, quand je passe des heures à écrire, faire des visios ou construire un système qui bug, je m’amuse et savoure 100% du temps.

Et depuis 4 mois, je continue chaque jour, peu importe que je sois à l’université en Corée, en vacances à Toulouse ou que je travaille 60h par semaine 7/7 comme serveur dans le Sud de la France. 

C’est la première fois que je fais quelque chose qui me plaît vraiment, me fait peur et me fait rêver en même temps. J’aime être libre et en même temps responsable de ce que je fais. Certes, c’est moins tranquille que d’autres métiers où je pourrais avoir un salaire garanti. Mais je suis pas sûr de m’y sentir mieux.

Merci à ceux qui m’ont vanné, j’étais vacciné contre la grosse tête pendant ces 6 mois. 
Merci à tous ceux qui m’ont encouragé et soutenu. Au début, il ne faut pas sous-estimer un like ou un message sympa.

Et maintenant ? J’espère que je pourrai présenter un meilleur bilan d’ici la fin de 2025 :)`,
  },
  {
    title: "L'IA concentre 75% des financements des deux dernières années",
    excerpt: "Au cours des deux dernières années, plus de 1 639 milliards de dollars ont été levés. L'IA représente 53% des deals faits en 2024. Analyse des données CB Insights...",
    date: "Octobre 2025",
    readTime: "6 min",
    linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_au-cours-des-deux-derni%C3%A8res-ann%C3%A9es-plus-activity-7376876867049443328-iAcn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp_IXwBjC35hUQQx09PU_WBBu4bFsQPvgc",
    content: `Au cours des deux dernières années, plus de 1 639 milliards de dollars ont été levé sur les 100 marchés les plus financés, et on peut regrouper ces marchés en 4 catégories : 
 - IA Générique & Agents : 1 222 Md$
 - Défense & Aérospatial : 266 Md$ (4,5 fois moins !)
 - Secteurs appliqués (santé, mobilité, fintech, climat, logistique) : 132 Md$
 -Technologies fondamentales (chips, sécurité) : 20 Md$

En classant sur le total des financements en fonds propres sur les 2 dernières années, le premier marché qui n’est pas en rapport avec l’IA, “Annotation de données” se classe… 23ème, avec 16Md$ levés. Les 22 premiers marchés concernent donc l’IA, et le marché le plus financé, le “Développement de LLM” cumule à lui seul 111Md$, soit l’équivalent de plus d'un quart des investissements qui ne concernent pas l’IA.

Et si l’on regarde en terme de deals, encore une fois pour les 100 marchés les plus financés sur l’année 2024 :
 - IA Générique & Agents : 510
 - Défense & Aérospatial : 152 
 - Secteurs appliqués (santé, mobilité, fintech, climat, logistique) : 235
 - Technologies fondamentales (chips, sécurité) : 50
L’IA représente 53% des deals faits en 2024.

Maintenant, par rapport à la dynamique sur 2 ans : 

On passe au total de 1939 deals sur 2 ans à 947 sur la dernière année seule, soit -2,6 %. Autrement dit, le marché se contracte légèrement en nombre de deals, mais reste massif.
Les montants suivent la même tendance que les deals : moins d’opérations, mais le ticket moyen grossit.

L’IA Générique & Agents reste la locomotive (54 % des deals récents), mais est en léger recul par rapport à 2023.
La Défense & Aérospatial est en forte montée (de 14 à 16 % du total), ce qui reflète le contexte géopolitique et l’investissement massif dans l’IA militaire et dual-use.
Les Secteurs appliqués et les Technologies fondamentales se consolident légèrement sur 2024.
Technologies fondamentales : petites parts mais stables (5 %) → niche critique (chips, sécurité infra), souvent portée par quelques gros deals.


L’IA, qu’il s’agisse d’agents intelligents, de modèles génératifs, de plateformes de données ou d’infrastructures, concentre à elle seule près de 75% des montants totaux financés sur ces deux dernières années, et près de 56% des deals. 
Vous avez dit phénomène ? Pourtant, l’engouement semble se calmer, voire diminuer légèrement. RDV l’année prochaine pour mieux identifier une tendance de fond ?

Données issues de la base de données de CB Insights`,
image : "https://media.licdn.com/dms/image/v2/D5622AQFRENBQ5x58fA/feedshare-shrink_800/B56ZlskjBSJwAg-/0/1758463144687?e=1764806400&v=beta&t=Y-PQuOd_7wjfidxkI3yePROa0rb0anM1CfHuftWeKMY"
  },
  {
    title: "Capgemini : L'évolution de l'IA dans les entreprises en 2025",
    excerpt: "Capgemini a sorti dans son rapport annuel de 2025 l'évolution de l'utilisation de l'IA dans les entreprises. L'adoption de l'IA générative est désormais généralisée, passant de 6% en 2023 à 30% en 2025...",
    date: "Octobre 2025",
    readTime: "4 min",
    linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_capgemini-a-sorti-dans-son-rapport-annuel-activity-7371803449161805825-shzv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp_IXwBjC35hUQQx09PU_WBBu4bFsQPvgc",
    content: `Capgemini a sorti dans son rapport annuel de 2025 l'évolution de l'utilisation de l'IA dans les entreprises :

→ L'adoption de l'IA générative est désormais généralisée, passant de 6 % en 2023 à 30 % en 2025. Aujourd'hui, 93 % (!) des entreprises explorent ou mettent en place des capacités d'IA générative.

→ Les agents IA gagnent du terrain, avec 14 % des entreprises les mettant en œuvre à une échelle partielle ou complète, et 23 % menant des projets pilotes. Parmi celles qui déploient déjà des agents IA à grande échelle, près de 45 % testent ou développent des systèmes multi-agents.

→ L'IA évolue, passant d'un simple outil à un véritable coéquipier. Près de six entreprises sur dix prévoient d'intégrer l'IA comme collaborateur augmentant ou autonome d'ici l'année prochaine – mais la plupart ne sont pas suffisamment préparées à cette transition.

→ La confiance et la gouvernance sont à la traîne : 71 % des entreprises déclarent ne pas pouvoir faire pleinement confiance aux agents IA autonomes pour un usage en entreprise. Bien que 46 % disposent de politiques de gouvernance, leur application reste faible.

→ L'impact environnemental de l'IA est de plus en plus scruté. Seule une entreprise sur cinq mesure l'empreinte écologique de son IA générative, bien que des initiatives durables – comme l'utilisation de modèles plus petits et spécialisés – gagnent du terrain.

Et tout cela en seulement deux ans. Je pense qu'on arrive à la bascule sur la courbe de l'innovation entre les utilisateurs précoces et la majorité précoce : le moment où l'innovation devient usage courant, juste avant l'adoption massive. La question maintenant, c'est où en sera-t-on dans 1 an ?

Le lien de l'étude Capgemini : https://lnkd.in/gJqujuxx`,
image : "https://media.licdn.com/dms/image/v2/D5622AQFSEZjdjzZ3Sg/feedshare-shrink_2048_1536/B56Zk1NgwyJoAw-/0/1757534359303?e=1764806400&v=beta&t=6pxBIKPwXgc4IOEsV6tpDroQ3Xwqa-hVJ6qqPBq16AA"
  }
];

// Actualités posts supplémentaires pour cette page uniquement - Ajoutez-en autant que vous voulez !
const actualitesExtraPosts = [
  {
    title: "Reconstruire une partie des fonctionnalités de Strava Pro gratuitement",
    excerpt: "L'un des moments que je préfère sur Strava, c'est quand je vois mes statistiques après une sortie. J'ai décidé de recréer certaines fonctionnalités de Strava Pro en utilisant l'IA...",
    date: "25 Octobre 2025",
    readTime: "3 min",
    linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_lun-des-moments-que-je-pr%C3%A9f%C3%A8re-sur-strava-activity-7386412220102008832-STn-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp_IXwBjC35hUQQx09PU_WBBu4bFsQPvgc",
    content: `L'un des moments que je préfère sur Strava, c'est le récap de fin d'année : toutes les sorties de l'année se condensent sur un tableau de données et des graphiques et nous disent (ou pas) si les résolutions du début d'année ont été tenues.

Le souci, c'est que sur le plan gratuit, on ne peut avoir le récap des sorties que sur les 3 derniers mois au maximum. Impossible (avant fin décembre) d'avoir les infos globales sur son année, et savoir où l'on en était sur ses objectifs sportifs.

J'ai donc pour la première fois fait un projet pour moi  : recréer une partie des fonctionnaités de Strava Pro gratuitement. J'ai utilisé l'API de Strava et n8n pour que chaque semaine, mes données sportives s'exportent automatiquement dans un tableau Excel.

J'ai créé un autre feuillet 'Tableau de bord', qui résume les infos sportives sur le mois en cours, compare à celles du mois précédent, et surtout donne l'avance/le retard par rapport à à un objectif annuel (Si je dois faire 1000km en courant dans l'année, soit 19,2km/semaine, je peux savoir à tout moment de l'année si je suis en avance/retard sur mes résolutions, et surtout quel rythme je dois tenir jusqu'à la fin de l'année).

Enfin, j'ai refait le graphique style Strava qui donne le résumé sur les distances parcourues pas seulement sur les 3 derniers mois, mais sur toute l'année en cours et aussi depuis le début de mon compte Strava.

J'aurais bien aimé pouvoir ajouter un tableau avec un historique des PR, pour savoir depuis quand date un record et comment il a évolué au fil du temps, mais il faut souscrire à l'abonnement Pro, alors que toutes ces infos/graphiques sont accessibles gratuitement.`,
    // Images : visibles seulement après "Voir plus", entre le texte et les boutons
    images: [
      "https://media.licdn.com/dms/image/v2/D5622AQH_YI0df4vujg/feedshare-shrink_800/B56Zn8vI2LJ8Ag-/0/1760881840112?e=1764806400&v=beta&t=Ts9smZ5BalW7XX9miCL18lEDdFzYFD8Y-KX9Owu9ZZM"
    ]
  },
{  
  title: "Mon premier système totalement automatisé",
  excerpt: "Mon premier système totalement automatisé",
  date: "Août 2025",
  readTime: "3 min",
  linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_hier-soir-pour-la-premi%C3%A8re-fois-jai-pu-activity-7361318829047603201-efDz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp_IXwBjC35hUQQx09PU_WBBu4bFsQPvgc",
  content: `Hier soir pour la première fois, j’ai pu ressentir ce que ça faisait d’avoir un système qui faisait le boulot à ma place. J’avais un fichier avec + de 3000 entreprises et leur adresse, pour lesquelles je devais trouver le SIRET, et comme mon système prend environ 5s par entreprise, ça représentait 4h de boulot.

  Mais pour la première fois, j’ai pu aller dormir en sachant qu’au réveil le taff serait fait, à partir d’un système que j’avais fabriqué de A à Z. Et même si trouver des numéros SIRET c’est pas ce qu’il y a de plus classe, ça m’a quand même rendu fier.
  
  À côté de ça, j’ai pu tester les nouvelles fonctionnalités de ChatGPT 5. Certes, tout n’est pas parfait, mais quelque chose a changé.
  Avant, on devait micromanager, lui donner des instructions rigides, et chaque erreur pouvait tout faire capoter. Maintenant, ça commence à ne plus seulement être un assistant qu’il faut guider, mais plutôt un collègue en qui on peut avoir confiance. En utilisant un background agent de Cursor, on peut même avoir un ChatGPT connecté à ses outils : Google Sheets, Gmail, Google Calendar… 
  
  Avant, pour la tâche “renvoie un message aux clients contactés hier, il fallait : 
  ↓ Lui donner le Google Sheets avec l’historique des contacts
  ↓ Lui demander d’écrire le brouillon des mails 
  ↓ Envoyer à la main chaque mail 
  ↓ Puis s’occuper de chaque réponse individuellement et manuellement
  
  Maintenant, pour la tâche “renvoie un message aux clients contactés hier, il faut : 
  → Lui donner le Google Sheets avec l’historique des contacts
  → Lui demander d’écrire les mails
  → Il s’occupe du reste, et va même jusqu’à relancer plusieurs mails, et noter les clients qui ont répondu ou pas.
  
  Ce n’est que le début, mais avoir un système qui fait le travail ou une partie du travail n’est plus très loin de la réalité, et je suis convaincu que cela peut faciliter beaucoup de métiers dans les années à venir.`
},
  {
    title: "Mon premier Hackathon à Toulouse",
    excerpt: "Découvrez mon dernier post sur LinkedIn...",
    date: "15 Novembre 2025",
    readTime: "3 min",
    linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_mardi-soir-je-rentre-de-hacktogone-mon-activity-7395453565953064961-R2WF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp_IXwBjC35hUQQx09PU_WBBu4bFsQPvgc",
    // Collez ici le texte complet de votre post (les 6 premières lignes s'afficheront par défaut)
    content: `Mardi soir

Je rentre de Hacktogone

Mon équipe n'a pas remporté le prix final…

Et pourtant, je n'ai jamais eu autant l'impression de gagner ! 
(J’ai volé le début du post de Sofian Dauriac, j’ai cherché mais je n’ai pas trouvé mieux (heureusement que c’était lui le responsable marketing équipe ! ) 


Du 8 au 11 novembre, j’ai participé avec Clément Maubon et Sofian Dauriac au Hacktogone à Toulouse, un hackathon sur le thème des agents IA, où le but était de répondre à la problématique d’une entreprise.

Pour nous, c’était réussir à créer de A à Z une application qui met en relation des personnes qui ont la flemme de cuisiner et qui sont prêtes à payer un particulier qui viendrait faire à manger chez eux. Le Airbnb de la cuisine en quelque sorte (Mais aucun rapport avec les agents IA).

Le sujet était sympa et réussir à coder cela en 4 jours était (très) ambitieux pour des novices comme nous, mais on s’est quand même jetés dedans tête la première pendant deux jours.

Mais hormis Clément qui a déjà codé des applications dans son temps libre, en tant que débutants avec Sofian, c’était compliqué de lui être vraiment utile. Et au détour d’une conversation, on s’est rendus compte que Sofian, en tant que closer, avait une expérience énorme en vente. Et c’est comme ça que notre hackathon technique s’est progressivement transformé en FAQ pour Sofian, sur ses méthodes, sa psychologie et comment il travaillait. 

Tout ça pour se rendre compte dimanche à 19h, après 2 jours sur le sujet, que ce n’était pas suivre à la lettre le programme du Hackathon qui nous excitait le plus, mais apprendre des compétences qui nous serviront après ce week-end.

On a donc passé le reste du Hackathon sur des solutions techniques pour répondre à des problèmes que les clients de Sofian rencontraient, là où on apportait vraiment de la valeur, tandis qu’il nous expliquait sa discipline et sa rigueur pour faire passer une personne intéressée en un client.

Et après 4 jours, je suis 1000x plus satisfait des rencontres que j’ai faites et des idées, et d'avoir pu profiter d'être à Toulouse pour faire un tour à l'ISAE-SUPAERO et revoir du beau monde là-bas.

Merci à Clément, à Sofian et à l’orga du Hacktogone pour ce week-end :)
`,
    // Optionnel : image du post
   image: "https://media.licdn.com/dms/image/v2/D5622AQExc6w-zqtc6A/feedshare-shrink_2048_1536/B56ZqHt0_PKAAw-/0/1763213530093?e=1764806400&v=beta&t=2MS6BpzUumJDGsIlRy3Wzqtke2dUwEYh12IMxLzy8bI"
  },
  {
    title: "J'ai fait économiser plus de 11 jours de travail à un client.",
    excerpt: "J’ai fait économiser plus de 11 jours de travail à un client",
    date: "Juillet 2025",
    readTime: "2 min",
    linkedinUrl: "https://media.licdn.com/dms/image/v2/D5622AQEbTn5SbuxoRg/feedshare-shrink_480/B56Zf6gjoeHUAc-/0/1752254528572?e=1764806400&v=beta&t=lJIJ-iE3OxYfobuR7u_oRFyvN3nSrD68anSZ0iQDWv4",
    // Collez ici le texte complet de votre post (les 6 premières lignes s'afficheront par défaut)
    content: `J’ai fait économiser plus de 11 jours de travail à un client

Il y a deux mois, on m’a contacté pour une automatisation sur un business d’impression à la demande. La personne créait à la main des offres de posters sur Etsy. Chaque nouveau produit lui prenait 6 minutes à faire en moyenne, mais il avait posté plus de 4,000 posters, soit l’équivalent de plus de 15 jours non-stop de travail. 
Il veut encore en poster plus de 10,000 (pour augmenter ses ventes sur Etsy, car chaque nouveau produit améliore son référencement), mais ça lui aurait pris plus de 10 jours non stop à faire. 

Je me suis donc occupé d’automatiser sa création de produit : en utilisant une même image 
pour faire 6 mockups(des “posters”) différents pour bien visualiser le produit, mais aussi car ça améliore son nombre de ventes sur Bannerbear. 
Puis, un nouveau produit était créé sur Gelato, qui est relié à son compte Etsy et lui permet de passer commande à son fabricant dès qu’un poster sur Etsy est commandé. 

Avant : il devait se dépatouiller avec tous ces sites pendant 6-7 minutes pour créer son produit de A à Z

Maintenant : il a juste à glisser l’image qui lui servira de poster dans un dossier Dropbox, puis à lancer son automatisation. À l’échelle d’un produit, ça lui fait gagner 6 minutes, mais quand il veut en télécharger des dizaines de milliers, ça fait une sacrée différence. 

Et maintenant, il a un système complet et scalable  qui fait le boulot pour lui, 24/24, pendant que lui peut faire autre chose ! 

Si tu veux que je t’explique plus en détail comment ça marche, connecte toi à mon LinkedIn, envoie moi un message et on en parle en privé !
`,
    // Optionnel : image du post
   image: "https://media.licdn.com/dms/image/v2/D5622AQEbTn5SbuxoRg/feedshare-shrink_480/B56Zf6gjoeHUAc-/0/1752254528572?e=1764806400&v=beta&t=lJIJ-iE3OxYfobuR7u_oRFyvN3nSrD68anSZ0iQDWv4"
  }
  // Ajoutez vos autres posts ici, un par ligne, en suivant le même format
];

// Fonction pour parser la date et trier
const parseDate = (dateStr: string): Date => {
  const months: { [key: string]: number } = {
    "Janvier": 0, "Février": 1, "Mars": 2, "Avril": 3, "Mai": 4, "Juin": 5,
    "Juillet": 6, "Août": 7, "Septembre": 8, "Octobre": 9, "Novembre": 10, "Décembre": 11,
    "Jan": 0, "Fév": 1, "Mar": 2, "Avr": 3,
    "Jul": 6, "Sep": 8, "Oct": 9, "Nov": 10, "Déc": 11
  };
  
  // Gérer les formats "25 Octobre 2025" ou "Octobre 2025"
  const parts = dateStr.split(" ");
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return new Date(parseInt(year), months[month] || 0, parseInt(day));
  } else if (parts.length === 2) {
    const [month, year] = parts;
    return new Date(parseInt(year), months[month] || 0);
  }
  return new Date();
};

// Combiner et trier tous les posts
const allPosts = [...actualitesHomePosts, ...actualitesExtraPosts].sort((a, b) => {
  return parseDate(b.date).getTime() - parseDate(a.date).getTime();
});

export default function ActualitesPage() {
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Scroll vers le post si hash présent dans l'URL
    const hash = window.location.hash;
    if (hash) {
      const encodedUrl = hash.replace('#post-', '');
      const decodedUrl = decodeURIComponent(encodedUrl);
      
      setTimeout(() => {
        const element = document.getElementById(`post-${encodedUrl}`);
        if (element) {
          // Trouver l'index du post dans allPosts par son linkedinUrl
          const postIndex = allPosts.findIndex(post => post.linkedinUrl === decodedUrl);
          if (postIndex !== -1) {
            // Déplier automatiquement le post si hash présent
            setExpandedPosts(prev => new Set(prev).add(postIndex));
          }
          
          // Attendre que le post soit déplié avant de scroller
          setTimeout(() => {
            // Calculer la position pour afficher le début du cadre (avec un offset pour la navbar)
            const elementTop = element.offsetTop;
            const offsetPosition = elementTop - 100; // 100px pour la navbar + marge (moins d'offset = scroll plus haut = cache le bas du cadre précédent)
            
            window.scrollTo({
              top: Math.max(0, offsetPosition), // S'assurer qu'on ne scroll pas en négatif
              behavior: 'smooth'
            });
          }, 150); // Attendre un peu plus pour que le contenu soit déplié
        }
      }, 100);
    }
  }, []);

  const togglePost = (idx: number) => {
    setExpandedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Barlow, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-white text-2xl font-bold tracking-tight">
              <span className="text-white">Lec</span>
              <span className="text-white">Tech</span>
            </Link>
            <Link
              href="/"
              className="text-white text-sm font-medium transition-colors hover:text-[#1B8F54]"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1B8F54] hover:text-[#1B8F54] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour à l'accueil</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#1B8F54" }}>
            Actualités
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tous nos articles et réflexions sur l'IA et l'automatisation
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {allPosts.map((post, idx) => {
            // Utiliser linkedinUrl comme identifiant unique (encoder pour URL)
            const postId = encodeURIComponent(post.linkedinUrl);
            return (
            <article 
              key={idx} 
              id={`post-${postId}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Post Content */}
              <div className="p-8">
                {/* Date and Read Time */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6 group-hover:text-[#1B8F54] transition-colors" style={{ color: "#1B8F54" }}>
                  {post.title}
                </h2>

                {/* Content - 6 premières lignes par défaut, tout le contenu si déplié */}
                {post.content ? (
                  <>
                    {/* Affichage des 5 premières lignes ou contenu complet */}
                    {expandedPosts.has(idx) ? (
                      <div className="space-y-6">
                        {/* Contenu complet avec support HTML */}
                        <div 
                          className="text-gray-700 leading-relaxed text-lg whitespace-pre-line"
                          dangerouslySetInnerHTML={{ 
                            __html: post.content
                              .replace(/\n/g, '<br>')
                              .replace(/<iframe/g, '<iframe class="w-full my-6 rounded-lg" style="max-width: 100%;"')
                              .replace(/<video/g, '<video class="w-full my-6 rounded-lg" controls')
                          }}
                        />
                        
                        {/* Images - visibles seulement après "Voir plus", entre le texte et les boutons */}
                        {(post as any).images && Array.isArray((post as any).images) && (post as any).images.length > 0 && (
                          <div className="space-y-4">
                            {(post as any).images.map((imgUrl: string, imgIdx: number) => (
                              <div key={imgIdx} className="rounded-lg overflow-hidden">
                                <Image 
                                  src={imgUrl} 
                                  alt={`${post.title} - Image ${imgIdx + 1}`}
                                  width={800}
                                  height={600}
                                  className="w-full h-auto object-cover"
                                  unoptimized
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Image unique (ancien format) - pour compatibilité */}
                        {(post as any).image && !(post as any).images && (
                          <div className="rounded-lg overflow-hidden">
                            <Image 
                              src={(post as any).image} 
                              alt={post.title}
                              width={800}
                              height={400}
                              className="w-full h-auto object-cover"
                              unoptimized
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                        {post.content.split('\n').slice(0, 5).join('\n')}
                      </div>
                    )}

                    {/* Boutons Voir plus/moins et LinkedIn */}
                    <div className="flex items-center gap-4 mt-6">
                      {post.content.split('\n').length > 5 && (
                        <button
                          onClick={() => togglePost(idx)}
                          className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg border-2"
                          style={{ 
                            backgroundColor: expandedPosts.has(idx) ? "transparent" : "#1B8F54",
                            color: expandedPosts.has(idx) ? "#1B8F54" : "white",
                            borderColor: "#1B8F54"
                          }}
                        >
                          {expandedPosts.has(idx) ? "Voir moins" : "Voir plus"}
                        </button>
                      )}
                      
                      {/* Bouton LinkedIn - visible seulement si déplié */}
                      {post.linkedinUrl && expandedPosts.has(idx) && (
                        <a
                          href={post.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                          style={{ backgroundColor: "#0077B5" }}
                        >
                          <Linkedin size={18} />
                          Aller voir ce post sur LinkedIn
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  /* Si pas de content, afficher juste l'extrait */
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </article>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">LecTech</div>
          <p className="text-gray-400 text-sm mb-4">
            L'intelligence artificielle au service de votre entreprise
          </p>
          <div className="border-t border-gray-800 pt-8 text-gray-400 text-sm">
            © 2025 LecTech. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
