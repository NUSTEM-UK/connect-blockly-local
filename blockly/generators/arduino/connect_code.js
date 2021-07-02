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
// goog.require('Blockly.Arduino.procedures');


function connectBaseCode() {
	Blockly.Arduino.addInclude('connect', '#include <Connect.h>');
	Blockly.Arduino.addSetup('connectBegin', '//Initialise as a Connect device\n  connectSetup();\n', true);

	// Adding something to the loop() is not possible right now.
	// following added to the Blockly.Arduino.finish function in generators/arduino.js
	// code = code + '\nconnectLoop(); // do Connect things...';
}


Blockly.Arduino['connect_test_block'] = function(block) {
    /**
     * TEST / DEMO code block. FIXME: remove.
     */
    connectBaseCode();
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

/**
 * Connect root block
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['connect_connected_device'] = function(block) {
  // Edited version of arduino_functions_setup
  function statementToCodeNoTab(block, name) {
    var targetBlock = block.getInputTargetBlock(name);
    var code = Blockly.Arduino.blockToCode(targetBlock);
    if (!goog.isString(code)) {
      throw 'Expecting code from statement block "' + targetBlock.type + '".';
    }
    return code;
  }

  var setupBranch = Blockly.Arduino.statementToCode(block, 'SETUP_FUNC');
  if (setupBranch) {
    Blockly.Arduino.addSetup('userSetupCode', setupBranch, true);
  }

  // Additions from arduino_functions_loop
  var loopBranch = statementToCodeNoTab(block, 'LOOP_FUNC');
  if (loopBranch) {
    Blockly.Arduino.addLoop('userLoopCode', loopBranch, true);
  }
  connectBaseCode(); // Add standard Kniwwelino init and background process handling
  // FIXME: That doesn't add the SKETCH_NAME to the init, not clear why
  return loopBranch;
}

/**
 * Connect doHappy() block
 * @param (!Blockly.Block) block Block to generate the code from.
 * @return (null) There is no code added to loop.
 */
// Duplicated from procedures_defreturn
Blockly.Arduino['connect_mood_happy'] = function(block) {
  var funcName = Blockly.Arduino.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Arduino.statementToCode(block, 'STACK');
  if (Blockly.Arduino.STATEMENT_PREFIX) {
    branch = Blockly.Arduino.prefixLines(
        Blockly.Arduino.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Arduino.INDENT) + branch;
  }
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN',
      Blockly.Arduino.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }

  // Get arguments with type
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] =
        Blockly.Arduino.getArduinoType_(block.getArgType(block.arguments_[x])) +
        ' ' +
        Blockly.Arduino.variableDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
  }

  // Get return type
  var returnType = Blockly.Types.NULL;
  if (block.getReturnType) {
    returnType = block.getReturnType();
  }
  returnType = Blockly.Arduino.getArduinoType_(returnType);

  // Construct code
  var code = returnType + ' '
             + funcName + '(' + args.join(', ')
             + ') {\n'
             + branch + returnValue + '}';
  code = Blockly.Arduino.scrub_(block, code);
  Blockly.Arduino.userFunctions_[funcName] = code;
  return null;
}

Blockly.Arduino['connect_mood_sad'] = Blockly.Arduino['connect_mood_happy'];
