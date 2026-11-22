# cyriellemulton.fr

Site vitrine de Cyrielle Multon, kinésithérapeute et professeure de yoga à Pantin. Trois pages (accueil, kiné, yoga), en français à la racine et en anglais sous `/en/`. Généré avec Eleventy 3, publié sur GitHub Pages.

## Commandes

- `npm run dev` : serveur local avec rechargement, port 4173.
- `npm run build` : génère le site dans `_site/` (jamais commité).

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Texte d'une page | `src/index.njk`, `src/kine/index.njk`, `src/yoga/index.njk`, et leur jumelle sous `src/en/` |
| Titre, description, couleur de thème d'une page | front matter de la page |
| Menu, pied de page, libellés des boutons communs | `src/_data/i18n.js` |
| Adresse, accès, horaires du cabinet | `src/_data/i18n.js` (`cabinet`) et `src/_data/site.js` |
| Lien Doctolib, e-mail, domaine | `src/_data/site.js` |
| `<head>`, en-tête, pied, bloc cabinet | `src/_includes/` |
| `llms.txt` (résumé du site pour les assistants IA) | `src/_includes/llms.njk`, généré depuis le front matter des pages, `site.js` et `i18n.js` |
| Styles | `src/css/tokens.css` (valeurs), `src/css/site.css` (règles) |

## Règles

- **Deux langues, toujours.** Toute modification de contenu se fait en français et en anglais. Les pages anglaises gardent les mêmes slugs (`/en/kine/`), les mêmes sections et les mêmes `id` que les françaises. Le filtre `versLangue` (dans `eleventy.config.js`) repose sur cette symétrie pour le sélecteur de langue, les `hreflang` et le sitemap.
- **Liens internes absolus** depuis la racine : `/kine/`, `/images/…`, `/css/…`. Pas de `../`.
- **Doctolib et e-mail** : écrire `{{ site.doctolib }}` et `mailto:{{ site.email }}`, jamais l'adresse en dur.
- **Bloc cabinet** : `{% include "cabinet.njk" %}`. La page yoga masque les horaires et change le bouton via `cabinet: { horaires: false, bouton: reserver }` dans son front matter.
- **CSS** : aucune valeur en dur dans `site.css`, tout vient des variables de `tokens.css`. Les thèmes kiné et yoga ne font que réaffecter des variables sous `body.page-kine` et `body.page-yoga` (`bodyClass` dans le front matter).
- **Images** : WebP en deux largeurs (1000 et 2000 px, 800 et 1600 pour le portrait) dans `src/images/`. Chaque `<img>` porte `srcset`, `sizes`, `width`, `height`, et `loading="lazy"` sauf l'image du haut de page.
- **Pas de JavaScript.** Les FAQ utilisent `<details>`.
- **Chaînes HTML** : le front matter et `i18n.js` contiennent du HTML déjà échappé (`&amp;`, `&nbsp;`), inséré avec `| safe`.
- **Nouvelle page** : un `.njk` avec `layout: base.njk`, plus sa jumelle sous `src/en/`. Elle entre seule dans `sitemap.xml` ; ajouter le lien de menu dans `src/_includes/entete.njk`.
- `archive/` (anciennes maquettes) est hors build et hors git.

## Publication

Un push sur `main` lance `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages (source « GitHub Actions », domaine `cyriellemulton.fr`).

## Commits

En français, une phrase sans point final, préfixée par la zone quand elle s'applique (« Kiné : », « Yoga : », « Accueil : »). Détails éventuels en liste à tirets dans le corps.
