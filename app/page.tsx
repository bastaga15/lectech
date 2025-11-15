"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, CheckCircle, ArrowRight, Linkedin, Mail, Calendar, Clock, TrendingUp, Users, Copy, Check } from "lucide-react";

const LecTechV2 = () => {
  // Images locales depuis /public
  const identifierSrc = "/identifier.png";
  const accompagnerSrc = "/accompagner.png";
  const developerSrc = "/developper.png";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const copyEmailToClipboard = () => {
    const email = "lectech.business@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const testimonials = [
    {
      name: "François",
      text: "Bastien comprend rapidement des demandes complexes. Sa capacité à s'adapter et à maîtriser de nouveaux outils dont j'avais besoin dans mon système d'automatisation est impressionnante.\nExpert dans son domaine, il saura vous conseiller en fonction du résultat souhaité.\nTravailler avec Bastien fut un vrai plaisir, il est clair, concis et va droit au but sans perdre de temps. Je recommande vivement ses services.",
      role: "Entrepreneur"
    },
    {
      name: "Olivier",
      text: "J'ai vraiment apprécié nos échanges, ton écoute et ta compréhension notamment, qui étaient d'un niveau bien supérieur à ce que j'avais pu avoir précédemment.",
      role: "Directeur des opérations"
    }
  ];

  // Projects reordered: Database first, Siretisation second, E-commerce third
  const projects = [
    {
      title: "Base de Données Intelligente",
      description: "Création et mise à jour automatique d'une base de données de plus de 1500 entreprises avec enrichissement des données via API, agents IA et synchronisation multi-sources.",
      tags: ["Database", "Agents IA", "APIs"],
      icon: "📊",
      results: ["1500+ entreprises", "MAJ quotidienne et automatisée", "Qualité des données +95%"]
    },
    {
      title: "Sirétisation Automatique",
      description: "Système intelligent de récupération automatique du SIRET d'une entreprise à partir de son nom et de son adresse. Solution complète de A à Z avec validation et vérification des données.",
      tags: ["API", "Automatisation", "IA"],
      icon: "🔍",
      results: ["+80% de précision", "Traitement en temps réel", "1000+ entreprises/jour"]
    },
    {
      title: "Boutique E-commerce Automatisé",
      description: "Automatisation complète d'une boutique Etsy : upscaling des images produits, création automatique des templates d'un produit, et publication directe sur la plateforme.",
      tags: ["E-commerce", "IA Générative", "Automatisation"],
      icon: "🛒",
      results: ["Système 5x plus rapide", "Templates personnalisés", "Système scalable car réplicable sur toutes les plateformes"]
    }
  ];

  // Actualités posts - Facilement modifiable, pas besoin d'iframe !
  const actualitesPosts = [
    {
      title: "Bilan 6 mois LecTech",
      excerpt: "Depuis début 2025, je note dans un carnet de bord ce que je fais et mes ressentis. \n\n6 mois, 41 posts LinkedIn, +30 projets, 11 missions, 4 clients, 100% de satisfaction...",
      date: "Septembre 2025",
      readTime: "5 min",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7366390279009939456/"
    },
    {
      title: "L'IA concentre 75% des financements",
      excerpt: "Au cours des deux dernières années, plus de 1 639 milliards de dollars ont été levés. L'IA représente 53% des deals faits en 2024. Analyse des données CB Insights...",
      date: "Octobre 2025",
      readTime: "6 min",
      linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_au-cours-des-deux-derni%C3%A8res-ann%C3%A9es-plus-activity-7376876867049443328-iAcn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp_IXwBjC35hUQQx09PU_WBBu4bFsQPvgc"
    },
    {
      title: "Capgemini : L'évolution de l'IA dans les entreprises",
      excerpt: "Capgemini a sorti dans son rapport annuel de 2025 l'évolution de l'utilisation de l'IA dans les entreprises. L'adoption de l'IA générative est désormais généralisée, passant de 6% en 2023 à 30% en 2025...",
      date: "Octobre 2025",
      readTime: "4 min",
      linkedinUrl: "https://www.linkedin.com/posts/bastien-lechat_capgemini-a-sorti-dans-son-rapport-annuel-activity-7371803449161805825-shzv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp_IXwBjC35hUQQx09PU_WBBu4bFsQPvgc"
    }
  ];

  // Carrousel automatique pour Portfolio
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 9000); // Change toutes les 4 secondes
    return () => clearInterval(interval);
  }, [projects.length]);

  // Carrousel automatique pour Témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change toutes les 4 secondes
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Barlow, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');
        
        .nav-link {
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #1B8F54 !important;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stat-card {
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }

        .form-input:focus {
          outline: none;
          ring: 2px;
          ring-color: #1B8F54;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
      `}</style>
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black shadow-lg" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/logolectech.png"
                alt="LecTech Logo"
                width={40}
                height={40}
                className="object-contain"
                unoptimized
              />
              <div className="text-white text-2xl font-bold tracking-tight">
                <span className="text-white">Lec</span>
                <span className="text-white">Tech</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-link text-white text-sm font-medium transition-colors"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection("avis")}
                className="nav-link text-white text-sm font-medium transition-colors"
              >
                TÉMOIGNAGES
              </button>
              <button
                onClick={() => scrollToSection("actualites")}
                className="nav-link text-white text-sm font-medium transition-colors"
              >
                ACTUALITÉS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link text-white text-sm font-medium transition-colors"
              >
                CONTACT
              </button>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left text-white text-sm font-medium py-2"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection("avis")}
                className="block w-full text-left text-white text-sm font-medium py-2"
              >
                TÉMOIGNAGES
              </button>
              <button
                onClick={() => scrollToSection("actualites")}
                className="block w-full text-left text-white text-sm font-medium py-2"
              >
                ACTUALITÉS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-white text-sm font-medium py-2"
              >
                CONTACT
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - RAPPROCHÉ DES STATS */}
      <section 
        className="min-h-screen flex items-center justify-center px-6 pt-20" 
        style={{ backgroundColor: "#1B8F54" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-4">
            L'intelligence artificielle au service de votre entreprise.
            <br />
            Pour prendre de l'avance...
            <br />
            et la garder
          </h1>
          
          <div className="w-48 h-0.5 bg-white mx-auto mb-4"></div>
          
          <p className="text-white text-xl lg:text-2xl font-light mb-6">
            Éducation - Audit - Système sur mesure
          </p>

          {/* Enhanced Stats - PLUS PROCHE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-4">
            <div className="stat-card px-8 py-6 rounded-2xl" style={{ backgroundColor: "#1B8F54" }}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp size={28} className="text-white" />
                <span className="text-4xl font-bold text-white">+10</span>
              </div>
              <p className="text-lg font-medium text-white">Projets réalisés</p>
            </div>
            <div className="stat-card px-8 py-6 rounded-2xl" style={{ backgroundColor: "#1B8F54" }}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <Users size={28} className="text-white" />
                <span className="text-4xl font-bold text-white">100%</span>
              </div>
              <p className="text-lg font-medium text-white">Satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - BOUTONS VERTS CÔTE À CÔTE */}
      <section 
        id="cta" 
        data-animate
        className={`py-20 lg:py-32 px-6 bg-white fade-in ${visibleSections.has('cta') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center" style={{ color: "#1B8F54" }}>
            Prendre de l'avance... et la garder
          </h2>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Chez <span className="font-semibold" style={{ color: "#1B8F54" }}>LecTech</span>, nous sommes convaincus que l'automatisation et l'IA va redistribuer les cartes pour les entreprises dans les prochaines années. 
              Comme Internet il y a plus de 20 ans, l'écart va se creuser entre ceux qui osent et ceux qui attendent.
            </p>
            <p>
              Les défis à relever sont réels : des innovations rapides et majeures noyées dans beaucoup de bruits, de peur ou de jolies promesses. 
              Chaque entreprise est désormais confrontée à un choix : <span className="font-semibold" style={{ color: "#1B8F54" }}>prendre un risque et innover ou prendre du retard.</span>
            </p>
            <p>
              L'IA n'est pas toujours la voie à suivre. Un bon projet est un projet qui apporte de la valeur. 
              Et si nous considérons qu'un cahier des charges ne satisfait pas nos exigences en terme de valeur ajoutée, nous n'hésiterons pas à vous le déconseiller.
            </p>
            <p>
              Pourtant, bien utilisée, l'IA redéfinit fondamentalement la manière dont les personnes créent de la valeur. 
              Elle accentue la manière dont les organisations réfléchissent, décident et agissent, et c'est comme cela que des petites organisations peuvent aujourd'hui concurrencer les grandes.
            </p>
            <p className="font-semibold text-xl" style={{ color: "#1B8F54" }}>
              Et c'est là que nous intervenons.
            </p>
            <p>
              Nous concevons les automatisations, les copilotes et les systèmes qui remodèlent le fonctionnement de vos équipes, 
              et nous veillons à ce que le changement soit durable. Ensuite, nous aidons vos collaborateurs à maîtriser les outils qui définiront leur travail pour les années à venir.
            </p>
            <p>
              C'est la raison d'être de LecTech : aider les entreprises françaises à concrétiser l'utilisation de l'IA et ses nouveaux outils pour avoir un retour sur investissement. 
              Nous ne nous contentons pas de mettre en œuvre l'IA. Nous construisons des systèmes d'exploitation robustes pour la prochaine décennie de croissance.
            </p>
            <p className="font-semibold text-xl" style={{ color: "#1B8F54" }}>
              L'avenir est arrivé. Et il appartient peut-être à ceux qui sont prêts à passer à l'action.
            </p>
          </div>

          {/* DEUX BOUTONS VERTS CÔTE À CÔTE */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: "#1B8F54" }}
            >
              Demander un audit
            </button>
            <a
              href="https://www.linkedin.com/in/bastien-lechat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: "#1B8F54" }}
            >
              <Linkedin size={20} />
              Discutons sur LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Animated Timeline Process */}
      <section 
        id="process" 
        data-animate
        className={`py-20 lg:py-28 px-6 bg-white fade-in ${visibleSections.has('process') ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center" style={{ color: "#1B8F54" }}>
            Notre parcours de transformation IA en trois étapes
          </h2>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-start relative">
                {/* Step 1 - Identifier */}
                <div className="flex-1 text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    {identifierSrc ? (
                      <img 
                        src={identifierSrc} 
                        alt="Identifier" 
                        className="w-20 h-20 object-contain"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-300"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B8F54" }}>
                    Identifier
                  </h3>
                  <p className="text-gray-600 px-4">
                    Les opportunités d'IA à fort impact et élaborer une stratégie étape par étape
                  </p>
                </div>

                {/* Step 2 - Accompagner */}
                <div className="flex-1 text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    {accompagnerSrc ? (
                      <img 
                        src={accompagnerSrc} 
                        alt="Accompagner" 
                        className="w-20 h-20 object-contain"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-300"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B8F54" }}>
                    Accompagner
                  </h3>
                  <p className="text-gray-600 px-4">
                    Votre équipe avec les outils et le savoir-faire adaptés pour intégrer l'IA
                  </p>
                </div>

                {/* Step 3 - Développer */}
                <div className="flex-1 text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    {developerSrc ? (
                      <img 
                        src={developerSrc} 
                        alt="Développer" 
                        className="w-20 h-20 object-contain"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-300"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B8F54" }}>
                    Développer
                  </h3>
                  <p className="text-gray-600 px-4">
                    Des systèmes d'IA personnalisés qui font bouger les choses dans votre entreprise
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {[
                { src: identifierSrc, title: "Identifier", desc: "Les opportunités d'IA à fort impact et élaborer une stratégie étape par étape" },
                { src: accompagnerSrc, title: "Accompagner", desc: "Votre équipe avec les outils et le savoir-faire adaptés pour intégrer l'IA" },
                { src: developerSrc, title: "Développer", desc: "Des systèmes d'IA personnalisés qui font bouger les choses dans votre entreprise" }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {step.src ? (
                      <img 
                        src={step.src} 
                        alt={step.title} 
                        className="w-20 h-20 object-contain"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full border-4 border-gray-300"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#1B8F54" }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
        id="portfolio" 
        data-animate
        className={`py-20 lg:py-28 px-6 bg-neutral-50 fade-in ${visibleSections.has('portfolio') ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center" style={{ color: "#1B8F54" }}>
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à automatiser leurs processus et gagner en efficacité
          </p>

          {/* Carrousel Portfolio */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
            >
              {projects.map((project, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-neutral-50 hover:shadow-xl transition-all duration-300 overflow-hidden max-w-md mx-auto">
                    <div className="p-6">
                      <div className="text-5xl mb-4">{project.icon}</div>
                      
                      <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B8F54" }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-sm rounded-full text-white"
                            style={{ backgroundColor: "#1B8F54" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 pt-4 space-y-2">
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle size={16} style={{ color: "#1B8F54" }} />
                            <span className="text-sm text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicateurs de pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentProjectIndex ? 'bg-[#1B8F54] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au projet ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="avis" 
        data-animate
        className={`py-20 lg:py-28 px-6 bg-white fade-in ${visibleSections.has('avis') ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center" style={{ color: "#1B8F54" }}>
            Ce que disent nos clients
          </h2>

          {/* Carrousel Témoignages */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto relative">
                    <div className="p-8 bg-white relative">
                      <div className="text-5xl mb-4" style={{ color: "#1B8F54" }}>"</div>
                      <p className="text-gray-700 leading-relaxed mb-6 italic whitespace-pre-line">
                        {testimonial.text}
                      </p>
                      <div className="text-5xl absolute bottom-8 right-8" style={{ color: "#1B8F54" }}>"</div>
                      <div className="border-t border-gray-200 pt-4 mt-6">
                        <p className="font-bold text-lg" style={{ color: "#1B8F54" }}>
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicateurs de pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentTestimonialIndex ? 'bg-[#1B8F54] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au témoignage ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section 
        id="actualites" 
        data-animate
        className={`py-20 lg:py-28 px-6 bg-neutral-50 fade-in ${visibleSections.has('actualites') ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center" style={{ color: "#1B8F54" }}>
            Actualités
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Nos dernières réflexions sur l'IA et l'automatisation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actualitesPosts.map((post, idx) => {
              // Utiliser linkedinUrl comme identifiant unique (encoder pour URL)
              const postId = encodeURIComponent(post.linkedinUrl);
              return (
              <a
                key={idx}
                href={`/actualites#post-${postId}`}
                className="block"
              >
                <div 
                  className="bg-white hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                  style={{ transform: 'translateY(0)' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#1B8F54" }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 font-semibold transition-all" style={{ color: "#1B8F54" }}>
                      Lire l'article complet
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </a>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/actualites"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: "#1B8F54" }}
            >
              Voir toutes les actualités
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section 
        id="about-me" 
        data-animate
        className={`py-20 lg:py-28 px-6 bg-neutral-50 fade-in ${visibleSections.has('about-me') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center" style={{ color: "#1B8F54" }}>
            Qui suis-je ?
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Photo avec cercle vert */}
            <div className="flex-shrink-0">
              <div 
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4"
                style={{ borderColor: "#1B8F54" }}
              >
                <Image
                  src="/fondateurlectech.jpg"
                  alt="Bastien - Fondateur de LecTech"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            
            {/* Texte */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 flex-1">
              <p>
                Je m'appelle <span className="font-semibold" style={{ color: "#1B8F54" }}>Bastien</span>, 
                futur diplômé d'école d'ingénieur de l'<span className="font-semibold" style={{ color: "#1B8F54" }}>ISAE-Supaero</span>, 
                fondateur de LecTech et passionné par l'intelligence artificielle et l'automatisation.
              </p>
              <p>
                Après avoir constaté le potentiel immense de l'IA pour transformer les entreprises, 
                j'ai décidé de mettre mon expertise au service des PME et startups qui souhaitent 
                prendre de l'avance dans leur transformation digitale.
              </p>
              <p>
                Ma mission : rendre l'IA accessible, concrète et rentable pour chaque entreprise, 
                quelle que soit sa taille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - LABELS VISIBLES + PROJET + BOUTONS BLANCS */}
      <section id="contact" className="py-20 lg:py-28 px-6" style={{ backgroundColor: "#1B8F54" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white text-center">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-white mb-12 opacity-90 text-center">
            Discutons de votre projet d'automatisation IA.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl group"
              style={{ color: "#1B8F54" }}>
              <Mail size={20} />
              <span>lectech.business@gmail.com</span>
              <button
                onClick={copyEmailToClipboard}
                className="ml-2 p-1 rounded hover:bg-gray-100 transition-colors"
                title="Copier l'email"
                aria-label="Copier l'email"
              >
                {emailCopied ? (
                  <Check size={18} style={{ color: "#1B8F54" }} />
                ) : (
                  <Copy size={18} style={{ color: "#1B8F54" }} />
                )}
              </button>
              {emailCopied && (
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded whitespace-nowrap">
                  Email copié !
                </span>
              )}
            </div>
            <a
              href="https://www.linkedin.com/in/bastien-lechat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl"
              style={{ color: "#1B8F54" }}
            >
              <Linkedin size={20} />
              Discutons sur LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer - INCHANGÉ */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">LecTech</div>
              <p className="text-gray-400 text-sm">
                L'intelligence artificielle au service de votre entreprise
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => scrollToSection("portfolio")} className="block hover:text-white">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection("actualites")} className="block hover:text-white">
                  Actualités
                </button>
                <button onClick={() => scrollToSection("avis")} className="block hover:text-white">
                  Témoignages
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Email: lectech.business@gmail.com</p>
                <a 
                  href="https://www.linkedin.com/in/bastien-lechat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  LinkedIn: /bastien-lechat
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            © 2025 LecTech. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LecTechV2;