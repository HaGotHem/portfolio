# 📋 Améliorations suggérées — Portfolio Thomas Bertacchi

> Analyse comparative basée sur l'état actuel de `localhost:5173` (juin 2026).

---

## 🏠 Page Accueil

### Liens réseaux sociaux dans la Hero section
Tes liens GitHub, email et téléphone sont uniquement sur la page Contact. Il serait pertinent d'ajouter des boutons GitHub et LinkedIn directement visibles sur la page d'accueil, dans la section hero, pour que les recruteurs les trouvent immédiatement.

### Photo ou illustration personnelle
La hero section est entièrement typographique. Ajouter une photo de profil ou une illustration te rendrait plus identifiable et humaniserait la page.

### Boutons d'action (CTA)
Il manque des boutons d'appel à l'action clairs comme "Télécharger mon CV" ou "Me contacter" directement depuis l'accueil, ce qui faciliterait la navigation d'un recruteur pressé.

---

## 👤 Section "À propos" — À créer

Cette section est complètement absente de ton portfolio. Elle est pourtant attendue et permet de te présenter en profondeur. Elle pourrait inclure :

- Une photo de profil
- Un texte de présentation plus développé (personnalité, motivations, centres d'intérêt)
- Un bouton vers ton CV ou ton parcours

---

## 🎓 Section "Parcours / Éducation" — À créer

Tu as un CV qui liste ta formation (BTS SIO SLAM, Licence 1 Informatique, Bac général à Monaco), mais cette information n'est pas mise en valeur dans une section dédiée. Une **timeline visuelle** avec tes formations et expériences donnerait beaucoup plus d'impact. À intégrer avec :

- Dates et établissements
- Description courte de chaque étape
- Section "Expériences professionnelles" (stages, alternance, jobs)

---

## 🛠️ Section "Compétences" — À enrichir

Tu as un tableau de compétences avec des barres de progression, c'est bien. Quelques pistes pour l'améliorer :

- Ajouter des **icônes/logos** pour chaque technologie (PHP, React, Docker, etc.)
- Ajouter une courte description de ce que tu sais faire concrètement avec chaque outil
- Séparer plus clairement les compétences **techniques** (langages, frameworks) des compétences **professionnelles** (gestion de projet, travail en équipe, méthode Agile)

---

## 💼 Page "Projet/Stage" — À enrichir

Tu listes 3 projets scolaires, c'est un bon début. Voici ce qui manque :

- **Captures d'écran ou visuels** pour chaque projet (actuellement aucune image)
- **Liens vers le code source** (GitHub) ou une démo en ligne
- **Description plus détaillée** : contexte, problème résolu, technologies choisies et pourquoi
- Un **système de filtrage par technologie** pour faciliter la lecture quand les projets seront plus nombreux
- Des **pages de détail** dédiées à chaque projet (comme Denys le fait avec ses sous-pages `/projects/...`)

---

## 🖥️ Page "Réalisation" — À compléter

La page existe mais elle est quasiment vide visuellement (un seul projet "Portfolio personnel" affiché en très petit). C'est une page clé pour le BTS SIO — elle devrait contenir l'ensemble de tes travaux avec plus de détails.

---

## 📄 Tableau de synthèse (Épreuve E5) — À intégrer

Ton tableau de compétences existe mais il n'y a pas de **PDF de synthèse téléchargeable** intégré dans la page (type tableau de synthèse E4/E5 BTS SIO). C'est un élément important pour les jurys. Tu pourrais l'embarquer en PDF viewer ou ajouter un bouton de téléchargement.

---

## 🔍 Section "Veille Informatique" — À créer

Complètement absente. La veille technologique est une **compétence évaluée en BTS SIO**. Créer une section ou une page dédiée avec :

- Le sujet de ta veille
- Les sources et outils utilisés
- Les articles ou synthèses rédigées
- Les thèmes abordés (sécurité, IA, frameworks, etc.)

---

## 📬 Page "Contact" — À améliorer

Le formulaire est là (nom, email, message) et les liens directs sont bien présents. Points à améliorer :

- Ajouter un champ **Sujet** et un champ **Téléphone** pour plus de contexte
- Ajouter un **compteur de caractères** sur le champ message
- Ajouter un lien **LinkedIn** en plus de GitHub (important pour les recruteurs)
- Vérifier que le formulaire **envoie vraiment** les messages (backend ou service type EmailJS/Formspree)

---

## 🦶 Footer — À créer

Ton portfolio n'a pas de footer. Un footer simple mais complet apporterait du professionnalisme :

- Copyright
- Liens de navigation rapide
- Liens réseaux sociaux
- Mentions légales (obligatoires si le site est public)

---

## ⚡ Améliorations générales

- **SEO** : Ajouter des balises `<meta>` (description, og:image, og:title) pour un meilleur référencement et un bel aperçu sur les réseaux
- **Favicon** : Vérifier que la favicon est bien personnalisée (pas celle par défaut de Vite)
- **Animations** : Les transitions entre sections sont absentes — de légères animations au scroll rendraient la navigation plus fluide
- **Responsive** : Tester et optimiser l'affichage sur mobile, notamment les pages Réalisation et Tableau de compétences
- **Accessibilité** : Vérifier les contrastes de texte sur fond sombre et les attributs `alt` des images