/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
//'  <category id="catLogic" name="Logic">' +
//'    <block type="controls_if"></block>' +
//'    <block type="logic_compare"></block>' +
//'    <block type="logic_operation"></block>' +
//'    <block type="logic_negate"></block>' +
//'    <block type="logic_boolean"></block>' +
//'    <block type="logic_null"></block>' +
//'    <block type="logic_ternary"></block>' +
//'  </category>' +
//'  <sep></sep>' +


'  <category id="catMatrix" name="Matrix">' +
'    <block type="kniwwelino_MATRIXwrite">' +
'      <value name="TEXT">' +
'        <shadow type="text">' +
'          <field name="TEXT">Hello Kniwwelino</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
// '    <block type="kniwwelino_MATRIXdrawIconChooser"></block>' +
'    <block type="kniwwelino_MATRIXclear"></block>' +
'    <block type="kniwwelino_MATRIXdrawIcon">' +
'    <value name="ICON">' +
'        <block type="kniwwelino_MATRIXdrawIconCreator"></block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MATRIXIconChooser"></block>' +
'    <block type="kniwwelino_MATRIXdrawIconCreator"></block>' +
'    <block type="kniwwelino_MATRIXdrawPixel">' +
'    <value name="X">' +
'        <block type="math_number">' +
'          <field name="X">1</field>' +
'        </block>' +
'      </value>' +
'    <value name="Y">' +
'        <block type="math_number">' +
'          <field name="Y">1</field>' +
'        </block>' +
'      </value>' +
'    <value name="STATE">' +
'        <block type="math_number">' +
'          <field name="STATE">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MATRIXsetBrightness"></block>' +
'    <block type="kniwwelino_MATRIXsetBlinkRate"></block>' +
'  </category>' +
'  <sep></sep>' +
// TODO: THIS IS WHERE CONNECT STUFF GOES
'  <category id = "catConnect" name="conNecT">' +
'    <block type="connect_test_block"></block>' +
'    <block type="connect_smooth_servo_block">' +
'      <value name="SERVO_ANGLE">' +
'        <shadow type="math_number">' +
'          <field name="NUM">90</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="SWEEP_RATE">' +
'          <shadow type="math_number">' +
'              <field name="NUM">30</field>' +
'          </shadow>' +
'      </value>' +
'    </block>"' +
'    <block type="connect_wait_for_servo_move">' +
'    </block>' +
'    <block type="connect_on_mood_message">' +
'    </block>' +
'    <block type="connect_connected_device">' +
'    </block>' +
'  </category>' +
// END CONNECT STUFF
'  <sep></sep>' +
'  <category id="catButtons" name="Buttons">' +
'    <block type="controls_if">' +
'      <value name="IF0">' +
'    		<block type="kniwwelino_BUTTONclicked"></block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_if">' +
'      <mutation elseif="2"></mutation>' +
'      <value name="IF0">' +
'    		<block type="kniwwelino_BUTTONclicked">' +
'    			<field name="BUTTON">AandB</field>' +
'           </block>' +
'      </value>' +
'      <value name="IF1">' +
'    		<block type="kniwwelino_BUTTONclicked">' +
'    			<field name="BUTTON">A</field>' +
'           </block>' +
'      </value>' +
'      <value name="IF2">' +
'    		<block type="kniwwelino_BUTTONclicked">' +
'    			<field name="BUTTON">B</field>' +
'           </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_BUTTONclicked"></block>' +
'    <block type="kniwwelino_BUTTONdown"></block>' +
'    <block type="kniwwelino_PINbuttonClicked"></block>' +
'    <block type="kniwwelino_PINbuttonDown"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catRGB" name="LED">' +
//'    <block type="kniwwelino_RGBsetColor"></block>' +
'    <block type="kniwwelino_RGBsetColorEffect">' +
'      <value name="COLOR">' +
'        <shadow type="kniwwelino_RGBselectColor"></shadow>' +
'      </value>' +
'  </block>' +
'    <block type="kniwwelino_RGBclear"></block>' +
'    <block type="kniwwelino_RGBselectColor"></block>' +
'    <block type="kniwwelino_RGBsetColorFromString">' +
'      <value name="COLOR">' +
'        <shadow type="text">' +
'          <field name="TEXT">00FF00</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_RGBsetColorFromString">' +
'      <value name="COLOR">' +
'        <block type="kniwwelino_RGBsetRGB">' +
'          <value name="RED">' +
'             <shadow type="math_number">' +
'               <field name="NUM">0</field>' +
'             </shadow>' +
'          </value>' +
'          <value name="GREEN">' +
'             <shadow type="math_number">' +
'               <field name="NUM">0</field>' +
'             </shadow>' +
'          </value>' +
'          <value name="BLUE">' +
'             <shadow type="math_number">' +
'               <field name="NUM">0</field>' +
'             </shadow>' +
'          </value>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_RGBsetEffect"></block>' +
'    <block type="kniwwelino_RGBsetBrightnessFromVariable">' +
'      <value name="BRIGHTNESS">' +
'        <shadow type="math_number">' +
'          <field name="NUM">200</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_PINsetEffect"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMQTT" name="Messages">' +
'    <block type="kniwwelino_MQTTsetGroup">' +
'      <value name="GROUP">' +
'        <block type="text">' +
'          <field name="TEXT">myFriends</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MQTTconnectRGB"></block>' +
'    <block type="kniwwelino_MQTTconnectMATRIX"></block>' +
'    <block type="kniwwelino_MQTTpublish">' +
'      <value name="MESSAGE">' +
'        <shadow type="text">' +
'          <field name="TEXT">Hello Friends!</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="TOPIC">' +
'        <shadow type="text">' +
'          <field name="TEXT">MATRIX/TEXT</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MQTTpublish">' +
'      <value name="MESSAGE">' +
'        <shadow type="kniwwelino_MATRIXdrawIconCreator">' +
'          <field name="TEXT"></field>' +
'        </shadow>' +
'      </value>' +
'      <value name="TOPIC">' +
'        <shadow type="text">' +
'          <field name="TEXT">MATRIX/ICON</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MQTTpublish">' +
'      <value name="MESSAGE">' +
'        <shadow type="kniwwelino_RGBselectColor">' +
'          <field name="TEXT"></field>' +
'        </shadow>' +
'      </value>' +
'      <value name="TOPIC">' +
'        <shadow type="text">' +
'          <field name="TEXT">RGB/COLOR</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MQTTsubscribe">' +
'      <value name="TOPIC">' +
'        <shadow type="text">' +
'          <field name="TEXT">MATRIX/TEXT</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'  </category>' +

'  <sep></sep>' +
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="base_map"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="kniwwelino_sleepsec">' +
'      <value name="DELAY_TIME_SEC">' +
'        <shadow type="math_number">' +
'          <field name="NUM">5</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_sleep">' +
'      <value name="DELAY_TIME_MILI">' +
'        <shadow type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
//'    <block type="time_delay">' +
//'      <value name="DELAY_TIME_MILI">' +
//'        <block type="math_number">' +
//'          <field name="NUM">1000</field>' +
//'        </block>' +
//'      </value>' +
//'    </block>' +
//'    <block type="time_delaymicros">' +
//'      <value name="DELAY_TIME_MICRO">' +
//'        <block type="math_number">' +
//'          <field name="NUM">100</field>' +
//'        </block>' +
//'      </value>' +
//'    </block>' +
'    <block type="time_seconds"></block>' +
'    <block type="time_millis"></block>' +
//'    <block type="time_micros"></block>' +
//'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="controls_if">' +
'      <value name="IF0">' +
'        <block type="logic_compare">' +
'          <value name="A">' +
'            <block type="io_digitalread"></block>' +
'          </value>' +
'          <value name="B">' +
'            <block type="io_highlow">' +
'              <field name="STATE">LOW</field>' +
'            </block>' +
'          </value>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
//'    <block type="io_builtin_led">' +
//'      <value name="STATE">' +
//'        <block type="io_highlow"></block>' +
//'      </value>' +
//'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow">' +
'              <field name="STATE">LOW</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow">' +
'              <field name="STATE">LOW</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'    </block>' +
'  </category>' +
//'  <sep></sep>' +
//'  <sep></sep>' +
//'  <category id="catAudio" name="Audio">' +
//'    <block type="io_tone">' +
//'      <field name="TONEPIN">0</field>' +
//'      <value name="FREQUENCY">' +
//'        <shadow type="math_number">' +
//'          <field name="NUM">220</field>' +
//'        </shadow>' +
//'      </value>' +
//'    </block>' +
//'    <block type="io_notone"></block>' +
//'  </category>' +
'  <sep></sep>' +
'  <category id="catMotors" name="Motors">' +
'    <block type="servo_write">' +
'      <value name="SERVO_ANGLE">' +
'        <shadow type="math_number">' +
'          <field name="NUM">90</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="servo_read"></block>' +
//'    <block type="stepper_config">' +
//'      <field name="STEPPER_NUMBER_OF_PINS">2</field>' +
//'      <field name="STEPPER_PIN1">1</field>' +
//'      <field name="STEPPER_PIN2">2</field>' +
//'      <value name="STEPPER_STEPS">' +
//'        <block type="math_number">' +
//'          <field name="NUM">100</field>' +
//'        </block>' +
//'      </value>' +
//'      <value name="STEPPER_SPEED">' +
//'        <block type="math_number">' +
//'          <field name="NUM">10</field>' +
//'        </block>' +
//'      </value>' +
//'    </block>' +
//'    <block type="stepper_step">' +
//'      <value name="STEPPER_STEPS">' +
//'        <block type="math_number">' +
//'          <field name="NUM">10</field>' +
//'        </block>' +
//'      </value>' +
//'    </block>' +
'  </category>' +
//'  <sep></sep>' +
//'  <category id="catComms" name="Comms">' +
//'    <block type="serial_setup"></block>' +
//'    <block type="serial_print"></block>' +
//'    <block type="text_prompt_ext">' +
//'      <value name="TEXT">' +
//'        <block type="text"></block>' +
//'      </value>' +
//'    </block>' +
//'    <block type="spi_setup"></block>' +
//'    <block type="spi_transfer"></block>' +
//'    <block type="spi_transfer_return"></block>' +
//'  </category>' +
'  <sep></sep>' +
'  <category id="catSensors" name="Sensors">' +
'    <block type="kniwwelino_BME280getValue"></block>' +
'    <block type="kniwwelino_BME680getValue"></block>' +
'    <block type="kniwwelino_SHT30getValue"></block>' +
'    <block type="kniwwelino_BH1750getLightLevel"></block>' +
'    <block type="kniwwelino_ADPS9960getValue"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category id="catKniwwelino" name="Kniwwelino">' +
'    <block type="arduino_functions_setup"></block>' +
'    <block type="arduino_functions_loop"></block>' +
'    <block type="kniwwelino_log">' +
'      <value name="TEXT">' +
'        <shadow type="text">""</shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_logln">' +
'      <value name="TEXT">' +
'        <shadow type="text">""</shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_getID"></block>' +
'    <block type="kniwwelino_getName"></block>' +
'    <block type="kniwwelino_getIP"></block>' +
'    <block type="kniwwelino_getMAC"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catOther" name="Other">' +
'  </category>' +
'</xml>';
