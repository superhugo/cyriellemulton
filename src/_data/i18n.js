// Libellés des blocs communs (en-tête, pied de page, bloc « cabinet »).
// Le texte propre à chaque page reste dans la page.
// Les chaînes sont du HTML : entités (&nbsp;) et balises sont permises.
export default {
  fr: {
    locale: "fr_FR",
    nav: {
      label: "Navigation principale",
      accueil: "Accueil",
      kine: "Kinésithérapie",
      yoga: "Yoga",
    },
    rdv: "Prendre rendez-vous",
    reserver: "Réserver sur Doctolib",
    pied: {
      metier: "Kinésithérapeute · Professeure de yoga",
      langue: "Langue",
    },
    cabinet: {
      titre: "Le cabinet",
      adresse: "Adresse",
      venir: "Venir au cabinet",
      acces: [
        "<strong>Métro</strong> — ligne&nbsp;5, station Hoche (2&nbsp;min à pied)",
        "<strong>RER</strong> — ligne&nbsp;E, gare de Pantin (12&nbsp;min à pied)",
        "<strong>Bus</strong> — lignes 170 et 249, arrêt Hoche",
        "<strong>Vélo</strong> — station Vélib' et arceaux devant le cabinet",
      ],
      horairesTitre: "Horaires",
      horaires: [
        "<strong>Lundi</strong> — 9h à 18h",
        "<strong>Mardi</strong> — 9h à 12h",
        "<strong>Vendredi</strong> — 9h à 17h",
      ],
      carteTitre: "Plan d'accès au cabinet, 44 avenue Jean Lolive à Pantin",
      carteNote: "Accessible en poussette et PMR",
    },
    llms: {
      pages: "Pages",
      horaires: "Horaires de kinésithérapie",
      contact: "E-mail",
      autreLangue: "English version",
    },
  },

  en: {
    locale: "en_GB",
    nav: {
      label: "Main navigation",
      accueil: "Home",
      kine: "Physiotherapy",
      yoga: "Yoga",
    },
    rdv: "Book an appointment",
    reserver: "Book on Doctolib",
    pied: {
      metier: "Physiotherapist · Yoga teacher",
      langue: "Language",
    },
    cabinet: {
      titre: "The practice",
      adresse: "Address",
      venir: "Getting here",
      acces: [
        "<strong>Metro</strong> — line&nbsp;5, Hoche station (2&nbsp;min walk)",
        "<strong>RER</strong> — line&nbsp;E, Pantin station (12&nbsp;min walk)",
        "<strong>Bus</strong> — routes 170 and 249, Hoche stop",
        "<strong>Bike</strong> — Vélib' station and bike racks outside the practice",
      ],
      horairesTitre: "Opening hours",
      horaires: [
        "<strong>Monday</strong> — 9&nbsp;am to 6&nbsp;pm",
        "<strong>Tuesday</strong> — 9&nbsp;am to 12&nbsp;pm",
        "<strong>Friday</strong> — 9&nbsp;am to 5&nbsp;pm",
      ],
      carteTitre: "Map showing the practice at 44 avenue Jean Lolive, Pantin",
      carteNote: "Accessible to pushchairs and people with reduced mobility",
    },
    llms: {
      pages: "Pages",
      horaires: "Physiotherapy opening hours",
      contact: "Email",
      autreLangue: "Version française",
    },
  },
};
