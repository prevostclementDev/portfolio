import type { Project } from '~/types/project'

export const projects = {
  speleoClubAnnecy: {
    title: 'Spéléo Club d’Annecy',
    seoTitle: 'Spéléo Club d’Annecy | Projet web par Clément Prévost',
    seoDescription: 'Découvrez la modernisation du site du Spéléo Club d’Annecy : arborescence, direction artistique, photographie et développement web.',
    seoImage: '/images/projets/details/sca1.png',
    relatedTitle: ['Spéléo Club', 'd’Annecy'],
    previewDescription: 'Projet de développement',
    listDescription: 'Développement sur mesure, photographie, webdesign',
    relatedCategory: 'DÉVELOPPEMENT WEB · PROJET DE DÉVELOPPEMENT',
    tags: ['Développement web'],
    previewImage: '/images/projets/sca.png',
    previewImageAlt: 'Spéléo Club d’Annecy en exploration',
    galleryImages: [
      {
        src: '/images/projets/details/sca1.png',
        alt: 'Exploration avec le Spéléo Club d’Annecy'
      },
      {
        src: '/images/projets/details/sca2.png',
        alt: 'Aperçu du site du Spéléo Club d’Annecy'
      }
    ],
    link: '/projet/speleo-club-annecy',
    presentation: {
      hero: {
        label: 'PROJET · SPÉLÉO CLUB D’ANNECY',
        title: ['Spéléo Club', 'd’Annecy'],
        description: 'Un site à l’image du club et de ses aventures, pensé pour présenter ses activités, faciliter la préparation des sorties et partager la passion de la spéléologie.',
        image: '/images/projets/details/sca1.png',
        imageAlt: 'Les membres du Spéléo Club d’Annecy en exploration'
      },
      overview: {
        kicker: 'UN NOUVEAU TERRAIN DE RENCONTRE',
        title: 'Modernisation du site',
        description: 'Le site du club fait peau neuve. La nouvelle présentation donne plus de place aux sorties et à la vie associative, tout en guidant les visiteurs vers les informations dont ils ont besoin pour découvrir la spéléologie et rejoindre le club.',
        details: [
          { label: 'Client', value: 'Spéléo Club d’Annecy' },
          { label: 'Mission', value: 'Modernisation du site internet' },
          { label: 'Expertises', value: 'Développement web · Webdesign · Photographie' }
        ]
      },
      approach: {
        title: ['Le terrain comme', 'ligne directrice.'],
        description: 'De la préparation d’une sortie aux images du terrain, chaque élément du site raconte la vie du club et donne envie de partir à la découverte.',
        items: [
          {
            title: 'Arborescence',
            description: 'Un parcours clair pour retrouver rapidement les informations essentielles du club.'
          },
          {
            title: 'Organisation des sorties, facilitée',
            description: 'Les sorties et les informations pratiques trouvent leur place au cœur du site.'
          },
          {
            title: 'Image',
            description: 'Des images réalisées pendant les journées portes ouvertes pour mettre en valeur le site internet.'
          }
        ],
        deliverables: [
          'Arborescence & parcours',
          'Direction artistique',
          'Mise en ligne',
          'Maintenance'
        ]
      },
      website: {
        title: ['Une fenêtre ouverte', 'sur l’exploration.'],
        description: 'Des maquettes pensées pour faire cohabiter le récit, l’information pratique et l’envie de se rencontrer.',
        image: '/images/projets/details/sca2.png',
        imageAlt: 'Aperçu de la page d’accueil du site du Spéléo Club d’Annecy',
        buttonText: 'Voir le site',
        buttonLink: '#site-preview-image'
      }
    }
  },
  veroniquePrevost: {
    title: 'Véronique Prévost Sophrologue',
    seoTitle: 'Véronique Prévost Sophrologue | Projet photo et web',
    seoDescription: 'Découvrez le projet de photographie, webdesign et création du site vitrine de Véronique Prévost, sophrologue.',
    seoImage: '/images/projets/details/sophrologie1.png',
    relatedTitle: ['Véronique Prévost', 'Sophrologie'],
    previewDescription: 'Shooting photo',
    listDescription: 'Développement sur mesure, photographie, webdesign',
    relatedCategory: 'PHOTOGRAPHIE · SHOOTING PHOTO',
    tags: ['Photographie'],
    previewImage: '/images/projets/sophrologie.png',
    previewImageAlt: 'Projet de photographie pour Véronique Prévost Sophrologue',
    galleryImages: [
      {
        src: '/images/projets/details/sophrologie1.png',
        alt: 'Photographie pour Véronique Prévost Sophrologue'
      },
      {
        src: '/images/projets/details/sophrologie2.png',
        alt: 'Aperçu du site de Véronique Prévost Sophrologue'
      }
    ],
    link: '/projet/veronique-prevost-sophrologie',
    presentation: {
      hero: {
        label: 'PROJET · VÉRONIQUE PRÉVOST SOPHROLOGUE',
        title: ['Véronique Prévost', 'Sophrologue'],
        description: 'Un univers digital doux et accueillant pour présenter l’accompagnement de Véronique, sa pratique de la sophrologie et les différentes façons de prendre rendez-vous.',
        image: '/images/projets/details/sophrologie1.png',
        imageAlt: 'Carte de visite de Véronique Prévost, sophrologue'
      },
      overview: {
        kicker: 'UNE PRÉSENCE À SON IMAGE',
        title: 'Un espace pour se recentrer',
        description: 'De l’identité visuelle aux premiers échanges en ligne, le projet cherche à créer une présence claire et rassurante. Les informations sont organisées pour permettre aux visiteurs de découvrir la sophrologie, de comprendre l’accompagnement proposé et de contacter Véronique simplement.',
        details: [
          { label: 'Cliente', value: 'Véronique Prévost' },
          { label: 'Mission', value: 'Photographie et création du site vitrine' },
          { label: 'Expertises', value: 'Photographie · Webdesign · Développement web' }
        ]
      },
      approach: {
        title: ['Une approche', 'tout en douceur.'],
        description: 'Une identité lumineuse, des mots accessibles et des images chaleureuses accompagnent le visiteur sans surcharger son expérience.',
        items: [
          {
            title: 'Une identité apaisante',
            description: 'Des couleurs douces et des formes organiques évoquent le calme et la respiration.'
          },
          {
            title: 'Une pratique expliquée simplement',
            description: 'Les contenus présentent la sophrologie et les séances avec clarté, sans jargon.'
          },
          {
            title: 'Une rencontre facilitée',
            description: 'Les informations pratiques et les moyens de contact restent faciles à retrouver.'
          }
        ],
        deliverables: [
          'Photographie',
          'Identité visuelle',
          'Site vitrine',
          'Prise de contact'
        ]
      },
      website: {
        title: ['Revenir à soi', 'à son rythme.'],
        description: 'Une expérience simple et chaleureuse pour découvrir la sophrologie et faire le premier pas vers un accompagnement.',
        image: '/images/projets/details/sophrologie2.png',
        imageAlt: 'Aperçu du site web de Véronique Prévost Sophrologue',
        buttonText: 'Voir le site',
        buttonLink: '#site-preview-image'
      }
    }
  }
} satisfies Record<'speleoClubAnnecy' | 'veroniquePrevost', Project>
