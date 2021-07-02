/**
 * @license Copyright (c) 2020 Northumbria University, Newcastle, UK.
 * conNecT is licensed under FIXME:
 *
 */

/**
 * @fileoverview Blocks for the conNecT library
 * conNecT library docs: FIXME:
 * @author jonathan.sanderson@northumbria.ac.uk (Jonathan Sanderson)
 */
'use strict';

goog.provide('Blockly.Blocks.connect_conNecT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV huge for all blocks in this category. */
Blockly.Blocks.connect_conNecT.HUE = "#de6739";

//=== conNecT test functions ===========================================

Blockly.Blocks["connect_test_block"] = {
  /**
   * Block to test that I understand where all the moving parts go.
   */
  init: function() {
    this.appendDummyInput().appendField("cabbages");
    this.appendValueInput("RED")
      .setCheck(null)
      .appendField("then")
      .appendField(new Blockly.FieldTextInput("default"), "NAME")
      .appendField(new Blockly.FieldAngle(90), "NAME")
      .appendField(
        new Blockly.FieldDropdown([
          ["red", "RD"],
          ["green", "G"],
          ["blue", "B"]
        ]),
        "colourE"
      )
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

  Blockly.Blocks["connect_smooth_servo_block"] = {
    /**
     * Block implementing ServoEasing servo movement, with speed selector.
     * Based heavily on default servo_write block
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl("https://FIXME:");
      this.setColour(Blockly.Blocks.servo.HUE);
      this.appendDummyInput()
        .appendField('Ease SERVO on Pin')
        .appendField(
          new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins),
          "SERVO_PIN"
        );
      this.setInputsInline(false);
      this.appendValueInput('SERVO_ANGLE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('to angle');
      this.appendValueInput('SWEEP_RATE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('at rate');
      // this.appendDummyInput().appendField('secs');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Test tooltip");
    },
    /**
     * Updates the content of the pin-related fields
     * @this Blockly.Block
     */
    updateFields: function() {
      Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this,
        "SERVO_PIN",
        "pwmPins"
      );
    }
  };

  Blockly.Blocks["connect_servo_animation_block"] = {
    /**
     * Block implementing basic/facile animation template
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl("https://FIXME:");
      this.setColour(Blockly.Blocks.servo.HUE);
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldDropdown([
            ["flap", "flap"],
            ["wave", "wave"],
            ["bounce", "bounce"]
          ]))
        .appendField('SERVO on Pin')
        .appendField(
          new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins),
          "SERVO_PIN"
        );
      this.appendValueInput('FROM_ANGLE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('from angle: ');
      this.appendValueInput('TO_ANGLE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('to angle: ');
      this.appendValueInput('NUM_SEQUENCES')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('times: ');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("FIXME: tooltop");
    }
  }

  Blockly.Blocks["connect_servo_animation_container_block"] = {
    /**
     * Block implementing servo animation template with container
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl("https://FIXME:");
      this.setColour(Blockly.Blocks.servo.HUE);
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldDropdown([
            ["flap", "flap"],
            ["wave", "wave"],
            ["bounce", "bounce"]
          ]))
        .appendField('SERVO on Pin')
        .appendField(
          new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins),
          "SERVO_PIN"
        );
      this.appendValueInput('FROM_ANGLE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('from angle: ');
      this.appendValueInput('TO_ANGLE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('to angle: ');
      this.appendValueInput('NUM_SEQUENCES')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('times: ');
      this.appendStatementInput("NAME")
          .setCheck(null)
          .appendField("and");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("FIXME: tooltop");
    }

  }

  Blockly.Blocks["connect_wait_for_servo_move"] = {
    /**
     * Block implementing check to wait for servo moves to complete
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl("https://FIXME:");
      this.setColour(Blockly.Blocks.servo.HUE);
      this.appendDummyInput()
        .appendField('Wait for SERVO on Pin')
        .appendField(
          new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins),
          "SERVO_PIN"
        )
        .appendField('to finish moving');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("Pauses program until servo has finished movement");
    },
    updateFields: function() {
      Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, "SERVO_PIN", "pwmPins"
      );
    }
  };

  Blockly.Blocks['connect_enqueue'] = {
    /**
     * Block for queueing up commands to the dispatcher.
     * @this Blockly.Block
     * 2021-05-14 Meh, need to design this on paper before we try
     * to code it up. Should be possible with reference to math_number_property
     * in blocks/math.js.
     */
    init: function() {
      this.setColour(Blockly.Blocks.connect_conNecT.HUE);

    }
  }

  Blockly.Blocks["connect_on_mood_message"] = {
    /**
     * Block implementing core message receive logic and match specific mood
     * @this Blockly.Block
     * 2021-05-14 Not loaded in ardu_blockly_toolbox, for now
     */
    init: function() {
      this.setHelpUrl("https://FIXME:");
      this.setColour(Blockly.Blocks.loops.HUE);
      this.setTooltip("");
      this.appendDummyInput()
        .appendField("if received mood is")
        .appendField(new Blockly.FieldDropdown([["happy", "HAPPY"], ["sad", "SAD"], ["heart", "HEART"], ["skull", "SKULL"], ["duck", "DUCK"]]), "mood");
        this.appendStatementInput("DO")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("if received mood is")
        .appendField(new Blockly.FieldDropdown([["happy", "HAPPY"], ["sad", "SAD"], ["heart", "HEART"], ["skull", "SKULL"], ["duck", "DUCK"]]), "mood");
        this.appendStatementInput("DO")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
};

Blockly.Blocks["connect_connected_device"] = {
    /**
     * Block implementing setup() and loop() wrappers, as Connected device
     * root object.
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl("https://FIXME");
      this.setTooltip("Connected Object");
      this.setColour(Blockly.Blocks.connect_conNecT.HUE);
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./img/kn02.png", 84, 24, "*"))
        .appendField("Connected Device");
      this.appendDummyInput()
        .appendField("Setup() (for testing)");
        this.appendStatementInput('SETUP_FUNC');
      this.appendDummyInput()
        .appendField("Loop() (for testing)");
        this.appendStatementInput('LOOP_FUNC');
      this.appendDummyInput()
        .appendField("if received mood is")
        .appendField(new Blockly.FieldDropdown([["happy", "HAPPY"], ["sad", "SAD"], ["heart", "HEART"], ["skull", "SKULL"], ["duck", "DUCK"]]), "mood");
      this.appendStatementInput("DO")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("if received mood is")
        .appendField(new Blockly.FieldDropdown([["happy", "HAPPY"], ["sad", "SAD"], ["heart", "HEART"], ["skull", "SKULL"], ["duck", "DUCK"]]), "mood");
      this.appendStatementInput("DO")
        .setCheck(null);
      this.setInputsInline(false);
      this.setPreviousStatement(false);
      this.setNextStatement(false);
      this.contextMenu = false;
    },
      /**@return {!boolean} true of the block instance is in the workspace */
      getArduinoSetupInstance: function() {
        return true;
      },
      getArduinoLoopsInstance: function() {
        return true;
      }
}
