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
   *               Servo myServoX;
   *               setup { myServoX.attach(X) }
   *               loop  { myServoX.write(Y)  }
   * @param {!Blockly.Block} block Blok to generate the code from.
   * @return {string} Completed code.
   */
Blockly.Arduino['connect_smooth_servo_block'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.Arduino.valueToCode(
    block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var servoName = 'myServo' + pinKey;
  var sweepTime = Blockly.Arduino.valueToCode(
    block, 'SWEEP_TIME', Blockly.Arduino.ORDER_ATOMIC) || '2';

  Blockly.Arduino.reservePin(
    block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
  
  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.write(' + servoAngle + ');\n';
  code += '// sweep time = ' + sweepTime + '\n';
  return code;
}