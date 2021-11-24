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
    // Blockly.Arduino.addInclude('servoease', '#include <ServoEasing.h>');
    Blockly.Arduino.addDeclaration('connect_test_declare', 'Servo servo1;');

    var setupCode = 'This is setup code();\n';
    Blockly.Arduino.addSetup('setup', setupCode, true);

    var code = 'Kniwwelino.getMAC();\n';
    return code;
};

/**
   * Connect quick servo movement
   * Based on default servo block
   * @param {!Blockly.Block} block Block to generate the code from
   * @return {string} Completed code
  */
Blockly.Arduino['connect_servo_block'] = function(block) {
  // Servo movement
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoName = 'servo' + pinKey;
  var code = servoName + '.write(' + block.getFieldValue('SERVO_ANGLE') + ');\n';
  return code;
}

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
  var easeServoName = 'servo' + pinKey;
  var sweepRate = Blockly.Arduino.valueToCode(
    block, 'SWEEP_RATE', Blockly.Arduino.ORDER_ATOMIC) || '30';

  Blockly.Arduino.reservePin(
    block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  // Blockly.Arduino.addInclude('servoEasing', '#include <ServoEasing.h>');
  Blockly.Arduino.addDeclaration('ConnectServo_' + pinKey, 'ServoEasing ' + easeServoName + ';');
  Blockly.Arduino.addDeclaration('ConnectServoPin_' + pinKey, 'static const uint8_t ' + easeServoName + 'Pin = ' + pinKey + ';');

  var setupCode = easeServoName + '.setPin(' + pinKey + ');';
  Blockly.Arduino.addSetup('servoEasing_' + pinKey, setupCode, true);

  var code = easeServoName + '.queueEaseTo(' + servoAngle + ', ' + sweepRate + ', true );\n';
  // code += '// sweep time = ' + sweepRate + '\n';
  // code += '// Servo will move on background thread, code execution continues. \n';

  return code;
}

/**
 * ConnectServo queue eased movement.
 * Based on default servo block, more-or-less.
 * Arduino code: ConnectServo servoDx;
 *               static const uint8_t servoDxPin = Dx;
 *               setup { servoDx.setPin(servoDxPin) }
 *               code  { servoDx.queueEaseTo(angle, EASING, speed) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['connect_servo_queue_ease_block'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.Arduino.valueToCode(
    block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var easeServoName = 'servo' + pinKey;
  var speed = Blockly.Arduino.valueToCode(
    block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '60';
  var easingType = block.getFieldValue('EASING_TYPE');

  Blockly.Arduino.reservePin(
    block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addDeclaration('ConnectServo_' + pinKey, 'ConnectServo ' + easeServoName + ';');
  // I... don't actually need this line if I pass D5 directly to setPin()
  // Blockly.Arduino.addDeclaration('ConnectServoPin_' + pinKey, 'static const uint8_t ' + easeServoName + 'Pin = ' + pinKey + ';');

  var setupCode = easeServoName + '.setPin(' + pinKey + ');';
  Blockly.Arduino.addSetup('servoEasing_' + pinKey, setupCode, true);

  var code = easeServoName + '.queueEaseTo(' + servoAngle + ', ' + easingType + ', ' + speed + ');\n';
  return code;
}

/**
 * ConnectServo queue direct movement.
 * Based on default servo block, more-or-less.
 * Arduino code: ConnectServo servoDx;
 *               setup { servoDx.setPin(servoDxPin) }
 *               code  { servoDx.queueMoveTo(angle) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['connect_servo_queue_move_block'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.Arduino.valueToCode(
    block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var easeServoName = 'servo' + pinKey;

  Blockly.Arduino.reservePin(
    block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addDeclaration('ConnectServo_' + pinKey, 'ConnectServo ' + easeServoName + ';');

  var setupCode = easeServoName + '.setPin(' + pinKey + ');';
  Blockly.Arduino.addSetup('servoEasing_' + pinKey, setupCode, true);

  var code = easeServoName + '.queueMoveTo(' + servoAngle + ');\n';
  return code;
}

/**
 * ConnectServo queue wait (temporal)).
 * Arduino code: ConnectServo servoDx;
 *               setup { servoDx.setPin(servoDxPin) }
 *               code  { servoDx.queueWait(millis) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['connect_servo_queue_wait_for_servo_block'] = function(block) {
  var pin1Key = block.getFieldValue('SERVO1_PIN');
  var servo1name = 'servo' + pin1Key;
  var pin2Key = block.getFieldValue('SERVO2_PIN');
  var servo2name = 'servo' + pin2Key;

  Blockly.Arduino.reservePin(
    block, pin1Key, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');
  Blockly.Arduino.reservePin(
    block, pin2Key, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addDeclaration('ConnectServo_' + pin1Key, 'ConnectServo ' + servo1name + ';');
  Blockly.Arduino.addDeclaration('ConnectServo_' + pin2Key, 'ConnectServo ' + servo2name + ';');

  var setupCode = servo1name + '.setPin(' + pin1Key + ');';
  Blockly.Arduino.addSetup('servoEasing_' + pin1Key, setupCode, true);
  var setupCode2 = servo2name + '.setPin(' + pin2Key + ');';
  Blockly.Arduino.addSetup('servoEasing_' + pin2Key, setupCode2, true);

  var code = 'servoWaitForServo(' + servo1name + ', ' + servo2name + ');\n';
  return code;
}

/**
 * ConnectServo queue wait for servo.
 * Arduino code: ConnectServo servoDx;
 *               ConnectServo servoDy;
 *               setup { servoDx.setPin(servoDxPin) }
 *               setup { servoDy.setPin(servoDyPin) }
 *               code  { servoWaitForServo(servoDx, servoDy) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['connect_servo_queue_wait_block'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var waitTime = Blockly.Arduino.valueToCode(
    block, 'WAIT_TIME', Blockly.Arduino.ORDER_ATOMIC) || '500';
  var easeServoName = 'servo' + pinKey;

  Blockly.Arduino.reservePin(
    block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addDeclaration('ConnectServo_' + pinKey, 'ConnectServo ' + easeServoName + ';');

  var setupCode = easeServoName + '.setPin(' + pinKey + ');';
  Blockly.Arduino.addSetup('servoEasing_' + pinKey, setupCode, true);

  var code = easeServoName + '.queueWait(' + waitTime + ');\n';
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
  Blockly.Arduino.addDeclaration('ConnectServo_' + pinKey, 'ServoEasing ' + easeServoName + ';');
  Blockly.Arduino.addDeclaration('ConnectServoPin_' + pinKey, 'static const uint8_t ' + easeServoName + 'Pin = ' + pinKey + ';');

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
             + 'doHappy' + '(' + args.join(', ')
             + ') {\n'
             + branch + returnValue + '}';
  code = Blockly.Arduino.scrub_(block, code);
  Blockly.Arduino.userFunctions_[funcName] = code;
  return null;
}

/**
 * Connect doSad() block
 * @param (!Blockly.Block) block Block to generate the code from.
 * @return (null) There is no code added to loop.
 */
// Duplicated from procedures_defreturn
Blockly.Arduino['connect_mood_sad'] = function(block) {
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
             + 'doSad' + '(' + args.join(', ')
             + ') {\n'
             + branch + returnValue + '}';
  code = Blockly.Arduino.scrub_(block, code);
  Blockly.Arduino.userFunctions_[funcName] = code;
  return null;
}

/**
 * Connect doHeart() block
 * @param (!Blockly.Block) block Block to generate the code from.
 * @return (null) There is no code added to loop.
 */
// Duplicated from procedures_defreturn
Blockly.Arduino['connect_mood_heart'] = function(block) {
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
             + 'doHeart' + '(' + args.join(', ')
             + ') {\n'
             + branch + returnValue + '}';
  code = Blockly.Arduino.scrub_(block, code);
  Blockly.Arduino.userFunctions_[funcName] = code;
  return null;
}

/**
 * Connect doSkull() block
 * @param (!Blockly.Block) block Block to generate the code from.
 * @return (null) There is no code added to loop.
 */
// Duplicated from procedures_defreturn
Blockly.Arduino['connect_mood_skull'] = function(block) {
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
             + 'doSkull' + '(' + args.join(', ')
             + ') {\n'
             + branch + returnValue + '}';
  code = Blockly.Arduino.scrub_(block, code);
  Blockly.Arduino.userFunctions_[funcName] = code;
  return null;
}

/**
 * Connect doDuck() block
 * @param (!Blockly.Block) block Block to generate the code from.
 * @return (null) There is no code added to loop.
 */
// Duplicated from procedures_defreturn
Blockly.Arduino['connect_mood_duck'] = function(block) {
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
             + 'doDuck' + '(' + args.join(', ')
             + ') {\n'
             + branch + returnValue + '}';
  code = Blockly.Arduino.scrub_(block, code);
  Blockly.Arduino.userFunctions_[funcName] = code;
  return null;
}
