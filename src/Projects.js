module.exports = [
  {
    titre: 'Elite Down',

    resume :'Jeu de tir FPS',

    origine: 'Inspiré du jeu Shootmania Storm, je voulais un renouveau du jeu. J\'ai donc crée un gameplay similaire à celui-ci sur Unreal Engine 4. Au fil du temps, le but du jeu est totalement différent.',

    description: 'Elite Down est un jeu de tir à la première personne. Le but du jeu est de finir tout les niveaux, le plus rapidement possible. Chaque niveau est un parcours d\'obstacle. Si une erreur est comise, il doit refaire tout le niveau',

    evolution: 'D\'abord voulant créer un jeu de tir en blueprint, je n\'ai pas réussi à implémenter le muttijoueur. J\'ai donc tout reprogrammé en C++ mais le multijoueur est vraiment compliqué à mettre en place. Je suis donc parti sur un jeu solo de plateforme, je suis en pleine création des niveaux. ',

    outils: 'Unreal Engine, Blender, C++',

    liens:[
      {
        label : "Jouer à l'alpha",
        data: "http://www.mediafire.com/file/lpeb3wk1bpcye9d/Elite_Down_0.2.0.zip/file"
      },
      {
        label : "Ressources du jeu",
        data: "http://www.mediafire.com/file/h41g1hj6xziowjr/ressources.zip/file"
      }
    ],

    images:[
      "url(assets/images/scenes/ecranmenu.jpg)",
      "url(assets/images/scenes/hudjeu.jpg)",
      "url(assets/images/scenes/mapscene.jpg)"
    ],
    videos:[
      "https://www.youtube.com/embed/KHlF_Jdogk8"
    ]
  },
  {
    titre: 'Fallen Forest',

    resume :'Film d\'animation en 3D',

    origine: 'Dans le cadre de notre DUT MMI, nous devons réaliser un "projet tutoré". Il s\'agit d\'un projet en groupe que l\'on doit réaliser durant notre formation. Nous avons donc crée un groupe de 6 personnes qui a pour nom Ora et pour projet un film d\'animation 3D',

    description: 'À travers les âges, une étrange entité protège sa forêt contre différentes menaces. Après avoir traversé plusieurs péripéties, elle se retrouve finalement confrontée aux actions destructrices de l\'Homme',

    evolution: 'Au départ, nous voulions animer un personnage suivant un scénario. Nous avons crée beaucoup de modèles 3D mais très long à rendre. Plus concrètement, un rendu du film durant 3 secondes étaient 8 heures de chargement dans la vie réelle. Ce temps d\'attente explique pourquoi le film est si pauvre en contenu. Cependant, l\'ambiance désiré est omniprésente.',

    outils: 'Blender, FL Studio',

    liens:[
      {
        label : "Scénario",
        data: "assets/files/Scenario.pdf"
      },
      {
        label : "Site Web Ora",
        data: "http://ora-animation.fr/"
      }
    ],
    images:[
      "url(assets/images/scenes/perso.jpg)",
      "url(assets/images/scenes/Scene.jpg)",
      "url(assets/images/scenes/Lumières.jpg)",
      "url(assets/images/scenes/objet.jpg)"
    ],
    videos:[
      "https://www.youtube.com/embed/X7r-kcvwcjI"
    ]
  },
  {
    titre: 'A Tout Gamer',

    resume :'Site web interactif',

    origine: 'Un centre de réalité virtuelle m\'a contacté pour réaliser leur site web. J\'avais comme mission principale de réaliser un module de réservation. L\'objectif de ce site était de pouvoir réserver ses parties dessus et montrer le salon dans son ensemble.',

    description: 'Le site contient en détail une base de données de jeu modifiable,une interface pour créer des événements disponible sur le site, un module de réservation et de payement codé en Ajax et PHP',

    evolution: "J'ai fait une première version en PHP avec l'aide de Wordpress. J'ai tout refait, une deuxième fois, en optimisant mon PHP. Le site était opérationnel. Notamment, le service de payement. qui prenait en charge Secure 3D.",

    outils: 'WordPress, PHP, HTML/CSS, Ajax.',

    liens:[
      {
        label : "Aller sur le site",
        data: "https://atoutgamer.fr/"
      }
    ],
    images:[
      "url(assets/images/scenes/ecranaccueil.png)",
      "url(assets/images/scenes/game.jpg.png)",
      "url(assets/images/scenes/horaires.png)",
      "url(assets/images/scenes/reserv.png)"
    ],
    videos:[
    ]
  },
  {
    titre: 'Azure Groups',

    resume :'Application Web dynamique',

    origine: "L'outil sert à faciliter le processus de création d'un utilisateur. En effet, il délègue le processus d'inscription du service informatique au service du gestion des plateformes de l'entreprise.",

    description: 'Azure Groups est une application web qui permet de controler des utilisateurs et membres de groupes provenant de Azure AD ( base de données pour utilisateurs d\'une entreprise)',

    evolution: "Le développement s'est fait en React pour la création d'une interface dynamique et avec Microsoft Graph pour controler la base de données d'Azure AD. L'application est opérationelle est utilsable dans le service",

    outils: 'React, Microsoft Graph',

    liens:[
    ],
    images:[
      "url(assets/images/scenes/connexion.png)",
      "url(assets/images/scenes/invitation.png)",
      "url(assets/images/scenes/groupes.png)"
    ],
    videos:[
    ]
  }

];
