var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Français",
  title: "Kniwwelino",
  blocks: "Blocs",
  /* Menu */
  open: "Ouvrir",
  save: "Enregistrer",
  deleteAll: "Tout supprimer",
  settings: "Réglages",
  documentation: "Documentation",
  reportBug: "Signaler un problème",
  examples: "Exemples",
  /* Settings */
  compilerLocation: "Emplacement du compilateur",
  compilerLocationDefault: "",
  sketchFolder: "Dossier Sketch",
  sketchFolderDefault: "Dossier Sketch inconnu",
  arduinoBoard: "Carte Arduino",
  arduinoBoardDefault: "Carte Arduino inconnu",
  comPort: "Port COM",
  comPortDefault: "Port COM inconnu",
  defaultIdeButton: "Bouton IDE par défaut",
  defaultIdeButtonDefault: "Options IDE inconnu",
  language: "Langue",
  languageDefault: "Langue inconnu",
  sketchName: "Nom du Sketch",
  /* Arduino console output */
  arduinoOpMainTitle: "Sortie Arduino IDE",
  arduinoOpWaiting: "Attente de la sortie IDE...",
  arduinoOpUploadedTitle: "Sketch transféré avec succès",
  arduinoOpVerifiedTitle: "Sketch vérifié avec succès",
  arduinoOpOpenedTitle: "Skecth ouvert dans IDE",
  arduinoOpOpenedBody: "Le Sketch doit être chargé dans Arduino IDE",
  arduinoOpErrorUpVerTitle: "Une erreur est survenue",
  arduinoOpErrorSketchTitle: "Aucune erreur.",
  arduinoOpErrorFlagTitle: "La construction ou le chargement a échoué",
  arduinoOpErrorFlagPrefTitle: "Sketch introuvable",
  arduinoOpErrorIdeDirTitle: "Argument de la ligne de commande invalide",
  arduinoOpErrorIdeDirBody: "Préférence changé pour 'get-pref' le nom n'existe pas.",
  arduinoOpErrorIdeOptionTitle: "Pas clair mais Arduino IDE rencontre des erreurs avec ça.",
  arduinoOpErrorIdeOptionBody: "Erreur de code inattendue de Arduino IDE",
  arduinoOpErrorIdePortTitle: "Le fichier Sketch n'a pu être créé",
  arduinoOpErrorIdePortBody: "Chemin d'accès local invalide pour créer le fichier Sketch",
  arduinoOpErrorIdeBoardTitle: "Impossible de trouver Arduino IDE"+
                               "Le répertoire du compilateur n'a pas été correctement établi.<br>" +
                               "Vérifier dans les paramètres que le chemin d'accès est correct.",
  arduinoOpErrorIdeBoardBody: "Que devons-nous faire avec le Sketch ?<br>" +
                              "L'option de démarrage de IDE n'a pas été établi.<br>" +
                              "Merci de choisir une option IDE dans les paramètres.",
  arduinoOpErrorIdContext_55: "Port Série indisponible<br>" +
                              "Le Port Série est inaccessible.<br>" +
                              "Vérifiez que le Kniwwelino est correctement branché à l'ordinateur et sélectionnez le Port Série dans les paramètres.",
  arduinoOpErrorIdContext_56: "Carte Arduino inconnue<br>" +
                              "La carte Kniwwelino n'as pas été configuré.<br>" +
                              "Merci de sélectionner la carte Kniwwelino approprié dans les paramètres.",
  arduinoOpErrorIdContext_52: "Erreur inatendue du serveur.",
  arduinoOpErrorIdContext_64: "Impossible d'analyser le JSON envoyé.",
  arduinoOpErrorUnknown: "Erreur inattendue",
  /* Modals */
  noServerTitle: "L'appliation Kniwwelino-Blockly n'est pas en cour d'exécution",
  noServerTitleBody: "<p>Pour que toutes les caractéristiques de Kniwwelino-Blockly soit activé, l'application bureau Kniwwelino-Blockly doit être en cours d'exécution sur votre ordinateur.</p>" +
                     "<p>Si vous utilisez une version en ligne, vous ne pourrez pas configurer les paramètres ni charger les blocs de code dans un Kniwwelino.</p>" +
                     "<p>Les instructions d'installation sont consultable sur la<a href=\"http://doku.kniwwelino.lu/en/installation\">Documentation Wiki Kniwwelino</a>.</p>" +
                     "<p>Si Kniwwelino-Blockly est déjà installé, assurez-vous que l'aplication est bien en cours d'exécution.</p>",
  noServerNoLangBody: "Si l'application Kniwwelino-Blockly n'est pas en cours d'exécution la langue ne pourra pas être corrèctement changé.",
  addBlocksTitle: "Blocs supplémentaires",
  /* Alerts */
  loadNewBlocksTitle: "Charger de nouveaux blocs ?",
  loadNewBlocksBody: "Charger un nouveau fichier XML va remplacer les blocs actuels de l'espace de travail.<br>"+
                     "Êtes-vous sur de vouloir continuer ?",
  discardBlocksTitle: "Supprimer les blocs ?",
  discardBlocksBody: "Il y a %1 blocs dans l'espace de travail."+
                     "Êtes-vous sur de vouloir les supprimer ?",
  invalidXmlTitle: "XML invalide",
  invalidXmlBody: "Le fichier XML n'a pas pu être correctement décrypté en blocs. Vérifiez le code XML et réessayez.",
  /* Tooltips */
  uploadingSketch: "Transfert du code sur le Kniwwelino...",
  uploadSketch: "Transférer le code sur le Kniwwelino",
  verifyingSketch: "Vérififcation du Sketch...",
  verifySketch: "Vérifier le Sketch",
  openingSketch: "Ouverture du code dans Arduino IDE...",
  openSketch: "Ouvrir le code dans IDE",
  notImplemented: "La fonction n'est pas encore exécuté",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  cancel: "Annuler",
  return: "Retour",
  /* Cards */
  seeArduinoSourceCode: "Code Source",
  arduinoSourceCode: "Code Source Arduino",
  blocksXml: "Blocs XML",
  /* Toolbox Categories*/
  catMatrix: "Matrice",
  catLogic: "Logique",
  catLoops: "Boucles",
  catMath: "Math",
  catText: "Texte",
  catVariables: "Variables",
  catFunctions: "Fonctions",
  catInputOutput: "Entrée/Sortie",
  catTime: "Temps",
  catAudio: "Audio",
  catMotors: "Moteurs",
  catComms: "Comms",
  catMQTT: "Messages",
  catButtons: "Boutons",
  catSensors: "Capteurs",
};
