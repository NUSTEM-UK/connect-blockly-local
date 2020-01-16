/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Arduino functions.
 *     The Arduino built in functions syntax can be found at:
 *     https://arduino.cc/en/Reference/HomePage
 */
'use strict';
goog.provide('Blockly.KniwwelinoProcedures');

goog.require('Blockly.Blocks');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.procedures.HUE = "#eb6500";//"#eb6500"; "#ee4035"

Blockly.Blocks['arduino_functions_setup'] = {
  /**
   * Block for defining the Arduino setup() and loop() functions.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("./img/kn02.png", 84, 24, "*"))
        .appendField(Blockly.Msg.ARD_FUN_RUN_SETUP);
    this.appendStatementInput('SETUP_FUNC');
    this.setInputsInline(false);
	this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setColour("#ee4035");
    this.setTooltip(Blockly.Msg.ARD_FUN_RUN_TIP);
    this.setHelpUrl('https://arduino.cc/en/Reference/Loop');
    this.contextMenu = false;
  },
  /** @return {!boolean} True if the block instance is in the workspace. */
  getArduinoSetupInstance: function() {
    return true;
  }
};

Blockly.Blocks['arduino_functions_loop'] = {
  /**
   * Block for defining the Arduino setup() and loop() functions.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("./img/kn02.png", 84, 24, "*"))
        .appendField(Blockly.Msg.ARD_FUN_RUN_LOOP);
    this.appendStatementInput('LOOP_FUNC');
  	this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setInputsInline(false);
    this.setColour("#ee4035");
    this.setTooltip(Blockly.Msg.ARD_FUN_RUN_TIP);
    this.setHelpUrl('https://arduino.cc/en/Reference/Loop');
    this.contextMenu = false;
  },
  /** @return {!boolean} True if the block instance is in the workspace. */
  getArduinoLoopsInstance: function() {
    return true;
  }
};


Blockly.KniwwelinoProcedures.setupBlockDisabled = function(workspace) {

    // If this parent block present already in the workspace show as disabled
    var workspaceTopBlocks = workspace.getTopBlocks();
    for (var i = 0; i < workspaceTopBlocks.length; i++) {
      if (workspaceTopBlocks[i].getArduinoSetupInstance &&
          workspaceTopBlocks[i].getArduinoSetupInstance()) {
        return true;
      }
    }
    return false;
};

Blockly.KniwwelinoProcedures.loopBlockDisabled = function(workspace) {

    // If this parent block present already in the workspace show as disabled
    var workspaceTopBlocks = workspace.getTopBlocks();
    for (var i = 0; i < workspaceTopBlocks.length; i++) {
      if (workspaceTopBlocks[i].getArduinoLoopsInstance &&
          workspaceTopBlocks[i].getArduinoLoopsInstance()) {
        return true;
      }
    }
    return false;
};
