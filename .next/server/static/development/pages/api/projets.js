module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
const projects = [{
  titre: 'Elite Down',
  link: 'elite-down',
  resume: 'Jeu de tir FPS',
  thumbnail: '../../thumbnail/elitedown.png',
  description: 'Elite Down est un jeu de tir à la première personne où le déplacement est au coeur du jeu. \
    En effet, le joueur a pour but de finir le niveau en franchissant des obstacles, en sautant de murs \
    en murs, de planer entre deux plateformes. J\'ai développé le jeu sur le moteur de jeu Unreal Engine \
    en C++.',
  images: ["../../images/mapscene.jpg", "../../images/ecranmenu.jpg", "../../images/hudjeu.jpg"],
  videos: ["https://www.youtube.com/embed/MqMxP0LhFuQ", "https://www.youtube.com/embed/KHlF_Jdogk8"],
  liens: [{
    label: "Jouer à l'alpha",
    data: "http://www.mediafire.com/file/wr80vvnkcdq3dek/EliteDown_0.3.a.zip/file"
  }, {
    label: "Ressources du jeu",
    data: "http://www.mediafire.com/file/h41g1hj6xziowjr/ressources.zip/file"
  }]
}, {
  titre: 'Fallen Forest',
  link: 'fallen-forest',
  resume: 'Film d\'animation en 3D',
  thumbnail: '../../thumbnail/fallen-forest.jpg',
  description: 'Fallen Forest est un film d\'animation en 3D. La scène se déroule dans un forêt sombre \
        et lugubre où la nature y vit paisiblement. Le projet était initialement un film d\'animation \
        suivant un scénario précis mais le rendu de chaque image prenant trop de temps, le projet n\'a \
        pas abouti.',
  images: ["../../images/thb_ora.jpg", "../../images/perso.jpg", "../../images/Scene.jpg", "../../images/Lumières.jpg", "../../images/objet.jpg"],
  videos: ["https://www.youtube.com/embed/X7r-kcvwcjI"],
  liens: [{
    label: "Scénario",
    data: " files/Scenario.pdf"
  }, {
    label: "Site Web Ora",
    data: "http://ora-animation.fr/"
  }]
}, {
  titre: 'A Tout Gamer',
  link: 'a-tout-gamer',
  resume: 'Site web interactif',
  thumbnail: '../../thumbnail/interieur-atoutgamer-2.jpg',
  description: 'A Tout Gamer 2.0 est un centre de réalité virtuelle ainsi qu\'une salle de jeux vidéo. \
        Plongez dans une réalité alternative avec leurs casques de réalité virtuelle. \
        Le site web est codé en PHP est aidé de Wordpress. Son but principal est de pouvoir réserver \
        et payer avec sa carte bancaire',
  images: ["../../images/atoutgamer-support.png", "../../images/ecranaccueil.png", "../../images/atoutgamer-mobile.png", "../../images/game.jpg.png", "../../images/horaires.png", "../../images/reserv.png"],
  videos: [],
  liens: [{
    label: "Aller sur le site",
    data: "https://atoutgamer.fr/"
  }]
}, {
  titre: 'Jérémy Capeau',
  link: 'jeremy-capeau',
  resume: 'Application Web dynamique',
  thumbnail: '../../thumbnail/parfum4.jpg',
  description: '',
  images: [],
  videos: [],
  liens: [{
    label: "Aller sur le site",
    data: "https://jeremycapeau.fr/"
  }]
}];

/***/ }),

/***/ "./pages/api/projets.js":
/*!******************************!*\
  !*** ./pages/api/projets.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ "./data.js");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  return res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__["projects"]);
});

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/api/projets.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\GitHub\portfolio\pages\api\projets.js */"./pages/api/projets.js");


/***/ })

/******/ });
//# sourceMappingURL=projets.js.map