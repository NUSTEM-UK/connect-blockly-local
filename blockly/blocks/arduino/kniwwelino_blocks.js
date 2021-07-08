/**
 * @license Copyright (C) 2017 Luxembourg Institute of Science and Technology.
 * KinwwelinoBlockly is Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for for the Kniwwelino Library.
 * Kniwwelino library docs: https://doku.kniwwelino.lu/en/reference/
 */
 'use strict';

 goog.provide('Blockly.Blocks.kniwwelino_Kniwwelino');
 goog.provide('Blockly.Blocks.kniwwelino_RGB');
 goog.provide('Blockly.Blocks.kniwwelino_MATRIX');
 goog.provide('Blockly.Blocks.kniwwelino_BUTTONS');
 goog.provide('Blockly.Blocks.kniwwelino_MQTT');
 goog.provide('Blockly.Blocks.kniwwelino_SENSOR');
 goog.provide('Blockly.Blocks.kniwwelino_AUDIO');
 goog.provide('Blockly.Blocks.kniwwelino_DISPLAY');

 goog.require('Blockly.Blocks');
 goog.require('Blockly.Types');

 /** Common HSV hue for all blocks in this category. */
 Blockly.Blocks.kniwwelino_Kniwwelino.HUE = "#ee4035";
 Blockly.Blocks.kniwwelino_RGB.HUE = "#30499b";
 Blockly.Blocks.kniwwelino_MATRIX.HUE = "#844d9e";
 Blockly.Blocks.kniwwelino_BUTTONS.HUE = "#88c542";
 Blockly.Blocks.kniwwelino_MQTT.HUE = "#f3a530";
 Blockly.Blocks.kniwwelino_SENSOR.HUE = "#4b709a";
 Blockly.Blocks.kniwwelino_AUDIO.HUE = "#a577bb";
 Blockly.Blocks.kniwwelino_DISPLAY.HUE = "#00cccc";

 //==== Kniwwelino functions===================================================

 Blockly.Blocks['kniwwelino_getID'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_GETID);
			 this.setOutput(true, Blockly.Types.TEXT.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_GETID_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		   },getBlockType: function() {
				 return Blockly.Types.TEXT;
		   }
 };

 Blockly.Blocks['kniwwelino_getName'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_GETNAME);
			 this.setOutput(true, Blockly.Types.TEXT.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_GETNAME_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		   },getBlockType: function() {
				 return Blockly.Types.TEXT;
		   }
 };

 Blockly.Blocks['kniwwelino_getIP'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_GETIP);
			 this.setOutput(true, Blockly.Types.TEXT.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_GETIP_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		   },getBlockType: function() {
				 return Blockly.Types.TEXT;
		   }
 };

 Blockly.Blocks['kniwwelino_getMAC'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_GETMAC);
			 this.setOutput(true, Blockly.Types.TEXT.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_GETMAC_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		   }
 };

 Blockly.Blocks['kniwwelino_getSSID'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_GETSSID);
			 this.setOutput(true, Blockly.Types.TEXT.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_GETSSID_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
		   }
 };

 Blockly.Blocks['kniwwelino_sleepsec'] = {
		 init: function() {
			 this.appendValueInput('DELAY_TIME_SEC')
				 .setCheck(Blockly.Types.NUMBER.checkList)
				 .appendField(Blockly.Msg.ARD_TIME_DELAY);
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_TIME_SEC);
			 this.setInputsInline(true);
			 this.setPreviousStatement(true, null);
			 this.setNextStatement(true, null);
			 this.setColour("#f9d831");
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'time');
		   }
 };

 Blockly.Blocks['kniwwelino_sleep'] = {
		 init: function() {
			 this.appendValueInput('DELAY_TIME_MILI')
				 .setCheck(Blockly.Types.NUMBER.checkList)
				 .appendField(Blockly.Msg.ARD_TIME_DELAY);
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.ARD_TIME_MS);
			 this.setInputsInline(true);
			 this.setPreviousStatement(true, null);
			 this.setNextStatement(true, null);
			 this.setColour("#f9d831");
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'time');
		   }
 };

 Blockly.Blocks['kniwwelino_getTime'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_GET_TIME)
				 .appendField(new Blockly.FieldDropdown(
				 [
					 [Blockly.Msg.KNIWWELINO_TIME_DATETIME,"DATETIME"],
					 [Blockly.Msg.KNIWWELINO_TIME_DATE,"DATE"],
					 [Blockly.Msg.KNIWWELINO_TIME_TIME,"TIME"],
					 [Blockly.Msg.KNIWWELINO_TIME_HOUR,"HOUR"],
					 [Blockly.Msg.KNIWWELINO_TIME_MINUTE,"MINUTE"],
					 [Blockly.Msg.KNIWWELINO_TIME_SECOND,"SECOND"]
				 ]), "FORMAT");
			 this.setOutput(true, Blockly.Types.TEXT.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_GET_TIME);
			 this.setColour("#f9d831");
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'time');
		   },getBlockType: function() {
				 return Blockly.Types.TEXT;
		   }
 };

 Blockly.Blocks['kniwwelino_getTimeInt'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_GET_TIMEINT)
				 .appendField(new Blockly.FieldDropdown(
				 [
					 [Blockly.Msg.KNIWWELINO_TIME_YEAR,"YEAR"],
					 [Blockly.Msg.KNIWWELINO_TIME_MONTH,"MONTH"],
					 [Blockly.Msg.KNIWWELINO_TIME_DAY,"DAY"],
					 [Blockly.Msg.KNIWWELINO_TIME_HOUR,"HOUR"],
					 [Blockly.Msg.KNIWWELINO_TIME_MINUTE,"MINUTE"],
					 [Blockly.Msg.KNIWWELINO_TIME_SECOND,"SECOND"]
				 ]), "FORMAT");
			 this.setOutput(true, Blockly.Types.TEXT.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_GET_TIME);
			 this.setColour("#f9d831");
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'time');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_log'] = {
			init: function() {
				  this.setInputsInline(true);
				  this.appendValueInput("TEXT")
					  .appendField(Blockly.Msg.KNIWWELINO_LOG);
				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_LOG_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
				}
			 };

 Blockly.Blocks['kniwwelino_logln'] = {
			init: function() {
				  this.setInputsInline(true);
				  this.appendValueInput("TEXT")
					  .appendField(Blockly.Msg.KNIWWELINO_LOG_LINE);
				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_Kniwwelino.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_LOG_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'kniwwelino');
				}
			 };

 //==== RGB LED  functions ====================================================
 //void RGBsetColor(uint32 color);
 //void RGBsetColorEffect(uint32 color, uint8_t effect, int count);
 //void RGBsetColorEffect(uint8_t red ,uint8_t green, uint8_t blue, uint8_t effect, int count);

 Blockly.Blocks['kniwwelino_RGBselectColor'] = {
			init: function() {
			  this.appendDummyInput()
				  .appendField(Blockly.Msg.KNIWWELINO_RGB_SELECTCOLOR)
				  .appendField(new Blockly.FieldColour("#00FF00"), "COLOR");
			  this.setOutput(true, Blockly.Types.TEXT.output);
			  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SELECTCOLOR_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
			},getBlockType: function() {
				 return Blockly.Types.TEXT;
			}
		 };

 Blockly.Blocks['kniwwelino_HUEselectColor'] = {
		init: function() {
		  this.appendValueInput("HUE")
				   .setCheck("Number")
			  .appendField(Blockly.Msg.KNIWWELINO_HUE_SELECTCOLOR);
		  this.appendDummyInput();
		  this.setOutput(true, Blockly.Types.TEXT.output);
		  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
		  this.setTooltip(Blockly.Msg.KNIWWELINO_HUE_SELECTCOLOR_TIP);
		  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
		}, getBlockType: function() {
				   return Blockly.Types.TEXT;
			   }, onchange: function(ev) {
			  var hue = Blockly.Arduino.valueToCode(this, 'HUE', Blockly.Arduino.ORDER_ATOMIC);
				  if (hue < 0 || hue > 255) {
					swal({
						  title: Blockly.Msg.KNIWWELINO_WARNING,
						  text: Blockly.Msg.KNIWWELINO_RGB_SETRGB_WARNING,
						  className: "kniwwelino-bg"
					  });
			  }
	   }
 };

 Blockly.Blocks['kniwwelino_RGBselectEffect'] = {
		 init: function() {
			 this.setInputsInline(true);
			 this.appendValueInput("COLOR").setCheck(Blockly.Types.TEXT.checkList)
			 this.appendDummyInput().appendField(new Blockly.FieldDropdown([[Blockly.Msg.KNIWWELINO_PIN_ON,"10"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_BLINK,"5"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_FLASH,"1"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_SPARK,"20"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_GLOW,"21"]]), "EFFECT");
			 this.appendValueInput("DURATION").setCheck(Blockly.Types.NUMBER.checkList).appendField(Blockly.Msg.KNIWWELINO_RGB_DURATION);
			 this.appendDummyInput().appendField("s");
			 this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SELECT_EFFECT_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
			 this.setOutput(true, Blockly.Types.TEXT.output);
		   },getBlockType: function() {
				 return Blockly.Types.TEXT;
			}
		 };


 Blockly.Blocks['kniwwelino_RGBsetRGB'] = {
		   init: function() {
			 this.appendValueInput("RED")
				 .setCheck("Number")
				 .appendField(Blockly.Msg.KNIWWELINO_RGB_RED);
			 this.appendValueInput("GREEN")
				 .setCheck("Number")
				 .appendField(Blockly.Msg.KNIWWELINO_RGB_GREEN);
			 this.appendValueInput("BLUE")
				 .setCheck("Number")
				 .appendField(Blockly.Msg.KNIWWELINO_RGB_BLUE);
			 this.appendDummyInput();
				 this.setOutput(true, Blockly.Types.TEXT.output);
				 this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
				this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_TIP);
				this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
		   }, getBlockType: function() {
				  return Blockly.Types.TEXT;
			 }, onchange: function(ev) {
			 var r = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ATOMIC);
				 var g = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
				 var b = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
				 if (r < 0 || r > 255) {
				   swal({
						 title: Blockly.Msg.KNIWWELINO_WARNING,
						 text: Blockly.Msg.KNIWWELINO_RGB_SETRGB_WARNING,
						 className: "kniwwelino-bg"
					 });
			 } else if (g < 0 || g > 255) {
					 swal({
						 title: Blockly.Msg.KNIWWELINO_WARNING,
						 text: Blockly.Msg.KNIWWELINO_RGB_SETRGB_WARNING,
						 className: "kniwwelino-bg"
					 });
			 } else if (b < 0 || b > 255) {
					 swal({
						 title: Blockly.Msg.KNIWWELINO_WARNING,
						 text: Blockly.Msg.KNIWWELINO_RGB_SETRGB_WARNING,
						 className: "kniwwelino-bg"
					 });
			 }
		   }
		 };

 Blockly.Blocks['kniwwelino_RGBsetColorEffect'] = {
		   init: function() {
			 this.setInputsInline(true);
			 this.appendValueInput("COLOR")
					  .appendField(Blockly.Msg.KNIWWELINO_RGB_SETCOLORFROMSTRING)
					  .setCheck(Blockly.Types.TEXT.checkList)
			 this.appendDummyInput()
				 .appendField(new Blockly.FieldDropdown([[Blockly.Msg.KNIWWELINO_PIN_ON,"RGB_ON"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_BLINK,"RGB_BLINK"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_FLASH,"RGB_FLASH"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_SPARK,"RGB_SPARK"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_GLOW,"RGB_GLOW"]]), "EFFECT");
			 this.setPreviousStatement(true, null);
			 this.setNextStatement(true, null);
			 this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETCOLOREFFECT_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
		   }
		 };

 Blockly.Blocks['kniwwelino_RGBsetEffect'] = {
		   init: function() {
			 this.setInputsInline(true);
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_RGB_SETEFFECT)
				 .appendField(new Blockly.FieldDropdown([[Blockly.Msg.KNIWWELINO_PIN_ON,"RGB_ON"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_BLINK,"RGB_BLINK"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_FLASH,"RGB_FLASH"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_SPARK,"RGB_SPARK"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_GLOW,"RGB_GLOW"]]), "EFFECT");
			 this.setPreviousStatement(true, null);
			 this.setNextStatement(true, null);
			 this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETEFFECT_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
		   }
		 };

 Blockly.Blocks['kniwwelino_RGBsetColorFromString'] = {
			init: function() {
			  this.setInputsInline(true);
			  this.appendValueInput("COLOR")
				  .appendField(Blockly.Msg.KNIWWELINO_RGB_SETCOLORFROMSTRING)
				  .setCheck(Blockly.Types.TEXT.checkList);
			  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
			  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETCOLORFROMSTRING_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
			}
		 };

 Blockly.Blocks['kniwwelino_RGBsetBrightness'] = {
			init: function() {
			  this.appendDummyInput()
				  .appendField(Blockly.Msg.KNIWWELINO_RGB_SETBRIGHTNESS)
				  .appendField(new Blockly.FieldNumber(200, 0, 255, 0), 'BRIGHTNESS');
			  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
			  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETBRIGHTNESS_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
			},

			onchange: function() {
			  if (this.getFieldValue('BRIGHTNESS') < 1 | this.getFieldValue('BRIGHTNESS') > 255) {
				this.setWarningText(Blockly.Msg.KNIWWELINO_MATRIX_SETBRIGHTNESS_ALERT);
				if (this.getFieldValue('BRIGHTNESS') < 1) {
				  this.setFieldValue(1, 'BRIGHTNESS');
				} else if (this.getFieldValue('BRIGHTNESS') > 255) {
				  this.setFieldValue(255, 'BRIGHTNESS');
				}
			  } else {
				this.setWarningText(null);
			  }
			}

		 };


 Blockly.Blocks['kniwwelino_RGBsetBrightnessFromVariable'] = {
			init: function() {
			  this.setInputsInline(true);
				  this.appendValueInput("BRIGHTNESS").setCheck(Blockly.Types.NUMBER.checkList).appendField(Blockly.Msg.KNIWWELINO_RGB_SETBRIGHTNESS)
			  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
			  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_SETBRIGHTNESS_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
			}
		 };

 Blockly.Blocks['kniwwelino_RGBclear'] = {
			init: function() {
			  this.appendDummyInput()
				  .appendField(Blockly.Msg.KNIWWELINO_RGB_CLEAR);
			  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
			  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_CLEAR_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'led');
			}
		 };

 Blockly.Blocks['kniwwelino_PINsetEffect'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_PIN_EFFECT)
				 .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
				 .appendField(Blockly.Msg.ARD_WRITE_TO)
			   .appendField(new Blockly.FieldDropdown([[Blockly.Msg.KNIWWELINO_PIN_ON,"PIN_ON"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_BLINK,"PIN_BLINK"], [Blockly.Msg.KNIWWELINO_PIN_EFFECT_FLASH,"PIN_FLASH"], [Blockly.Msg.KNIWWELINO_PIN_OFF,"PIN_OFF"]]), "EFFECT");
			 this.setPreviousStatement(true, null);
			 this.setNextStatement(true, null);
			 this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_PIN_EFFECT_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL);
		   }
		 };

 Blockly.Blocks['kniwwelino_PINbuttonDown'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_PIN_BUTTON)
				 .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
				 .appendField(Blockly.Msg.KNIWWELINO_BUTTON_DOWN);
			 this.setOutput(true, Blockly.Types.BOOLEAN.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_BUTTON_DOWN_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_BUTTONS.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'buttons');
		   },getBlockType: function() {
				 return Blockly.Types.BOOLEAN;
		   }
 };

 Blockly.Blocks['kniwwelino_PINbuttonClicked'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_PIN_BUTTON)
				 .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
				 .appendField(Blockly.Msg.KNIWWELINO_BUTTON_CLICKED);
			 this.setOutput(true, Blockly.Types.BOOLEAN.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_BUTTON_CLICKED_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_BUTTONS.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'buttons');
		   },getBlockType: function() {
				 return Blockly.Types.BOOLEAN;
		   }
 };


 //==== LED MATRIX functions ==================================================
 //void MATRIXwriteOnce(String text);
 //void MATRIXwriteAndWait(String text);
 //void MATRIXwrite(String text, int count, boolean wait);
 //void MATRIXsetPixel(uint8_t x, uint8_t y, boolean on);

 Blockly.Blocks['kniwwelino_MATRIXdrawIconCreator'] = {
   init: function() {
 //    this.appendDummyInput()
 //        .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCREATOR);
	 this.appendDummyInput()
		 .setAlign(Blockly.ALIGN_CENTRE)
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "1_1")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "1_2")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "1_3")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "1_4")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "1_5");
	 this.appendDummyInput()
		 .setAlign(Blockly.ALIGN_CENTRE)
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "2_1")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "2_2")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "2_3")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "2_4")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "2_5");
	 this.appendDummyInput()
		 .setAlign(Blockly.ALIGN_CENTRE)
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "3_1")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "3_2")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "3_3")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "3_4")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "3_5");
	 this.appendDummyInput()
		 .setAlign(Blockly.ALIGN_CENTRE)
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "4_1")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "4_2")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "4_3")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "4_4")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "4_5");
	 this.appendDummyInput()
		 .setAlign(Blockly.ALIGN_CENTRE)
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "5_1")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "5_2")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "5_3")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "5_4")
		 .appendField(new Blockly.FieldCheckbox("FALSE"), "5_5");
 //    this.appendDummyInput();
	 this.setOutput(true, Blockly.Types.TEXT.output);
	 this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCREATOR_TIP);
	 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   },getBlockType: function() {
		 return Blockly.Types.TEXT;
   }
 };


 Blockly.Blocks['kniwwelino_MATRIXdrawIconChooser'] = {
   init: function() {
	 this.appendDummyInput()
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCHOOSER)
		 .appendField(new Blockly.FieldDropdown([
		   [Blockly.Msg.KNIWWELINO_DRAWICON_HEART,		"ICON_HEART"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_SMILE,		"ICON_SMILE"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_SAD,			"ICON_SAD"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_UP,	"ICON_ARROW_UP"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_DOWN,	"ICON_ARROW_DOWN"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_LEFT,	"ICON_ARROW_LEFT"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_RIGHT,	"ICON_ARROW_RIGHT"]])
		 , "ICON");
	 this.setPreviousStatement(true, null);
	 this.setNextStatement(true, null);
	 this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCHOOSER_TIP);
	 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   }
 };

 Blockly.Blocks['kniwwelino_MATRIXIconChooser'] = {
   init: function() {
		 this.appendDummyInput()
		 .appendField(new Blockly.FieldDropdown([
		   [Blockly.Msg.KNIWWELINO_DRAWICON_HEART,		"ICON_HEART"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_SMILE,		"ICON_SMILE"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_SAD,			"ICON_SAD"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_UP,	"ICON_ARROW_UP"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_DOWN,	"ICON_ARROW_DOWN"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_LEFT,	"ICON_ARROW_LEFT"],
		   [Blockly.Msg.KNIWWELINO_DRAWICON_ARROW_RIGHT,	"ICON_ARROW_RIGHT"]])
		 , "ICON_CHOOSER");
		 this.setOutput(true, null);
	 this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCHOOSER_TIP);
	 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   }
 };

 Blockly.Blocks['kniwwelino_MATRIXdrawIcon'] = {
		   init: function() {
			 this.setInputsInline(true);
			 this.appendValueInput("ICON")
				 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICON);
			 this.setPreviousStatement(true, null);
			 this.setNextStatement(true, null);
			 this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICON_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
		   }
		 };

 Blockly.Blocks['kniwwelino_MATRIXselectIconEffect'] = {
		 init: function() {
			 this.setInputsInline(true);
			 this.appendValueInput("ICON");
			 this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_MATRIX_BLINKRATE_SHORT).appendField(new Blockly.FieldDropdown(
				 [[Blockly.Msg.KNIWWELINO_PIN_ON,"0"],
				 ["1/2Hz","3"],
				 ["1Hz","2"],
				 ["2Hz","1"]]), "EFFECT");
			 this.appendValueInput("DURATION").setCheck(Blockly.Types.NUMBER.checkList).appendField(Blockly.Msg.KNIWWELINO_RGB_DURATION);
			 this.appendDummyInput().appendField("s");
			 this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICON_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
			 this.setOutput(true, Blockly.Types.TEXT.output);
		   },getBlockType: function() {
				 return Blockly.Types.TEXT;
			}
		 };

 Blockly.Blocks['kniwwelino_MATRIXwrite'] = {
	init: function() {
		  this.setInputsInline(true);
		  this.appendValueInput("TEXT").appendField(Blockly.Msg.KNIWWELINO_MATRIX_WRITE)
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldDropdown([
				 [Blockly.Msg.KNIWWELINO_MATRIX_WRITE_NORMAL,"SCROLL"],
				 [Blockly.Msg.KNIWWELINO_MATRIX_WRITE_ONCE,	"ONCE"],
				 [Blockly.Msg.KNIWWELINO_MATRIX_WRITE_WAIT,	"WAIT"]])
			   , "TYPE");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
		  this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_WRITE_TIP);
		  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
	}
 };

 Blockly.Blocks['kniwwelino_MATRIXdrawPixel'] = {
   init: function() {
		 this.appendDummyInput()
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL);
	 this.appendValueInput("X")
		 .setCheck("Number")
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_X);
	 this.appendValueInput("Y")
		 .setCheck("Number")
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_Y);
	 this.appendValueInput("STATE")
		 .setCheck("Number")
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_STATE);
	 this.setInputsInline(true);
	 this.setPreviousStatement(true, null);
	 this.setNextStatement(true, null);
		 this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
		 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_TIP);
		 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   },
	 onchange: function(ev) {
	 var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
		 var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);
		 if (x < 0 || x > 4) {
			 swal({
				 title: Blockly.Msg.KNIWWELINO_WARNING,
				 text: Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_WARNING,
				 className: "kniwwelino-bg"
			 });
	 }
		 if ( y < 0 || y > 4) {
			 swal({
				 title: Blockly.Msg.KNIWWELINO_WARNING,
				 text: Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_WARNING,
				 className: "kniwwelino-bg"
			 });
	 }
   }
 };

 Blockly.Blocks['kniwwelino_MATRIXshowPixels'] = {
   init: function() {
		 this.appendDummyInput()
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_SHOWPIXELS);
	 this.appendValueInput("n")
		 .setCheck("Number");
	 this.setInputsInline(true);
	 this.setPreviousStatement(true, null);
	 this.setNextStatement(true, null);
		 this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
		 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_SHOWPIXELS_TIP);
		 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   },
	 onchange: function(ev) {
	 var n = Blockly.Arduino.valueToCode(this, 'n', Blockly.Arduino.ORDER_ATOMIC);
		 if (n < 0 || n > 25) {
			 swal({
				 title: Blockly.Msg.KNIWWELINO_WARNING,
				 text: Blockly.Msg.KNIWWELINO_MATRIX_SHOWPIXELS_WARNING,
				 className: "kniwwelino-bg"
			 });
	 }
   }
 };

 Blockly.Blocks['kniwwelino_MATRIXreadPixel'] = {
   init: function() {
		 this.appendDummyInput()
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_READPIXEL);
	 this.appendValueInput("X_READ")
		 .setCheck("Number")
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_X);
	 this.appendValueInput("Y_READ")
		 .setCheck("Number")
		 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_Y);
	 this.setInputsInline(true);
	 //this.setPreviousStatement(true, null);
	 //this.setNextStatement(true, null);
	 this.setOutput(true, Blockly.Types.NUMBER.output);
	   this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	   this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_READPIXEL_TIP);
	   this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
   },
	 onchange: function(ev) {
	 var x = Blockly.Arduino.valueToCode(this, 'X_READ', Blockly.Arduino.ORDER_ATOMIC);
		 var y = Blockly.Arduino.valueToCode(this, 'Y_READ', Blockly.Arduino.ORDER_ATOMIC);
		 if (x < 0 || x > 4) {
			 swal({
				 title: Blockly.Msg.KNIWWELINO_WARNING,
				 text: Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_WARNING,
				 className: "kniwwelino-bg"
			 });
	 };
		 if ( y < 0 || y > 4) {
			 swal({
				 title: Blockly.Msg.KNIWWELINO_WARNING,
				 text: Blockly.Msg.KNIWWELINO_MATRIX_DRAWPIXEL_WARNING,
				 className: "kniwwelino-bg"
			 });
	 };
   },
   getBlockType: function() {
	 return Blockly.Types.NUMBER;
   }
 };

 Blockly.Blocks['kniwwelino_MATRIXsetBrightness'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.KNIWWELINO_MATRIX_SETBRIGHTNESS)
		  .appendField(new Blockly.FieldNumber(10, 0, 15, 0), 'BRIGHTNESS');
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	  this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_SETBRIGHTNESS_TIP);
	  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
	},

	onchange: function() {
	  if (this.getFieldValue('BRIGHTNESS') < 1 | this.getFieldValue('BRIGHTNESS') > 15) {
		this.setWarningText(Blockly.Msg.KNIWWELINO_MATRIX_SETBRIGHTNESS_ALERT);
		if (this.getFieldValue('BRIGHTNESS') < 1) {
		  this.setFieldValue(1, 'BRIGHTNESS');
		} else if (this.getFieldValue('BRIGHTNESS') > 15) {
		  this.setFieldValue(15, 'BRIGHTNESS');
		}
	  } else {
		this.setWarningText(null);
	  }
	}

 };

 Blockly.Blocks['kniwwelino_MATRIXsetScrollSpeed'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.KNIWWELINO_MATRIX_SETSCROLLSPEED)
		  .appendField(new Blockly.FieldNumber(10, 0, 10, 0), 'SPEED');
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	  this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_SETSCROLLSPEED_TIP);
	  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
	},

	onchange: function() {
	  if (this.getFieldValue('SPEED') < 1 | this.getFieldValue('SPEED') > 10) {
		this.setWarningText(Blockly.Msg.KNIWWELINO_MATRIX_SETSCROLLSPEED_ALERT);
		if (this.getFieldValue('SPEED') < 1) {
		  this.setFieldValue(1, 'SPEED');
		} else if (this.getFieldValue('SPEED') > 10) {
		  this.setFieldValue(10, 'SPEED');
		}
	  } else {
		this.setWarningText(null);
	  }
	}

 };

 Blockly.Blocks['kniwwelino_MATRIXsetBlinkRate'] = {
			init: function() {
			  this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_BLINKRATE)
				 .appendField(new Blockly.FieldDropdown(
					 [[Blockly.Msg.KNIWWELINO_PIN_ON,"MATRIX_STATIC"],
					 ["1/2Hz","MATRIX_BLINK_HALFHZ"],
					 ["1Hz","MATRIX_BLINK_1HZ"],
					 ["2Hz","MATRIX_BLINK_2HZ"]]), "RATE");
			  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
			  this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_BLINKRATE_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
			}
		 };

   Blockly.Blocks['kniwwelino_MATRIXsetRotation'] = {
			  init: function() {
				  this.appendDummyInput()
					 .appendField(Blockly.Msg.KNIWWELINO_MATRIX_ROTATION)
					 .appendField(new Blockly.FieldDropdown(
						 [["0","0"],
						 ["90","1"],
						 ["180","2"],
						 ["270","3"]]), "ROTATION");
				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_ROTATION_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
			   }
	 };

 Blockly.Blocks['kniwwelino_MATRIXclear'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.KNIWWELINO_MATRIX_CLEAR);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(Blockly.Blocks.kniwwelino_MATRIX.HUE);
	  this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_CLEAR_TIP);
	  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'matrix');
	}
 };

 //==== Onboard Button functions ==============================================


 Blockly.Blocks['kniwwelino_BUTTONdown'] = {
		   init: function() {
			 this.appendDummyInput()
			 .appendField(Blockly.Msg.KNIWWELINO_BUTTON)
				 .appendField(new Blockly.FieldDropdown(
			 [["A","A"],
			 ["B","B"],
			 [Blockly.Msg.KNIWWELINO_BUTTON_A_AND_B,"AandB"],
			 [Blockly.Msg.KNIWWELINO_BUTTON_A_OR_B,"AorB"]]), "BUTTON")
			 .appendField(Blockly.Msg.KNIWWELINO_BUTTON_DOWN);
			 this.setOutput(true, Blockly.Types.BOOLEAN.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_BUTTON_DOWN_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_BUTTONS.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'buttons');
		   },getBlockType: function() {
				 return Blockly.Types.BOOLEAN;
		   }
 };

 Blockly.Blocks['kniwwelino_BUTTONclicked'] = {
		   init: function() {
			 this.appendDummyInput()
			 .appendField(Blockly.Msg.KNIWWELINO_BUTTON)
				 .appendField(new Blockly.FieldDropdown(
			 [["A","A"],
			 ["B","B"],
			 [Blockly.Msg.KNIWWELINO_BUTTON_A_AND_B,"AandB"],
			 [Blockly.Msg.KNIWWELINO_BUTTON_A_OR_B,"AorB"]]), "BUTTON")
			 .appendField(Blockly.Msg.KNIWWELINO_BUTTON_CLICKED);
			 this.setOutput(true, Blockly.Types.BOOLEAN.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_BUTTON_CLICKED_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_BUTTONS.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'buttons');
		   },getBlockType: function() {
				 return Blockly.Types.BOOLEAN;
		   }
 };


 //==== IOT functions ==============================================

 Blockly.Blocks['kniwwelino_MQTTsetUserBroker'] = {
			init: function() {
				  this.setInputsInline(true);
				  this.appendDummyInput()
					  .appendField(Blockly.Msg.KNIWWELINO_MQTT_USERBROKER)
					  .appendField(new Blockly.FieldTextInput('myBroker'), 'BROKER')
				.appendField(Blockly.Msg.KNIWWELINO_MQTT_USERBROKERPORT)
				.appendField(new Blockly.FieldTextInput('1883'), 'PORT')
				.appendField(Blockly.Msg.KNIWWELINO_MQTT_USERBROKERUSER)
					  .appendField(new Blockly.FieldTextInput('myUser'), 'USER')
				.appendField(Blockly.Msg.KNIWWELINO_MQTT_USERBROKERPASSWORD)
				.appendField(new Blockly.FieldTextInput('myPassword'), 'PASSWORD')
				  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_USERBROKER_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
			},
				 /** @return {!string} Type of the block, text block always a string. */
				 getBlockType: function() {
				   return Blockly.Types.TEXT;
				 }
		 };

 Blockly.Blocks['kniwwelino_MQTTsetGroup'] = {
			init: function() {
				  this.setInputsInline(true);
 //			     this.appendValueInput("GROUP")
				  this.appendDummyInput()
					  .appendField(Blockly.Msg.KNIWWELINO_MQTT_GROUP)
							  .appendField(this.newQuote_(true))
							  .appendField(new Blockly.FieldTextInput('myFriends'), 'GROUP')
							   .appendField(this.newQuote_(false));
 //			     this.setPreviousStatement(true, null);
 //			     this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_GROUP_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
			},

			onchange: function() {
					this.setFieldValue(this.getFieldValue('GROUP').trim().replace(" ","_").replace(/\W/g,""), 'GROUP');
				},

			newQuote_: function(open) {
				if (open == this.RTL) {
					 var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
				   } else {
					 var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
				   }
				   return new Blockly.FieldImage(file, 12, 12, '"');
				 },
				 /** @return {!string} Type of the block, text block always a string. */
				 getBlockType: function() {
				   return Blockly.Types.TEXT;
				 }
		 };

 Blockly.Blocks['kniwwelino_MQTTconnectRGB'] = {
			init: function() {
			  this.appendDummyInput()
				  .appendField(Blockly.Msg.KNIWWELINO_MQTT_CONNECT_RGB);
			  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_CONNECT_RGB_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
			}
 };

 Blockly.Blocks['kniwwelino_MQTTconnectMATRIX'] = {
			init: function() {
			  this.appendDummyInput()
				  .appendField(Blockly.Msg.KNIWWELINO_MQTT_CONNECT_MATRIX);
			  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_CONNECT_MATRIX_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
			}
 };

 Blockly.Blocks['kniwwelino_MQTTpublishSimple'] = {
			init: function() {
				  this.setInputsInline(true);
				  this.appendValueInput("MESSAGE").appendField(Blockly.Msg.KNIWWELINO_MQTT_SENTMESSAGE);
				  this.appendDummyInput()
					  .appendField(Blockly.Msg.KNIWWELINO_MQTT_TOTOPIC)
					  .appendField(new Blockly.FieldDropdown([
						  ["MATRIX/TEXT","MATRIX/TEXT"],
						  ["MATRIX/ICON","MATRIX/ICON"],
						  ["RGB/COLOR","RGB/COLOR"]])
				   , "TOPIC");
				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_SENTMESSAGE_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
			}
 };

 Blockly.Blocks['kniwwelino_MQTTsubscribe'] = {
			init: function() {
				  this.setInputsInline(true);
				  this.appendValueInput("TOPIC")
					  .appendField(Blockly.Msg.KNIWWELINO_MQTT_ATTACH).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR")
					  .appendField(Blockly.Msg.KNIWWELINO_MQTT_TOTOPIC);
				  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_ATTACH_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
				  this.setOutput(false);
			},
			/**
			 * @return {!string} Retrieves the type (stored in varType) of this block.
			 * @this Blockly.Block
			 */
			getBlockType: function() {
			  return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
			},
			/**
			 * Gets the stored type of the variable indicated in the argument. As only one
			 * variable is stored in this block, no need to check input
			 * @this Blockly.
			 * @param {!string} varName Name of this block variable to check type.
			 * @return {!string} String to indicate the type of this block.
			 */
			getVarType: function(varName) {
			  return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
			}
 };

 Blockly.Blocks['kniwwelino_MQTTsubscribePublic'] = {
			init: function() {
				  this.setInputsInline(true);
				  this.appendValueInput("TOPIC")
					  .appendField(Blockly.Msg.KNIWWELINO_MQTT_ATTACH).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR")
					  .appendField(Blockly.Msg.KNIWWELINO_MQTT_TOPUBLICTOPIC);
				  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_ATTACH_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
				  this.setOutput(false);
			},
			/**
			 * @return {!string} Retrieves the type (stored in varType) of this block.
			 * @this Blockly.Block
			 */
			getBlockType: function() {
			  return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
			},
			/**
			 * Gets the stored type of the variable indicated in the argument. As only one
			 * variable is stored in this block, no need to check input
			 * @this Blockly.
			 * @param {!string} varName Name of this block variable to check type.
			 * @return {!string} String to indicate the type of this block.
			 */
			getVarType: function(varName) {
			  return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
			}
 };


 Blockly.Blocks['kniwwelino_MQTTpublish'] = {
			init: function() {
				  this.setInputsInline(true);
				  this.appendValueInput("MESSAGE").appendField(Blockly.Msg.KNIWWELINO_MQTT_SENTMESSAGE);
				  this.appendValueInput("TOPIC").appendField(Blockly.Msg.KNIWWELINO_MQTT_TOTOPIC);
				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_MQTT.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_MQTT_SENTMESSAGE_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'messages');
			}
 };

 //==== SENSORS ==============================================

 Blockly.Blocks['kniwwelino_BME280getValue'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("BME280" + Blockly.Msg.KNIWWELINO_SENSOR_READ)
				 .appendField(new Blockly.FieldDropdown(
						 [
							 [Blockly.Msg.KNIWWELINO_SENSOR_TEMP,"TEMPERATURE"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_HUM,"HUMIDITY"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_PRESSURE,"PRESSURE"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_HEIGHT,"HEIGHT"]
						 ]), "VALUE")
			   .appendField(Blockly.Msg.KNIWWELINO_SENSOR_AT_ADDRESS)
			   .appendField(new Blockly.FieldDropdown(
						 [
							 ["0x76","0x76"],
							 ["0x77","0x77"]
						 ]), "ADDRESS");
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_BME680getValue'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("BME680" + Blockly.Msg.KNIWWELINO_SENSOR_READ)
				 .appendField(new Blockly.FieldDropdown(
						 [
							 [Blockly.Msg.KNIWWELINO_SENSOR_TEMP,"TEMPERATURE"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_HUM,"HUMIDITY"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_GAS,"GAS"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_PRESSURE,"PRESSURE"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_HEIGHT,"HEIGHT"]
						 ]), "VALUE")
						   .appendField(Blockly.Msg.KNIWWELINO_SENSOR_AT_ADDRESS)
						   .appendField(new Blockly.FieldDropdown(
									 [
										 ["0x76","0x76"],
										 ["0x77","0x77"]
									 ]), "ADDRESS");
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_SHT30getValue'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("SHT30" + Blockly.Msg.KNIWWELINO_SENSOR_READ)
				 .appendField(new Blockly.FieldDropdown(
						 [
							 [Blockly.Msg.KNIWWELINO_SENSOR_TEMP,"TEMPERATURE"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_HUM,"HUMIDITY"],
						 ]), "VALUE")
						   .appendField(Blockly.Msg.KNIWWELINO_SENSOR_AT_ADDRESS)
						   .appendField(new Blockly.FieldDropdown(
									 [
										 ["0x44","0x44"],
										 ["0x45","0x45"]
									 ]), "ADDRESS");
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_HTU21DgetValue'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("HTU21D" + Blockly.Msg.KNIWWELINO_SENSOR_READ)
				 .appendField(new Blockly.FieldDropdown(
						 [
							 [Blockly.Msg.KNIWWELINO_SENSOR_TEMP,"TEMPERATURE"],
							 [Blockly.Msg.KNIWWELINO_SENSOR_HUM,"HUMIDITY"],
						 ]), "VALUE");
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_DS18B20getValue'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("DS18B20" + Blockly.Msg.KNIWWELINO_SENSOR_READ + Blockly.Msg.KNIWWELINO_WEATHER_TEMP + " " + Blockly.Msg.KNIWWELINO_AUDIO_PIN)
					 .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.interrupt), 'PIN');
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/extothersensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_BH1750getLightLevel'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("BH1750" + Blockly.Msg.KNIWWELINO_SENSOR_READ + Blockly.Msg.KNIWWELINO_SENSOR_LIGHTLEVEL + Blockly.Msg.KNIWWELINO_SENSOR_AT_ADDRESS)
			   .appendField(new Blockly.FieldDropdown(
						 [
							 ["0x23","0x23"],
							 ["0x5c","0x5c"]
						 ]), "ADDRESS");
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_ADPS9960getValue'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("ADPS9960" + Blockly.Msg.KNIWWELINO_SENSOR_READ)
					 .appendField(new Blockly.FieldDropdown(
				 [
					 [Blockly.Msg.KNIWWELINO_SENSOR_PROXIMITY,"PROXIMITY"],
					 [Blockly.Msg.KNIWWELINO_SENSOR_GESTURE,"GESTURE"],
					 [Blockly.Msg.KNIWWELINO_SENSOR_WHITE,"WHITE"],
					 [Blockly.Msg.KNIWWELINO_SENSOR_RED,"RED"],
					 [Blockly.Msg.KNIWWELINO_SENSOR_GREEN,"GREEN"],
					 [Blockly.Msg.KNIWWELINO_SENSOR_BLUE,"BLUE"]
				 ]), "VALUE");
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };


 Blockly.Blocks['kniwwelino_HCSR04getValue'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("HC-SR04" + Blockly.Msg.KNIWWELINO_SENSOR_READ + Blockly.Msg.KNIWWELINO_SENSOR_DISTANCE + Blockly.Msg.KNIWWELINO_SENSOR_CM);
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/extothersensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_HCSR04getValue1Pin'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("HC-SR04" + Blockly.Msg.KNIWWELINO_SENSOR_READ + Blockly.Msg.KNIWWELINO_SENSOR_DISTANCE + Blockly.Msg.KNIWWELINO_SENSOR_CM + " " + Blockly.Msg.KNIWWELINO_AUDIO_PIN)
		   .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.interrupt), 'PIN');
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/extothersensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_HCSR04getValue2Pin'] = {
		   init: function() {
			   this.appendDummyInput()
				 .appendField("HC-SR04" + Blockly.Msg.KNIWWELINO_SENSOR_READ + Blockly.Msg.KNIWWELINO_SENSOR_DISTANCE + Blockly.Msg.KNIWWELINO_SENSOR_CM + " " + Blockly.Msg.KNIWWELINO_SENSOR_TRIGGER)
		   .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), 'PIN_TRIG')
		   .appendField(Blockly.Msg.KNIWWELINO_SENSOR_ECHO)
		   .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.interrupt), 'PIN_ECHO');
			 this.setOutput(true, Blockly.Types.NUMBER.output);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_SENSOR_TIP);
			 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/extothersensor');
		   },getBlockType: function() {
				 return Blockly.Types.NUMBER;
		   }
 };

 //==== WEATHER ============================================

 Blockly.Blocks['kniwwelino_WeatherTopicChooser'] = {
	 init: function() {
		 this.appendDummyInput()
				 .appendField(new Blockly.FieldDropdown([
					 [Blockly.Msg.KNIWWELINO_WEATHER_WEATHER,"weather"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_TEMP,"temp"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_HUMIDITY, "humidity"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_PRESSURE, "pressure"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_WINDSPEED, "windspeed"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_WINDDIR, "winddir"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_CLOUDS, "clouds"]])
				 , "WEATHER_PAR")
				 .appendField(Blockly.Msg.KNIWWELINO_LOCATION_IN)
		 .appendField(new Blockly.FieldDropdown([
					 [Blockly.Msg.KNIWWELINO_LOCATION_LUXEMBOURG,"luxembourg"],
					 [Blockly.Msg.KNIWWELINO_LOCATION_BELVAL,"belval"],
					 [Blockly.Msg.KNIWWELINO_LOCATION_ECHTERNACH,"echternach"],
					 [Blockly.Msg.KNIWWELINO_LOCATION_ETTELBRUCK,"ettelbruck"],
					 [Blockly.Msg.KNIWWELINO_LOCATION_BRAUNSCHWEIG,"brunswick"]])
				 , "LOCATION");
		 this.setOutput(true, null);
	 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
	 this.setTooltip(Blockly.Msg.KNIWWELINO_WEATHER_WEATHERTOPICCHOOSER_TIP);
	 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'weather');
	 }
 };

 Blockly.Blocks['kniwwelino_WeatherConstChooser'] = {
	 init: function() {
		 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_WEATHER_IS)
		 .appendField(new Blockly.FieldDropdown([
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_THUNDERSTORM,"thunderstorm"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_DRIZZLE,"drizzle"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_RAIN, "rain"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_SNOW, "snow"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_FOG, "fog"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_MIST, "mist"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_CLEAR, "clear"],
					 [Blockly.Msg.KNIWWELINO_WEATHER_COND_CLOUDS, "clouds"]])
				 , "WEATHER_CONST");
		 this.setOutput(true, null);
	 this.setColour(Blockly.Blocks.kniwwelino_SENSOR.HUE);
	 this.setTooltip(Blockly.Msg.KNIWWELINO_WEATHER_WEATHERCONSTCHOOSER_TIP);
	 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + 'weather');
	 }
 };




 //==== AUDIO ==============================================

 Blockly.Blocks['kniwwelino_playNote'] = {
		   init: function() {
			 this.setInputsInline(true);
			 this.appendValueInput("NOTE")
				  .appendField(Blockly.Msg.KNIWWELINO_AUDIO_PLAY_NOTE);
			 this.appendValueInput("NOTE_DURATION")
				  .appendField(Blockly.Msg.KNIWWELINO_AUDIO_NOTE_DURATION);
			 this.appendDummyInput()
			 .appendField(Blockly.Msg.KNIWWELINO_AUDIO_PIN)
			 .appendField(new Blockly.FieldDropdown(
					 Blockly.Arduino.Boards.selected.pwmPins), "TONEPIN");
			 this.setPreviousStatement(true);
			 this.setNextStatement(true);
			 this.setColour(Blockly.Blocks.kniwwelino_AUDIO.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_TONEOFF_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/audio');
		   },
			 /** @return {!string} The type of input value for the block, an integer. */
		   getBlockType: function() {
			 return Blockly.Types.NUMBER;
		   }
 };


 Blockly.Blocks['kniwwelino_playTone'] = {
		   init: function() {
			 this.setInputsInline(true);
			 this.appendValueInput("NOTE")
				  .appendField(Blockly.Msg.KNIWWELINO_AUDIO_PLAY_TONE);
			 this.appendDummyInput()
			 .appendField(Blockly.Msg.KNIWWELINO_AUDIO_PIN)
			 .appendField(new Blockly.FieldDropdown(
					 Blockly.Arduino.Boards.selected.pwmPins), "TONEPIN");
			 this.setPreviousStatement(true);
			 this.setNextStatement(true);
			 this.setColour(Blockly.Blocks.kniwwelino_AUDIO.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_TONEOFF_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/audio');
		   },
			 /** @return {!string} The type of input value for the block, an integer. */
		   getBlockType: function() {
			 return Blockly.Types.NUMBER;
		   }
 };

 Blockly.Blocks['kniwwelino_toneOff'] = {
		   init: function() {
			 this.appendDummyInput()
				 .appendField(Blockly.Msg.KNIWWELINO_AUDIO_TONEOFF)
				 .appendField(new Blockly.FieldDropdown(
						 Blockly.Arduino.Boards.selected.pwmPins), "TONEPIN");
			 this.setPreviousStatement(true);
			 this.setNextStatement(true);
			 this.setColour(Blockly.Blocks.kniwwelino_AUDIO.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_TONEOFF_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/audio');
		   },
			 /** @return {!string} The type of input value for the block, an integer. */
		   getBlockType: function() {
			 return Blockly.Types.NUMBER;
		   }
 };


 Blockly.Blocks['kniwwelino_toneChooser'] = {
		   init: function() {
		 let notes = new Blockly.FieldDropdown([
		   ["Pause","0 /*Silence*/"],
		   [Blockly.Msg.KNIWWELINO_NOTE_C,"NOTE_C"],
		   [Blockly.Msg.KNIWWELINO_NOTE_CS,"NOTE_CS"],
		   [Blockly.Msg.KNIWWELINO_NOTE_D,"NOTE_D"],
		   [Blockly.Msg.KNIWWELINO_NOTE_DS,"NOTE_DS"],
		   [Blockly.Msg.KNIWWELINO_NOTE_E,"NOTE_E"],
		   [Blockly.Msg.KNIWWELINO_NOTE_F,"NOTE_F"],
		   [Blockly.Msg.KNIWWELINO_NOTE_FS,"NOTE_FS"],
		   [Blockly.Msg.KNIWWELINO_NOTE_G,"NOTE_G"],
		   [Blockly.Msg.KNIWWELINO_NOTE_GS,"NOTE_GS"],
		   [Blockly.Msg.KNIWWELINO_NOTE_A,"NOTE_A"],
		   [Blockly.Msg.KNIWWELINO_NOTE_AS,"NOTE_AS"],
		   [Blockly.Msg.KNIWWELINO_NOTE_B,"NOTE_B"]
		 ], function(option) {
		   var hasPause = (option == '0 /*Silence*/');
		   this.sourceBlock_.updateShape_(hasPause);
		 });
		 let octaves = new Blockly.FieldDropdown([
		   ["0","0"],
		   ["1","1"],
		   ["2","2"],
		   ["3","3"],
		   ["4","4"],
		   ["5","5"],
		   ["6","6"],
		   ["7","7"],
		   ["8","8"]
		 ]);

				 this.appendDummyInput()
					 .appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/music.svg", 15, 15, "*"))
				 .appendField(notes, "NOTE")
			 .appendField(octaves, "OCTAVE");
				 this.setOutput(true, null);
			 this.setColour(Blockly.Blocks.kniwwelino_AUDIO.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_MATRIX_DRAWICONCHOOSER_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/audio');
		   },
	   onchange: function(ev) {
		  if (this.getFieldValue('OCTAVE') === '0') {
			if (this.getFieldValue('NOTE') !== 'NOTE_B' && this.getField('NOTE').getText().toLowerCase() !== "pause") {
			  this.setWarningText(Blockly.Msg.KNIWWELINO_AUDIO_PLAY_NOTE_WARN_LOWNOTES);
			} else {
			  this.setWarningText(null);
			}
		  } else if (this.getFieldValue('OCTAVE') === '8') {
			if (this.getFieldValue('NOTE') === 'NOTE_C' | this.getFieldValue('NOTE') === 'NOTE_CS' | this.getFieldValue('NOTE') === 'NOTE_D' | this.getFieldValue('NOTE') === 'NOTE_DS' | this.getField('NOTE').getText().toLowerCase() === "pause") {
			  this.setWarningText(null);
			} else {
			  this.setWarningText(Blockly.Msg.KNIWWELINO_AUDIO_PLAY_NOTE_WARN_HIGHNOTES);
			}
		  } else {
			  this.setWarningText(null);
		  }
		},
		mutationToDom: function() {
		  var container = document.createElement('mutation');
		  var hasPause = (this.getFieldValue('NOTE') == '0 /*Silence*/');
		  container.setAttribute('haspause', hasPause);
		  return container;
		},
		domToMutation: function(xmlElement) {
		  var hasPause = (xmlElement.getAttribute('haspause') == 'true');
		  console.log(hasPause);
		  this.updateShape_(hasPause);
		},
		updateShape_: function(isPause) {
		  // Add or remove a Value Input.
		  if (!isPause) {
			this.getField('OCTAVE').setVisible(true);
		  } else if (isPause) {
			this.getField('OCTAVE').setVisible(false);
		  }
		  //this.getField('OCTAVE').updateWidth(); enable after migrate to later version of Blockly
		}
		 };

 //==== Neopixel WS2812 ==============================================

 Blockly.Blocks['kniwwelino_neopixelInit'] = {
			init: function() {
				 this.setInputsInline(true);
				 this.appendDummyInput().appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"));
				 this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SIZE).appendField(new Blockly.FieldNumber(5, 0, 255, 0), 'SIZE');
				 this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_PIN).appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.interrupt), 'PIN')
				 this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
				 this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_INIT_TIP);
				 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
			}
		 };

 Blockly.Blocks['kniwwelino_neopixelSetEffect'] = {
			init: function() {
			 this.setInputsInline(true);
			 this.appendDummyInput().appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"));
			 this.appendValueInput("EFFECT").setCheck(Blockly.Types.NUMBER.checkList).appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETEFFECT);
			 this.setPreviousStatement(true, null);
			 this.setNextStatement(true, null);
			 this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			 this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETEFFECT_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
		   }
	 };


 Blockly.Blocks['kniwwelino_neopixelEffectChooser'] = {
		   init: function() {
				 this.appendDummyInput()
				 .appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"))
				 .appendField(new Blockly.FieldDropdown([
					 ["STATIC [0]", "0 /*STATIC*/"],
					 ["BLINK [1]", "1 /*BLINK*/"],
					 ["BREATH [2]", "2 /*BREATH*/"],
					 ["COLOR_WIPE [3]", "3 /*COLOR_WIPE*/"],
					 ["COLOR_WIPE_INV [4]", "4 /*COLOR_WIPE_INV*/"],
					 ["COLOR_WIPE_REV [5]", "5 /*COLOR_WIPE_REV*/"],
					 ["COLOR_WIPE_REV_INV [6]", "6 /*COLOR_WIPE_REV_INV*/"],
					 ["COLOR_WIPE_RANDOM [7]", "7 /*COLOR_WIPE_RANDOM*/"],
					 ["RANDOM_COLOR [8]", "8 /*RANDOM_COLOR*/"],
					 ["SINGLE_DYNAMIC [9]", "9 /*SINGLE_DYNAMIC*/"],
					 ["MULTI_DYNAMIC [10]", "10 /*MULTI_DYNAMIC*/"],
					 ["RAINBOW [11]", "11 /*RAINBOW*/"],
					 ["RAINBOW_CYCLE [12]", "12 /*RAINBOW_CYCLE*/"],
					 ["SCAN [13]", "13 /*SCAN*/"],
					 ["DUAL_SCAN [14]", "14 /*DUAL_SCAN*/"],
					 ["FADE [15]", "15 /*FADE*/"],
					 ["THEATER_CHASE [16]", "16 /*THEATER_CHASE*/"],
					 ["THEATER_CHASE_RAINBOW [17]", "17 /*THEATER_CHASE_RAINBOW*/"],
					 ["RUNNING_LIGHTS [18]", "18 /*RUNNING_LIGHTS*/"],
					 ["TWINKLE [19]", "19 /*TWINKLE*/"],
					 ["TWINKLE_RANDOM [20]", "20 /*TWINKLE_RANDOM*/"],
					 ["TWINKLE_FADE [21]", "21 /*TWINKLE_FADE*/"],
					 ["TWINKLE_FADE_RANDOM [22]", "22 /*TWINKLE_FADE_RANDOM*/"],
					 ["SPARKLE [23]", "23 /*SPARKLE*/"],
					 ["FLASH_SPARKLE [24]", "24 /*FLASH_SPARKLE*/"],
					 ["HYPER_SPARKLE [25]", "25 /*HYPER_SPARKLE*/"],
					 ["STROBE [26]", "26 /*STROBE*/"],
					 ["STROBE_RAINBOW [27]", "27 /*STROBE_RAINBOW*/"],
					 ["MULTI_STROBE [28]", "28 /*MULTI_STROBE*/"],
					 ["BLINK_RAINBOW [29]", "29 /*BLINK_RAINBOW*/"],
					 ["CHASE_WHITE [30]", "30 /*CHASE_WHITE*/"],
					 ["CHASE_COLOR [31]", "31 /*CHASE_COLOR*/"],
					 ["CHASE_RANDOM [32]", "32 /*CHASE_RANDOM*/"],
					 ["CHASE_RAINBOW [33]", "33 /*CHASE_RAINBOW*/"],
					 ["CHASE_FLASH [34]", "34 /*CHASE_FLASH*/"],
					 ["CHASE_FLASH_RANDOM [35]", "35 /*CHASE_FLASH_RANDOM*/"],
					 ["CHASE_RAINBOW_WHITE [36]", "36 /*CHASE_RAINBOW_WHITE*/"],
					 ["CHASE_BLACKOUT [37]", "37 /*CHASE_BLACKOUT*/"],
					 ["CHASE_BLACKOUT_RAINBOW [38]", "38 /*CHASE_BLACKOUT_RAINBOW*/"],
					 ["COLOR_SWEEP_RANDOM [39]", "39 /*COLOR_SWEEP_RANDOM*/"],
					 ["RUNNING_COLOR [40]", "40 /*RUNNING_COLOR*/"],
					 ["RUNNING_RED_BLUE [41]", "41 /*RUNNING_RED_BLUE*/"],
					 ["RUNNING_RANDOM [42]", "42 /*RUNNING_RANDOM*/"],
					 ["LARSON_SCANNER [43]", "43 /*LARSON_SCANNER*/"],
					 ["COMET [44]", "44 /*COMET*/"],
					 ["FIREWORKS [45]", "45 /*FIREWORKS*/"],
					 ["FIREWORKS_RANDOM [46]", "46 /*FIREWORKS_RANDOM*/"],
					 ["MERRY_CHRISTMAS [47]", "47 /*MERRY_CHRISTMAS*/"],
					 ["FIRE_FLICKER [48]", "48 /*FIRE_FLICKER*/"],
					 ["FIRE_FLICKER_SOFT [49]", "49 /*FIRE_FLICKER_SOFT*/"],
					 ["FIRE_FLICKER_INTENSE [50]", "50 /*FIRE_FLICKER_INTENSE*/"],
					 ["CIRCUS_COMBUSTUS [51]", "51 /*CIRCUS_COMBUSTUS*/"],
					 ["HALLOWEEN [52]", "52 /*HALLOWEEN*/"],
					 ["BICOLOR_CHASE [53]", "53 /*BICOLOR_CHASE*/"],
					 ["TRICOLOR_CHASE [54]", "54 /*TRICOLOR_CHASE*/"],
					 ["ICU [55]", "55 /*ICU*/"],
					 ["CUSTOM [56]", "56 /*CUSTOM*/"]

					 ])
				 , "EFFECT");
			   this.setOutput(true, null);
			   this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			   this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_EFFECT_TIP);
			 this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
		   },
		   getBlockType: function() {
			 return Blockly.Types.NUMBER;
		   }
		 };

	 Blockly.Blocks['kniwwelino_neopixelsetStripColorFromString'] = {
			init: function() {
			  this.setInputsInline(true);
			  this.appendDummyInput().appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"));
			  this.appendValueInput("COLOR")
				  .appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETSTRIPCOLOR)
				  .setCheck(Blockly.Types.TEXT.checkList);
			  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
			  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
			  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETSTRIPCOLOR_TIP);
			  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
			}
		 };

	 Blockly.Blocks['kniwwelino_neopixelsetPixelColorFromString'] = {
				init: function() {
				  this.setInputsInline(true);
				  this.appendDummyInput().appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"));
				  this.appendValueInput("PIXEL")
					  .setCheck(Blockly.Types.NUMBER.checkList)
					  .appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETPIXELCOLOR);
				  this.appendValueInput("COLOR")
					  .appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETPIXELCOLOR2)
					  .setCheck(Blockly.Types.TEXT.checkList);

				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETSPIXELCOLOR_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
				}
			 };

	 Blockly.Blocks['kniwwelino_neopixelsetSpeed'] = {
						init: function() {
						  this.setInputsInline(true);
						  this.appendDummyInput().appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"));
						  this.appendValueInput("SPEED")
						  .appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETSPEED)
						  .setCheck(Blockly.Types.NUMBER.checkList);
						  this.setPreviousStatement(true, null);
						  this.setNextStatement(true, null);
						  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
						  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETSPEED_TIP);
						  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
						}
					 };

	 Blockly.Blocks['kniwwelino_neopixelsetBrightness'] = {
				init: function() {
				  this.setInputsInline(true);
				  this.appendDummyInput().appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"));
				  this.appendValueInput("BRIGHTNESS")
				  .appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETBRIGHTNESS)
				  .setCheck(Blockly.Types.NUMBER.checkList);
				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_SETBRIGHTNESS_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
				}
			 };

	 Blockly.Blocks['kniwwelino_neopixelStop'] = {
				init: function() {
				  this.setInputsInline(true);
				  this.appendDummyInput().appendField(new Blockly.FieldImage("../ardublockly/font/font-awesome-4.7.0/neopixel.svg", 15, 15, "*"))
						  .appendField(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_STOP);

				  this.setPreviousStatement(true, null);
				  this.setNextStatement(true, null);
				  this.setColour(Blockly.Blocks.kniwwelino_RGB.HUE);
				  this.setTooltip(Blockly.Msg.KNIWWELINO_RGB_NEOPIXEL_STOP_TIP);
				  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/neopixel');
				}
			 };

	   //===============================DISPLAY=================================

	   Blockly.Blocks['kniwwelino_HD44780_setup'] = {
		 init: function() {
		  this.setInputsInline(true);
		  this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_DISPLAY_INIT_HD44780)
		   .appendField(new Blockly.FieldNumber(16, 0, 40, 0), 'LCD_COLS')
		   .appendField(Blockly.Msg.KNIWWELINO_DISPLAY_COLS + Blockly.Msg.KNIWWELINO_DISPLAY_INIT_HD44780_AND);
		 this.appendDummyInput()
			.appendField(new Blockly.FieldNumber(2, 0, 4, 0), 'LCD_ROWS')
		  this.appendDummyInput()
		   .appendField( Blockly.Msg.KNIWWELINO_DISPLAY_ROWS+ " " +Blockly.Msg.KNIWWELINO_SENSOR_AT_ADDRESS)
		   .appendField(new Blockly.FieldTextInput('0x27'), 'ADDRESS');
		   // .appendField(new Blockly.FieldDropdown(
		   //      [
		   //        ["0x27","0x27"],
		   //        ["0x3F","0x3F"]
		   //      ]), "ADDRESS");
		  this.setColour(Blockly.Blocks.kniwwelino_DISPLAY.HUE);
		  this.setTooltip(Blockly.Msg.KNIWWELINO_DISPLAY_INIT_HD44780_TIP);
		  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		 }
	   };

	   Blockly.Blocks['kniwwelino_HD44780_setCurser'] = {
		 init: function() {
		  this.setInputsInline(true);
		  this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_DISPLAY_SETCURSER_HD44780 +' '+ Blockly.Msg.KNIWWELINO_DISPLAY_COL);
		  this.appendValueInput("LCD_COL");
		  this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_DISPLAY_INIT_HD44780_AND + ' ' + Blockly.Msg.KNIWWELINO_DISPLAY_ROW);
		  this.appendValueInput("LCD_ROW")
		  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
		  this.setColour(Blockly.Blocks.kniwwelino_DISPLAY.HUE);
		  this.setTooltip(Blockly.Msg.KNIWWELINO_DISPLAY_INIT_HD44780_SETCURSER_TIP);
		  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		 }
	   };

	   Blockly.Blocks['kniwwelino_HD44780_print'] = {
		 init: function() {
		  this.setInputsInline(true);
		  this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_DISPLAY_PRINT_HD44780)
		  this.appendValueInput("TEXT");
		  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
		  this.setColour(Blockly.Blocks.kniwwelino_DISPLAY.HUE);
		  this.setTooltip(Blockly.Msg.KNIWWELINO_DISPLAY_PRINT_HD44780_TIP);
		  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		 }
	   };

	   Blockly.Blocks['kniwwelino_HD44780_clear'] = {
		 init: function() {
		  this.setInputsInline(true);
		  this.appendDummyInput().appendField(Blockly.Msg.KNIWWELINO_DISPLAY_CLEAR_HD44780)
		  this.setPreviousStatement(true, null);
			  this.setNextStatement(true, null);
		  this.setColour(Blockly.Blocks.kniwwelino_DISPLAY.HUE);
		  this.setTooltip(Blockly.Msg.KNIWWELINO_DISPLAY_CLEAR_HD44780_TIP);
		  this.setHelpUrl(Blockly.Msg.KNIWWELINO_HELPURL + '../extensions/exti2csensor');
		 }
	   };
