var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Deutsch",
  title: "Kniwwelino",
  blocks: "Blöcke",
  /* Menu */
  open: "Öffnen",
  save: "Speichern",
  deleteAll: "Alles löschen",
  settings: "Einstellungen",
  documentation: "Dokumentation",
  reportBug: "Fehler melden",
  examples: "Beispiele",
  /* Settings */
  compilerLocation: "Kompiler Location",
  compilerLocationDefault: "Kompiler Location unbekannt",
  sketchFolder: "Sketch Ordner",
  sketchFolderDefault: "Sketch Ordner unbekannt",
  arduinoBoard: "Arduino Board",
  arduinoBoardDefault: "Arduino Board unbekannt",
  comPort: "COM Port",
  comPortDefault: "COM Port unbekannt",
  defaultIdeButton: "Standard IDE Knopf",
  defaultIdeButtonDefault: "IDE Option unbekannt",
  language: "Sprache",
  languageDefault: "Sprache unbekannt",
  sketchName: "Sketch Name",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE Ausgabe",
  arduinoOpWaiting: "Warte auf Arduino IDE Ausgabe...",
  arduinoOpUploadedTitle: "Sketch erfolgreich hochgeladen",
  arduinoOpVerifiedTitle: "Sketch erfolgreich verifiziert",
  arduinoOpOpenedTitle: "Sketch wurde in Arduino IDE geöffnet",
  arduinoOpOpenedBody: "Der Sketch sollte in der Arduino IDE geladen sein.",
  arduinoOpErrorTitle: "Es ist ein Fehler aufgetreten",
  arduinoOpErrorIdContext_0: "Kein Fehler.",
  arduinoOpErrorIdContext_1: "Kompilieren oder Hochladen ist fehlgeschlagen.",
  arduinoOpErrorIdContext_2: "Sketch nicht gefunden.",
  arduinoOpErrorIdContext_3: "Ungültiges Befehlszeilenargument.",
  arduinoOpErrorIdContext_4: "Einstellung, die an das Flag 'get-pref' übergeben wurde, existiert nicht.",
  arduinoOpErrorIdContext_5: "Nicht klar, aber Arduino IDE meldet manchmal diesen Fehler.",
  arduinoOpErrorIdContext_50: "Unerwarteter Fehler von Arduino IDE",
  arduinoOpErrorIdContext_51: "Sketch-Datei konnte nicht erstellt werden",
  arduinoOpErrorIdContext_52: "Ungültiger Pfad zur intern erstellten Sketch-Datei",
  arduinoOpErrorIdContext_53: "Unable to find Arduino IDE<br>" +
                              "The compiler directory has not been set correctly.<br>" +
                              "Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "Was sollen wir mit der Sketch machen?<br>" +
                              "Die IDE-Startoption wurde nicht festgelegt.<br>" +
                              "Bitte wählen Sie eine IDE-Option in den Einstellungen.",
  arduinoOpErrorIdContext_55: "Serielle Schnittstelle nicht verfügbar<br>" +
                              "Die Serielle Schnittstelle ist nicht verfügbar.<br>" +
                              "Bitte überprüfen Sie, ob das Kniwwelino korrekt an den PC angeschlossen ist, und wählen Sie in den Einstellungen den seriellen Anschluss aus.",
  arduinoOpErrorIdContext_56: "Unbekanntes Arduino Board<br>" +
                              "Es wurde noch kein Kniwwelino Board eingestellt.<br>" +
                              "Bitte wähle das Kniwwelino Board in den Einstellungen.",
  arduinoOpErrorIdContext_52: "Unerwarteter Server-Fehler.",
  arduinoOpErrorIdContext_64: "Unable to parse sent JSON.",
  arduinoOpErrorUnknown: "Unerwarteter Fehler",
  /* Modals */
  noServerTitle: "Kniwwelino-Blockly ist nicht gestartet.",
  noServerTitleBody: "<p>Damit alle Kniwwelino-Blockly Funktionen aktiviert sind, muss die Kniwwelino-Blockly Computer Anwendung auf deinem Computer gestartet sein.</p>" +
                     "<p>Wenn Du eine Online-Version verwendst, kannst Du die Einstellungen nicht konfigurieren und den Blockcode nicht in einen Kniwwelino laden.</p>" +
                     "<p>Eine Installationsanleitung findest Du im <a href=\"http://doku.kniwwelino.lu/de/installation\">Kniwwelino Documentation Wiki</a>.</p>" +
                     "<p>Wenn Kniwwelino-Blockly bereits installiert ist, stelle sicher, dass die Anwendung ordnungsgemäß gestartet wird.</p>",
  noServerNoLangBody: "Wenn die Kniwwelino-Blockly Anwendung nicht gestartet ist, kann die Sprache nicht vollständig geändert werden.",
  addBlocksTitle: "Zusätzliche Blöcke",
  /* Alerts */
  loadNewBlocksTitle: "Neue Blöcke laden?",
  loadNewBlocksBody: "Beim Laden einer neuen XML-Datei werden die aktuellen Blöcke aus dem Arbeitsbereich entfernt.<br>" +
                     "Sind Sie sicher, dass Sie fortfahren möchten?",
  discardBlocksTitle: "Blöcke löschen?",
  discardBlocksBody: "Es gibt %1 Blöcke auf dem Arbeitsbereich.<br>" +
                     "Sind Sie sicher, dass Sie sie löschen möchten?",
  invalidXmlTitle: "Fehlerhaftes XML",
  invalidXmlBody: "Die XML-Datei wurde nicht erfolgreich in Blöcke umgewandelt. Bitte überprüfen Sie den XML-Code und versuchen Sie es erneut.",
  /* Tooltips */
  uploadingSketch: "Code wird auf Kniwwelino übertragen...",
  uploadSketch: "Code auf Kniwwelino übertragen",
  verifyingSketch: "Sketch überprüfen...",
  verifySketch: "Überprüfe dem Sketch",
  openingSketch: "Öffne Code in Arduino IDE...",
  openSketch: "Code in Arduino IDE öffnen",
  notImplemented: "Funktion noch nicht Verfügbar",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  cancel: "Abbrechen",
  return: "Zurück",
  /* Cards */
  seeArduinoSourceCode: "Quellcode",
  arduinoSourceCode: "Arduino Quellcode",
  blocksXml: "Blöcke als XML",
  /* Toolbox Categories*/
  catLogic: "Logik",
  catLoops: "Schleifen",
  catMath: "Mathematik",
  catText: "Text",
  catVariables: "Variablen",
  catFunctions: "Funktionen",
  catInputOutput: "Ein-/Ausgänge",
  catTime: "Zeit",
  catAudio: "Ton",
  catMotors: "Motoren",
  catComms: "Comms",
  catMQTT: "Nachrichten",
  catButtons: "Knöpfe",
  catSensors: "Sensoren",
};
