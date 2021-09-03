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
// TODO: THIS IS WHERE CONNECT STUFF GOES
'  <category id = "catConnect" name="Connect Moods">' +
// '    <block type="connect_test_block"></block>' +
'    <block type="connect_mood_happy"></block>' +
'    <block type="connect_mood_sad"></block>' +
'    <block type="connect_mood_heart"></block>' +
'    <block type="connect_mood_skull"></block>' +
'    <block type="connect_mood_duck"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catConnectServos" name="Connect Servos">' +
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
'    <block type="connect_servo_animation_block">' +
        '<value name="FROM_ANGLE">' +
'        <shadow type="math_number">' +
'          <field name="NUM">45</field>' +
'        </shadow>' +
'      </value>' +
        '<value name="TO_ANGLE">' +
'        <shadow type="math_number">' +
'          <field name="NUM">135</field>' +
'        </shadow>' +
'      </value>' +
        '<value name="NUM_SEQUENCES">' +
'        <shadow type="math_number">' +
'          <field name="NUM">3</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="connect_servo_animation_container_block">' +
        '<value name="FROM_ANGLE">' +
'        <shadow type="math_number">' +
'          <field name="NUM">45</field>' +
'        </shadow>' +
'      </value>' +
        '<value name="TO_ANGLE">' +
'        <shadow type="math_number">' +
'          <field name="NUM">135</field>' +
'        </shadow>' +
'      </value>' +
        '<value name="NUM_SEQUENCES">' +
'        <shadow type="math_number">' +
'          <field name="NUM">3</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="connect_wait_for_servo_move">' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catConnectSetup" name="Connect Setup">' +
'     <block type="connect_activeHours_block"></block>' +
'  </category>' +
// END CONNECT STUFF
'  <sep></sep>' +
'  <category id="catRGB" name="LED">' +
'    <block type="kniwwelino_RGBsetColorEffect">' +
'      <value name="COLOR">' +
'        <shadow type="kniwwelino_RGBselectColor"></shadow>' +
'      </value>' +
'  </block>' +
'    <block type="kniwwelino_RGBclear"></block>' +
'    <block type="kniwwelino_RGBselectColor"></block>' +
'    <block type="kniwwelino_HUEselectColor">' +
'		      <value name="HUE">' +
'		        <shadow type="math_number">' +
'		          <field name="NUM">0</field>' +
'		        </shadow>' +
'		      </value>' +
'    </block>' +
'    <block type="kniwwelino_RGBsetColorFromString" adv="true">' +
'       <value name="COLOR">' +
'    		<block type="kniwwelino_RGBselectEffect">'+
'		      <value name="COLOR">' +
'		        <shadow type="kniwwelino_RGBselectColor">' +
'		        </shadow>' +
'		      </value>' +
'		      <value name="DURATION">' +
'		        <shadow type="math_number">' +
'		          <field name="NUM">3</field>' +
'		        </shadow>' +
'		      </value>' +
'		    </block>' +
'		</value>' +
'	 </block>' +
//'	<block type="kniwwelino_RGBselectEffect" adv="true">'+
//'		      <value name="COLOR">' +
//'		        <shadow type="kniwwelino_RGBselectColor">' +
//'		        </shadow>' +
//'		      </value>' +
//'		      <value name="DURATION">' +
//'		        <shadow type="math_number">' +
//'		          <field name="NUM">3</field>' +
//'		        </shadow>' +
//'		      </value>' +
//'	 </block>' +
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

'	<block type="kniwwelino_neopixelInit" adv="true"></block>' +
'	<block type="kniwwelino_neopixelSetEffect" adv="true">' +
'      <value name="EFFECT">' +
'        <block type="kniwwelino_neopixelEffectChooser">' +
'          <field name="EFFECT">1 /*BLINK*/</field>' +
'        </block>' +
'      </value>' +
'   </block>' +
'	<block type="kniwwelino_neopixelsetStripColorFromString" adv="true">' +
'		      <value name="COLOR">' +
'		        <shadow type="kniwwelino_RGBselectColor">' +
'		        </shadow>' +
'		      </value>' +
'   </block>' +
'	<block type="kniwwelino_neopixelsetPixelColorFromString" adv="true">' +
'      <value name="PIXEL">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'		      <value name="COLOR">' +
'		        <shadow type="kniwwelino_RGBselectColor">' +
'		        </shadow>' +
'		      </value>' +
'   </block>' +
'	<block type="kniwwelino_neopixelsetSpeed" adv="true">' +
'		      <value name="SPEED">' +
'     			   <shadow type="math_number">' +
'      				    <field name="NUM">200</field>' +
'      			  </shadow>' +
'		      </value>' +
'   </block>' +
'	<block type="kniwwelino_neopixelsetBrightness" adv="true">' +
'		      <value name="BRIGHTNESS">' +
'     			   <shadow type="math_number">' +
'      				    <field name="NUM">200</field>' +
'      			  </shadow>' +
'		      </value>' +
'   </block>' +
'	<block type="kniwwelino_neopixelStop" adv="true"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMatrix" name="Matrix" adv="true">' +
'    <block type="kniwwelino_MATRIXwrite">' +
'      <value name="TEXT">' +
'        <shadow type="text">' +
'          <field name="TEXT">Hello Kniwwelino</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MATRIXclear"></block>' +
'    <block type="kniwwelino_MATRIXdrawIcon">' +
'    <value name="ICON">' +
'        <block type="kniwwelino_MATRIXdrawIconCreator"></block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MATRIXdrawIcon" adv="true">' +
'    	<value name="ICON">' +
'    	<block type="kniwwelino_MATRIXselectIconEffect">' +
'    		<value name="ICON">' +
'    	    <block type="kniwwelino_MATRIXdrawIconCreator"></block>' +
'    	  </value>' +
'	 	  <value name="DURATION">' +
'			 <shadow type="math_number">' +
'			    <field name="NUM">3</field>' +
'			 </shadow>' +
'	 		</value>' +
'   	 </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MATRIXselectIconEffect" adv="true">' +
'    	<value name="ICON">' +
'        <block type="kniwwelino_MATRIXdrawIconCreator"></block>' +
'      </value>' +
'	   <value name="DURATION">' +
'		 <shadow type="math_number">' +
'		    <field name="NUM">3</field>' +
'		 </shadow>' +
'	 	</value>' +
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
'    <block type="kniwwelino_MATRIXshowPixels">' +
'    <value name="n">' +
'        <block type="math_number">' +
'          <field name="n">25</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MATRIXreadPixel">' +
'    <value name="X_READ">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    <value name="Y_READ">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MATRIXsetBrightness"></block>' +
'    <block type="kniwwelino_MATRIXsetScrollSpeed"></block>' +
'    <block type="kniwwelino_MATRIXsetBlinkRate"></block>' +
'    <block type="kniwwelino_MATRIXsetRotation" adv="true"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catButtons" name="Buttons" adv="true">' +
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
'  <category id="catMQTT" name="Messages" adv="true">' +
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
'    <block type="kniwwelino_MQTTsubscribePublic">' +
'      <value name="TOPIC">' +
'        <shadow type="text">' +
'          <field name="TEXT">MATRIX/TEXT</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_MQTTsetUserBroker" adv="true"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic" adv="true">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary" adv="true"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables" adv="true">' +
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
'  <category id="catLoops" name="Loops" adv="true">' +
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
'  <category id="catMath" name="Math" adv="true">' +
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
'    <block type="math_random_float" adv="true"></block>' +
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
'    <block type="enhanced_map" adv="true">' +
'      <value name="SMIN">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="SMAX">' +
'        <shadow type="math_number">' +
'          <field name="NUM">1024</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="DMIN">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="DMAX">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="math_single" adv="true"></block>' +
'    <block type="math_trig" adv="true"></block>' +
'    <block type="math_constant" adv="true"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text" adv="true">' +
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
'  <category id="catTime" name="Time" adv="true">' +
'    <block type="kniwwelino_sleepsec">' +
'      <value name="DELAY_TIME_SEC">' +
'        <shadow type="math_number">' +
'          <field name="NUM">5</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_sleep" adv="true">' +
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
'    <block type="time_delaymicros" adv="true">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <shadow type="math_number">' +
'          <field name="NUM">10</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_getTime" adv="true"></block>' +
'    <block type="kniwwelino_getTimeInt" adv="true"></block>' +
'    <block type="time_seconds"></block>' +
'    <block type="time_millis" adv="true"></block>' +
//'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep adv="true"></sep>' +
'  <category id="catInputOutput" name="Input/Output" adv="true">' +
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
'    <block type="io_analogwrite">' +
'      <value name="NUM">' +
'        <block type="math_number">255</block>' +
'      </value>' +
'    </block>' +
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
'  <sep adv="true"></sep>' +

'  <category id="catAudio" name="Audio" adv="true">' +
'    <block type="kniwwelino_playNote">' +
'      <value name="NOTE">' +
'        <shadow type="kniwwelino_toneChooser">' +
'       	<field name="NOTE">NOTE_C</field>' +
'         <field name="OCTAVE">4</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="NOTE_DURATION">' +
'        <shadow type="math_number">' +
'          <field name="NUM">4</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_playTone">' +
'      <value name="NOTE">' +
'        <shadow type="kniwwelino_toneChooser">' +
'       	<field name="NOTE">NOTE_C</field>' +
'         <field name="OCTAVE">4</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_playTone">' +
'      <value name="NOTE">' +
'        <shadow type="math_number">' +
'       	<field name="NUM">440</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_toneOff"></block>' +
'    <block type="kniwwelino_toneChooser">' +
'       <field name="NOTE">NOTE_C</field>' +
'       <field name="OCTAVE">4</field>' +
'    </block>' +
'  </category>' +
'  <sep adv="true"></sep>' +
'  <category id="catMotors" name="Motors" adv="true">' +
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
'  <sep adv="true"></sep>' +
'  <category id="catSensors" name="Sensors" adv="true">' +
'    <block type="kniwwelino_BME280getValue"></block>' +
'    <block type="kniwwelino_BME680getValue"></block>' +
'    <block type="kniwwelino_SHT30getValue"></block>' +
'    <block type="kniwwelino_HTU21DgetValue"></block>' +
'    <block type="kniwwelino_DS18B20getValue"></block>' +
'    <block type="kniwwelino_BH1750getLightLevel"></block>' +
'    <block type="kniwwelino_ADPS9960getValue"></block>' +
//'    <block type="kniwwelino_HCSR04getValue"></block>' +
'    <block type="kniwwelino_HCSR04getValue1Pin"></block>' +
'    <block type="kniwwelino_HCSR04getValue2Pin"></block>' +
'		 <block type="kniwwelino_MQTTsubscribePublic">' +
'      <value name="TOPIC">' +
'        <block type="kniwwelino_WeatherTopicChooser">' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="kniwwelino_WeatherConstChooser"></block>' +
'  </category>' +
'  <sep adv="true"></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE" adv="true"></category>' +
'  <sep></sep>' +
// TODO: Connect: comment out Kniwwelino category
//                (we're replacing the sketch root blocks)
// '  <category id="catKniwwelino" name="Kniwwelino" adv="true">' +
// '    <block type="arduino_functions_setup"></block>' +
// '    <block type="arduino_functions_loop"></block>' +
// '    <block type="kniwwelino_log" adv="true">' +
// '      <value name="TEXT">' +
// '        <shadow type="text">""</shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="kniwwelino_logln" adv="true">' +
// '      <value name="TEXT">' +
// '        <shadow type="text">""</shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="kniwwelino_getID" adv="true"></block>' +
// '    <block type="kniwwelino_getName" adv="true"></block>' +
// '    <block type="kniwwelino_getIP" adv="true"></block>' +
// '    <block type="kniwwelino_getMAC" adv="true"></block>' +
// '    <block type="kniwwelino_getSSID" adv="true"></block>' +
// '  </category>' +
'  <sep adv="true"></sep>' +
//'  <category id="catOther" name="Other" adv="true">' +
//'  </category>' +
// '  <category id="catDisplay" name="Display" adv="true">' +
// '    <block type="kniwwelino_HD44780_setup"></block>' +
// '    <block type="kniwwelino_HD44780_setCurser">' +
// '      <value name="LCD_COL">' +
// '        <shadow type="math_number">' +
// '          <field name="NUM">0</field>' +
// '        </shadow>' +
// '      </value>' +
// '      <value name="LCD_ROW">' +
// '        <shadow type="math_number">' +
// '          <field name="NUM">0</field>' +
// '        </shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="kniwwelino_HD44780_print">' +
// '      <value name="TEXT">' +
// '        <shadow type="text">""</shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="kniwwelino_HD44780_clear"></block>' +
// '  </category>' +
'</xml>';
