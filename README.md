# Portfolio

Portfolio Nuxt de Clément Prévost, développé avec Vue, Nuxt et Sass.

## Développement local

Installer les dépendances puis lancer le serveur :

```bash
yarn install
yarn dev
```

Le site est disponible sur `http://localhost:3000`.

## Formulaire de contact

L’envoi du formulaire passe par `POST /api/contact` et Resend. Copier `.env.example` vers `.env`, puis renseigner :

- `NUXT_RESEND_API_KEY` : clé API Resend, conservée côté serveur.
- `NUXT_CONTACT_FROM_EMAIL` : adresse expéditrice vérifiée dans Resend.
- `NUXT_CONTACT_TO_EMAIL` : adresse de réception.

Ne pas committer le fichier `.env`. L’API de contact nécessite un déploiement Nuxt avec runtime serveur ; elle ne fonctionnera pas avec une génération statique seule.

## Build et aperçu

```bash
yarn build
yarn preview
```
