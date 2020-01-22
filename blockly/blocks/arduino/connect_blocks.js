/**
* @license Copyright (c) 2020 Northumbria University, Newcastle, UK.
conNecT is license under FIXME:
*
*/

/** 
 * @fileoverview Blocks for the conNecT library
 * conNecT library docs: FIXME:
 */
'use strict';

goog.provide('Blockly.Blocks.connect_conNecT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV huge for all blocks in this category. */
Blockly.Blocks.connect_conNecT.HUE = "#de6739";

//=== conNecT test functions ===========================================

Blockly.Blocks['connect_test_block'] = {
    /**
     * Block to test that I understand where all the moving parts go.
     */
    init: function() {
      this.appendDummyInput()
          .appendField("cabbages");
      this.appendValueInput("RED")
          .setCheck(null)
          .appendField("then")
          .appendField(new Blockly.FieldTextInput("default"), "NAME")
          .appendField(new Blockly.FieldAngle(90), "NAME")
          .appendField(new Blockly.FieldDropdown([["red","RD"], ["green","G"], ["blue","B"]]), "colourE")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME")
          .appendField(new Blockly.FieldColour("#ff0000"), "NAME")
          .appendField(new Blockly.FieldVariable("item"), "NAME");
      this.appendStatementInput("NAME")
          .setCheck(null)
          .appendField("if");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("FIXME");
   this.setHelpUrl("FIXME");
    }
  };