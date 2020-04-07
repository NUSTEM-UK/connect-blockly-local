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
goog.require('Blockly.Arduino.kniwwelino');


Blockly.Arduino['connect_test_block'] = function(block) {
    /**
     * TEST / DEMO code block. FIXME: remove.
     */
    kniwwelinoBaseCode();
    // Inject include block
    Blockly.Arduino.addInclude('servoease', '#include <ServoEasing.h>');
    Blockly.Arduino.addDeclaration('connect_test_declare', 'Servo servo1;');

    var setupCode = 'This is setup code();\n';
    Blockly.Arduino.addSetup('setup', setupCode, true);

    var code = 'Kniwwelino.getMAC();\n';
    return code;
};

/**
   * Connect smooth servo movement.
   * Based on default servo block
   * Arduino code: #include <Servo.h>
   *               Servo easeServoX;
   *               setup { easeServoX.attach(X) }
   *               loop  { easeServoX.startEaseTo(Y, Z, true)  }
   * @param {!Blockly.Block} block Block to generate the code from.
   * @return {string} Completed code.
   */
Blockly.Arduino['connect_smooth_servo_block'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.Arduino.valueToCode(
    block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var easeServoName = 'easeServo' + pinKey;
  var sweepRate = Blockly.Arduino.valueToCode(
    block, 'SWEEP_RATE', Blockly.Arduino.ORDER_ATOMIC) || '30';

  Blockly.Arduino.reservePin(
    block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
  
  Blockly.Arduino.addInclude('servoEasing', '#include <ServoEasing.h>');
  Blockly.Arduino.addDeclaration('servoEasing_' + pinKey, 'ServoEasing ' + easeServoName + ';');

  var setupCode = easeServoName + '.attach(' + pinKey + ');';
  Blockly.Arduino.addSetup('servoEasing_' + pinKey, setupCode, true);

  var code = easeServoName + '.startEaseTo(' + servoAngle + ', ' + sweepRate + ', true );\n';
  // code += '// sweep time = ' + sweepRate + '\n';
  code += '// Servo will move on background thread, code execution continues. \n';

  return code;
}

/**
   * Connect wait for servo movement to complete.
   * Arduino code: loop  { easeServoX.isMovingAndCallYield() dummy loop }
   * @param {!Blockly.Block} block Block to generate the code from.
   * @return {string} Completed code.
   */
Blockly.Arduino['connect_wait_for_servo_move'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var easeServoName = 'easeServo' + pinKey;

  var code = 'while (' + easeServoName + '.isMovingAndCallYield()) {\n';
  code += '  // Dummy loop, just waiting and yielding\n}\n';
  // var code = '// This is placed by wait block\n';

  return code;
}

