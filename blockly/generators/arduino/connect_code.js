/**
 * @license FIXME:
 * 
 */

 /**
  * @fileoverview Code generator for conNecT Library.
  * conNecT library docs: FIXME:
  */

'use strict';

goog.provide('Blockly.Arduino.connect');

goog.require('Blockly.Arduino');

Blockly.Arduino['connect_test_block'] = function(block) {
    kniwwelinoBaseCode();
    // Inject include block
    Blockly.Arduino.addInclude('servoease', '#include <ServoEasing.h>');
    Blockly.Arduino.addDeclaration('connect_test_declare', 'Servo servo1;');

    var setupCode = 'This is setup code();\n';
    Blockly.Arduino.addSetup('setup', setupCode, true);

    var code = 'Kniwwelino.getMAC();\n';
    return code;
};