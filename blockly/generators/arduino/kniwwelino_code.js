/**
 *  @license Copyright (C) 2017 Luxembourg Institute of Science and Technology.
 * KinwwelinoBlockly is Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Kniwwelino Library.
 * Kniwwelino library docs: https://doku.kniwwelino.lu/en/reference/
 */
'use strict';

goog.provide('Blockly.Arduino.kniwwelino');

goog.require('Blockly.Arduino');

function kniwwelinoBaseCode() {
	Blockly.Arduino.addInclude('kniwwelino', '#include <Kniwwelino.h>');
	Blockly.Arduino.addSetup('kniwwelinoBegin', '//Initialize the Kniwwelino Board\n  Kniwwelino.begin("'+Ardublockly.getSketchName(20)+'", true, true, false); // Wifi=true, Fastboot=true, MQTT Logging=false\n', true);

	// Adding something to the loop() is not possible right now.
	// please add the following code to the Blockly.Arduino.finish function in generators/arduino.js
	//
	// code = code + '\nKniwwelino.loop(); // do background stuff...';
}

function kniwwelinoMQTTCode() {
	Blockly.Arduino.addSetup('MQTTonMessage', 'Kniwwelino.MQTTonMessage(messageReceived);', true);
}


//==== Kniwwelino functions===================================================

Blockly.Arduino['kniwwelino_getID'] = function(block) {
	kniwwelinoBaseCode();
	return ['Kniwwelino.getID()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_getName'] = function(block) {
	kniwwelinoBaseCode();
	return ['Kniwwelino.getName()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_getIP'] = function(block) {
	kniwwelinoBaseCode();
	return ['Kniwwelino.getIP()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_getMAC'] = function(block) {
	kniwwelinoBaseCode();
	return ['Kniwwelino.getMAC()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_getSSID'] = function(block) {
	kniwwelinoBaseCode();
	return ['WiFi.SSID()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_log'] = function(block) {
	kniwwelinoBaseCode();
	var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return  'Kniwwelino.log(String('+text+'));\n';
};

Blockly.Arduino['kniwwelino_logln'] = function(block) {
	kniwwelinoBaseCode();
	var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return  'Kniwwelino.logln(String('+text+'));\n';
};


Blockly.Arduino['kniwwelino_sleep'] = function(block) {
	kniwwelinoBaseCode();
	var delayTime = Blockly.Arduino.valueToCode(
	      block, 'DELAY_TIME_MILI', Blockly.Arduino.ORDER_ATOMIC) || '0';
	//delayTime = Math.round(delayTime);
	return 'Kniwwelino.sleep((unsigned long) ' + delayTime + ');\n' ;
};

Blockly.Arduino['kniwwelino_sleepsec'] = function(block) {
	kniwwelinoBaseCode();
	var delayTime = Blockly.Arduino.valueToCode(
	      block, 'DELAY_TIME_SEC', Blockly.Arduino.ORDER_ATOMIC) || '0';
	//delayTime = Math.round(delayTime * 1000);
	return 'Kniwwelino.sleep((unsigned long) (' + delayTime+ '*1000) );\n' ;
};

Blockly.Arduino['kniwwelino_getTime'] = function(block) {
	kniwwelinoBaseCode();
	var value = block.getFieldValue('FORMAT');
	var codeStr = "";
	if (value == 'DATETIME')  {
		codeStr = 'Kniwwelino.getTime()';
	} else if (value == 'DATE')  {
		codeStr = 'String("") + (day()<10?"0":"") + day() + "." + (month()<10?"0":"") + month() + "." + year()';
	} else if (value == 'TIME')  {
		codeStr = 'String("") + (hour()<10?"0":"") + hour() + ":" + (minute()<10?"0":"") + minute() + ":" + (second()<10?"0":"") + second()';
	} else if (value == 'HOUR')  {
		codeStr = 'String(hour())';
	} else if (value == 'MINUTE')  {
		codeStr = 'String(minute())';
	} else if (value == 'SECOND')  {
		codeStr = 'String(second())';
	}
	return [codeStr, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_getTimeInt'] = function(block) {
	kniwwelinoBaseCode();
	var value = block.getFieldValue('FORMAT');
	var codeStr = "";
	if (value == 'YEAR')  {
		codeStr = 'year()';
	} else if (value == 'MONTH')  {
		codeStr = 'month()';
	} else if (value == 'DAY')  {
		codeStr = 'day()';
	} else if (value == 'HOUR')  {
		codeStr = 'hour()';
	} else if (value == 'MINUTE')  {
		codeStr = 'minute()';
	} else if (value == 'SECOND')  {
		codeStr = 'second()';
	}
	return [codeStr, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_PINsetEffect'] = function(block) {
	kniwwelinoBaseCode();

	var pin = block.getFieldValue('PIN');
	Blockly.Arduino.reservePin(block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

	var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
	Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

	return 'Kniwwelino.PINsetEffect(' + pin + ', ' +
		 block.getFieldValue('EFFECT') + ');\n';
};

Blockly.Arduino['kniwwelino_PINbuttonDown'] = function(block) {
	kniwwelinoBaseCode();

	var pin = block.getFieldValue('PIN');
	Blockly.Arduino.reservePin(block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

	var pinSetupCode = 'Kniwwelino.PINenableButton(' + pin + ');';
	Blockly.Arduino.addSetup('ioButton_' + pin, pinSetupCode, false);

	var pin = block.getFieldValue('PIN');
	return ['Kniwwelino.PINbuttonDown('+pin+')', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_PINbuttonClicked'] = function(block) {
	kniwwelinoBaseCode();

	var pin = block.getFieldValue('PIN');
	Blockly.Arduino.reservePin(block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

	var pinSetupCode = 'Kniwwelino.PINenableButton(' + pin + ');';
	Blockly.Arduino.addSetup('ioButton_' + pin, pinSetupCode, false);

	var button = block.getFieldValue('BUTTON');
	var pin = block.getFieldValue('PIN');
	return ['Kniwwelino.PINbuttonClicked('+pin+')', Blockly.Arduino.ORDER_ATOMIC];
};


//==== RGB LED  functions ====================================================

Blockly.Arduino['kniwwelino_RGBselectColor'] = function(block) {
	kniwwelinoBaseCode();
	return ['"'+block.getFieldValue('COLOR').replace("#","").toUpperCase()+'"', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_HUEselectColor'] = function(block) {
	kniwwelinoBaseCode();
  var hue = Blockly.Arduino.valueToCode(block, 'HUE', Blockly.Arduino.ORDER_UNARY_POSTFIX);

	return ['Kniwwelino.RGBhue2Hex('+hue+')', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_RGBselectEffect'] = function(block) {
	kniwwelinoBaseCode();
	var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_UNARY_POSTFIX).replace('"',"").replace('"',"");
	var effect = block.getFieldValue('EFFECT');
	var duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	if (duration <=0) duration = -1;
	return ['"'+color+':'+effect+':'+duration+'"', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_RGBsetRGB'] = function(block) {
	kniwwelinoBaseCode();
	var r = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
	var g = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
	var b = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);

	return ['Kniwwelino.RGBcolor2Hex('+r+', '+g+', '+b+')', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_RGBsetColorEffect'] = function(block) {
	kniwwelinoBaseCode();
	var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return 'Kniwwelino.RGBsetColorEffect(String(' + color + '), ' +
		 block.getFieldValue('EFFECT') + ', -1' +');\n';
};

Blockly.Arduino['kniwwelino_RGBsetEffect'] = function(block) {
	kniwwelinoBaseCode();
	return 'Kniwwelino.RGBsetEffect(' + block.getFieldValue('EFFECT') + ', -1' +');\n';
};

Blockly.Arduino['kniwwelino_RGBsetColorFromString'] = function(block) {
	kniwwelinoBaseCode();
	var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return  'Kniwwelino.RGBsetColorEffect(String('+color+'));\n';
};

Blockly.Arduino['kniwwelino_RGBsetBrightness'] = function(block) {
	kniwwelinoBaseCode();
	var brightness = block.getFieldValue('BRIGHTNESS');
	return  'Kniwwelino.RGBsetBrightness(' + brightness + ');\n';
};


Blockly.Arduino['kniwwelino_RGBsetBrightnessFromVariable'] = function(block) {
	kniwwelinoBaseCode();
	var brightness = Blockly.Arduino.valueToCode(
		      block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	// brightness = Math.round(brightness);
	return  'Kniwwelino.RGBsetBrightness((int)' + brightness + ');\n';
};

Blockly.Arduino['kniwwelino_RGBclear'] = function(block) {
	kniwwelinoBaseCode();
	return  'Kniwwelino.RGBclear();\n';
};

//==== LED MATRIX functions ==================================================

Blockly.Arduino['kniwwelino_MATRIXdrawIconCreator'] = function(block) {
	kniwwelinoBaseCode();
	var pixels = "";
	for (var x = 1; x < 6; x++) {
		for (var y = 1; y < 6; y++) {
			var led = x + '_' + y;
			//console.log("LED to read: " + led);
			if (block.getFieldValue(led) == "TRUE") {
				pixels = pixels.concat('1');
			} else {
				pixels = pixels.concat('0');
			}
		}
	}
	return ['String("B' + pixels +'")', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_MATRIXdrawIconChooser'] = function(block) {
	kniwwelinoBaseCode();
	var icon = block.getFieldValue('ICON');
	return 'Kniwwelino.MATRIXdrawIcon(' + icon + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXIconChooser'] = function(block) {
	kniwwelinoBaseCode();
	var icon = block.getFieldValue('ICON_CHOOSER');
	return [icon, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_MATRIXdrawIcon'] = function(block) {
	kniwwelinoBaseCode();
	var icon =  Blockly.Arduino.valueToCode(block, 'ICON', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	if (icon == '') icon = 'String("")';
	return 'Kniwwelino.MATRIXdrawIcon(' + icon + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXselectIconEffect'] = function(block) {
	kniwwelinoBaseCode();
	var icon = Blockly.Arduino.valueToCode(block, 'ICON', Blockly.Arduino.ORDER_UNARY_POSTFIX).replace('String(',"").replace(')',"").replace('"',"").replace('"',"");
	var effect = block.getFieldValue('EFFECT');
	var duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	if (duration <=0) duration = -1;
	return ['"'+icon+':'+effect+':'+duration+'"', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_MATRIXwrite'] = function(block) {
	kniwwelinoBaseCode();
	var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	var type = block.getFieldValue('TYPE');
	if (type == "SCROLL") {
		return 'Kniwwelino.MATRIXwrite(String(' + text + '));\n';
	} else if (type == "WAIT") {
		return 'Kniwwelino.MATRIXwriteAndWait(String(' + text + '));\n';
	} else if (type == "ONCE") {
		return 'Kniwwelino.MATRIXwriteOnce(String(' + text + '));\n';
	}
};

Blockly.Arduino['kniwwelino_MATRIXdrawPixel'] = function(block) {
	kniwwelinoBaseCode();
	var x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	var y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	var state = Blockly.Arduino.valueToCode(block, 'STATE', Blockly.Arduino.ORDER_UNARY_POSTFIX);

	return 'Kniwwelino.MATRIXsetPixel(' + x + ', ' + y + ', ' + state + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXshowPixels'] = function(block) {
	kniwwelinoBaseCode();
	var n = Blockly.Arduino.valueToCode(block, 'n', Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return 'Kniwwelino.MATRIXsetPixels(' + n + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXreadPixel'] = function(block) {
	kniwwelinoBaseCode();
	var x = Blockly.Arduino.valueToCode(block, 'X_READ', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
	var y = Blockly.Arduino.valueToCode(block, 'Y_READ', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';

	return ['Kniwwelino.MATRIXgetPixel(' + x + ', ' + y + ')', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_MATRIXsetBrightness'] = function(block) {
	kniwwelinoBaseCode();
	var brightness = block.getFieldValue('BRIGHTNESS');
	return  'Kniwwelino.MATRIXsetBrightness(' + brightness + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXsetScrollSpeed'] = function(block) {
	kniwwelinoBaseCode();
	var speed = block.getFieldValue('SPEED');
	return  'Kniwwelino.MATRIXsetScrollSpeed(' + speed + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXsetBlinkRate'] = function(block) {
	kniwwelinoBaseCode();
	var blinkrate = block.getFieldValue('RATE');
	return 'Kniwwelino.MATRIXsetBlinkRate(' + blinkrate + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXsetRotation'] = function(block) {
	kniwwelinoBaseCode();
	var rot = block.getFieldValue('ROTATION');
	return 'Kniwwelino.MATRIXsetRotation(' + rot + ');\n';
};

Blockly.Arduino['kniwwelino_MATRIXclear'] = function(block) {
	kniwwelinoBaseCode();
	return  'Kniwwelino.MATRIXclear();\n';
};

//==== Onboard Button functions ==============================================

Blockly.Arduino['kniwwelino_BUTTONdown'] = function(block) {
	kniwwelinoBaseCode();
	var button = block.getFieldValue('BUTTON');
	if (button == 'AandB')  {
		return ['Kniwwelino.BUTTONAdown() && Kniwwelino.BUTTONBdown()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (button == 'AorB')  {
		return ['Kniwwelino.BUTTONAdown() || Kniwwelino.BUTTONBdown()', Blockly.Arduino.ORDER_ATOMIC];
	} else {
		return ['Kniwwelino.BUTTON'+button+'down()', Blockly.Arduino.ORDER_ATOMIC];
	}
};

Blockly.Arduino['kniwwelino_BUTTONclicked'] = function(block) {
	kniwwelinoBaseCode();
	var button = block.getFieldValue('BUTTON');
	if (button == 'AandB')  {
		return ['Kniwwelino.BUTTONABclicked()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (button == 'AorB')  {
		return ['Kniwwelino.BUTTONAclicked() || Kniwwelino.BUTTONBclicked()', Blockly.Arduino.ORDER_ATOMIC];
	} else {
		return ['Kniwwelino.BUTTON'+button+'clicked()', Blockly.Arduino.ORDER_ATOMIC];
	}
};

//==== MQTT functions ==============================================

Blockly.Arduino['kniwwelino_MQTTsetGroup'] = function(block) {
	kniwwelinoBaseCode();
	var group = block.getFieldValue('GROUP');
  group = group.replace(/\".*?\"/g, function(match, contents, offset, input_string) {
    return match.replace(/ +/g, '_');
  });
	Blockly.Arduino.addSetup('kniwwelino_MQTTsetGroup','Kniwwelino.MQTTsetGroup(String("' + group + '"));', true);
	return '';
};

Blockly.Arduino['kniwwelino_MQTTsetUserBroker'] = function(block) {
	kniwwelinoBaseCode();
	var broker = block.getFieldValue('BROKER');
  var port = block.getFieldValue('PORT');
  var user = block.getFieldValue('USER');
  var password = block.getFieldValue('PASSWORD');
	Blockly.Arduino.addSetup('kniwwelino_MQTTUserSetup','Kniwwelino.MQTTUserSetup("'+broker+'", '+port+', "'+user+'", "'+password+'");', true);
	return '';
};

Blockly.Arduino['kniwwelino_MQTTconnectRGB'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addSetup('Kniwwelino.MQTTconnectRGB', 'Kniwwelino.MQTTconnectRGB();', true);
	return  '';
}

Blockly.Arduino['kniwwelino_MQTTconnectMATRIX'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addSetup('Kniwwelino.MQTTconnectMATRIX', 'Kniwwelino.MQTTconnectMATRIX();', true);
	return  '';
}

Blockly.Arduino['kniwwelino_MQTTpublishSimple'] = function(block) {
	kniwwelinoBaseCode();
	var topic = block.getFieldValue('TOPIC');
  topic = topic.replace(/\".*?\"/g, function(match, contents, offset, input_string) {
    return '"'+match.slice(1, -1).trim().replace(/ +/g, '_')+'"';
  });
	var message = Blockly.Arduino.valueToCode(block, 'MESSAGE',Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return  'Kniwwelino.MQTTpublish("'+topic+'", String('+message+'));\n';
};

Blockly.Arduino['kniwwelino_MQTTsubscribe'] = function(block) {
	kniwwelinoBaseCode();
	kniwwelinoMQTTCode();
	var topic = Blockly.Arduino.valueToCode(block, 'TOPIC',Blockly.Arduino.ORDER_UNARY_POSTFIX);
  topic = topic.replace(/\".*?\"/g, function(match, contents, offset, input_string) {
    return '"'+match.slice(1, -1).trim().replace(/ +/g, '_')+'"';
  });
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

	Blockly.Arduino.addKniwwelinoSub(varName, topic);
	Blockly.Arduino.addSetup('kniwwelino_MQTTsubscribe'+topic,'Kniwwelino.MQTTsubscribe(' + topic + ');', true);
	return '';
};

Blockly.Arduino['kniwwelino_MQTTsubscribePublic'] = function(block) {
	kniwwelinoBaseCode();
	kniwwelinoMQTTCode();
	var topic = Blockly.Arduino.valueToCode(block, 'TOPIC',Blockly.Arduino.ORDER_UNARY_POSTFIX);
  topic = topic.replace(/\".*?\"/g, function(match, contents, offset, input_string) {
    return '"'+match.slice(1, -1).trim().replace(/ +/g, '_')+'"';
  });
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

	Blockly.Arduino.addKniwwelinoSub(varName, topic);
	Blockly.Arduino.addSetup('kniwwelino_MQTTsubscribepublic'+topic,'Kniwwelino.MQTTsubscribepublic(' + topic + ');', true);
	return '';
};

Blockly.Arduino['kniwwelino_MQTTpublish'] = function(block) {
	kniwwelinoBaseCode();
	var topic = Blockly.Arduino.valueToCode(block, 'TOPIC',Blockly.Arduino.ORDER_UNARY_POSTFIX);
  topic = topic.replace(/\".*?\"/g, function(match, contents, offset, input_string) {
    return '"'+match.slice(1, -1).trim().replace(/ +/g, '_')+'"';
  });
	var message = Blockly.Arduino.valueToCode(block, 'MESSAGE',Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return  'Kniwwelino.MQTTpublish('+topic+', String('+message+'));\n';
};


//==== SENSORS ==============================================
Blockly.Arduino['kniwwelino_BME280getValue'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('Adafruit_Sensor', '#include "Adafruit_Sensor.h"');
	Blockly.Arduino.addInclude('Adafruit_BME280', '#include "Adafruit_BME280.h"');

	var address = block.getFieldValue('ADDRESS');

	Blockly.Arduino.addDeclaration('Adafruit_BME280_'+address+'', 'Adafruit_BME280 bme280_'+address+';');
	Blockly.Arduino.addSetup('BME280init_'+address+'', 'if(bme280_'+address+'.begin('+address+')) Kniwwelino.logln("BME-280 Sensor Ready"); \n  else Kniwwelino.logln("failed to initialize BME-280 Sensor"); ', true);


	var value = block.getFieldValue('VALUE');
	if (value == 'TEMPERATURE')  {
		return ['bme280_'+address+'.readTemperature()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'HUMIDITY')  {
		return ['bme280_'+address+'.readHumidity()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'PRESSURE')  {
		return ['(bme280_'+address+'.readPressure()/100.0F)', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'HEIGHT')  {
		Blockly.Arduino.addDeclaration('Adafruit_BME280SeaLevel', '#define BME280_SEALEVELPRESSURE_HPA (1013.25)');
		return ['bme280_'+address+'.readAltitude(BME280_SEALEVELPRESSURE_HPA)', Blockly.Arduino.ORDER_ATOMIC];
	}
	return ""
};

Blockly.Arduino['kniwwelino_BME680getValue'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('Adafruit_Sensor', '#include "Adafruit_Sensor.h"');
	Blockly.Arduino.addInclude('Adafruit_BME680', '#include "Adafruit_BME680.h"');

	var address = block.getFieldValue('ADDRESS');

	Blockly.Arduino.addDeclaration('Adafruit_BME680_'+address+'', 'Adafruit_BME680 bme680_'+address+';');
	Blockly.Arduino.addSetup('BME680init_'+address+'', 'if(bme680_'+address+'.begin('+address+')) Kniwwelino.logln("BME-680 Sensor Ready"); \n  else Kniwwelino.logln("failed to initialize BME-680 Sensor"); ', true);

	var value = block.getFieldValue('VALUE');
	if (value == 'TEMPERATURE')  {
		return ['bme680_'+address+'.readTemperature()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'HUMIDITY')  {
		return ['bme680_'+address+'.readHumidity()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'GAS')  {
		return ['bme680_'+address+'.readGas()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'PRESSURE')  {
		return ['(bme680_'+address+'.readPressure()/100.0F)', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'HEIGHT')  {
		Blockly.Arduino.addDeclaration('Adafruit_BME680SeaLevel', '#define BME680_SEALEVELPRESSURE_HPA (1013.25)');
		return ['bme680_'+address+'.readAltitude(BME680_SEALEVELPRESSURE_HPA)', Blockly.Arduino.ORDER_ATOMIC];
	}
	return ""
};

Blockly.Arduino['kniwwelino_SHT30getValue'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('SHT3X', '#include <WEMOS_SHT3X.h>');

	var address = block.getFieldValue('ADDRESS');

	Blockly.Arduino.addDeclaration('SHT3X_'+address+'', 'SHT3X sht30_'+address+'('+address+');');
	Blockly.Arduino.addSetup('SHT3Xinit_'+address+'', 'if(sht30_'+address+'.get()==0) Kniwwelino.logln("SHT30 Sensor Ready"); \n  else Kniwwelino.logln("failed to initialize SHT30 Sensor"); ', true);

	var value = block.getFieldValue('VALUE');
	if (value == 'TEMPERATURE')  {
		return ['sht30_'+address+'.readTemperature()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'HUMIDITY')  {
		return ['sht30_'+address+'.readHumidity()', Blockly.Arduino.ORDER_ATOMIC];
	}
	return ""
};

Blockly.Arduino['kniwwelino_HTU21DgetValue'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('HTU21D', '#include <Adafruit_HTU21DF.h>');

	Blockly.Arduino.addDeclaration('HTU21D', 'Adafruit_HTU21DF htu = Adafruit_HTU21DF();');
	Blockly.Arduino.addSetup('HTU21D', 'if (htu.begin()) Kniwwelino.logln("HTU21D Sensor Ready"); \n  else Kniwwelino.logln("failed to initialize HTU21D Sensor"); ', true);

	var value = block.getFieldValue('VALUE');
	if (value == 'TEMPERATURE')  {
		return ['htu.readTemperature()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'HUMIDITY')  {
		return ['htu.readHumidity()', Blockly.Arduino.ORDER_ATOMIC];
	}
	return ""
};

Blockly.Arduino['kniwwelino_DS18B20getValue'] = function(block) {
	kniwwelinoBaseCode();
	var pin = block.getFieldValue('PIN');
	Blockly.Arduino.addInclude('OneWire', '#include <OneWire.h> //requires https://github.com/PaulStoffregen/OneWire');
	Blockly.Arduino.addInclude('DS18B20', '#include <DS18B20.h> //requires https://github.com/RobTillaart/Arduino/tree/master/libraries/DS18B20');
	Blockly.Arduino.addDeclaration('OneWire_'+pin, 'OneWire oneWire_'+pin+'('+pin+');');
	Blockly.Arduino.addDeclaration('DS18B20_'+pin, 'DS18B20 ds18B20_'+pin+'(&oneWire_'+pin+');');
  Blockly.Arduino.addKniwwelinoWrapperFunctions('ds18B20_'+pin+'_wrapper', 'float ds18B20_'+pin+'_wrapper() {\n  ds18B20_'+pin+'.requestTemperatures();\n  return ds18B20_'+pin+'.getTempC();\n}');
  Blockly.Arduino.addSetup('ds18B20_'+pin+'_begin','ds18B20_'+pin+'.begin();');
  return ['ds18B20_'+pin+'_wrapper()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_BH1750getLightLevel'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('BH1750', '#include <BH1750.h>');

	var address = block.getFieldValue('ADDRESS');

	Blockly.Arduino.addDeclaration('BH1750_'+address+'', 'BH1750 bh1750_'+address+'('+address+');');
	Blockly.Arduino.addSetup('BH1750init_'+address+'', 'if(bh1750_'+address+'.begin()) Kniwwelino.logln("BH1750 Sensor Ready"); \n  else Kniwwelino.logln("failed to initialize BH1750 Sensor"); ', true);
	return ['bh1750_'+address+'.readLightLevel(true)', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_ADPS9960getValue'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('Adafruit_APDS9960', '#include "Adafruit_APDS9960.h"');
	Blockly.Arduino.addDeclaration('Adafruit_APDS9960', 'Adafruit_APDS9960 apds9960;');
	Blockly.Arduino.addSetup('APDS9960init', 'if(apds9960.begin()) Kniwwelino.logln("ADPS-9960 Sensor Ready"); \n  else Kniwwelino.logln("failed to initialize ADPS-9960 Sensor"); ', true);

	var value = block.getFieldValue('VALUE');
	if (value == 'PROXIMITY')  {
		Blockly.Arduino.addSetup('APDS9960enableProximity', 'apds9960.enableProximity(true);', true);
		return ['apds9960.readProximity()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'GESTURE')  {
		Blockly.Arduino.addSetup('APDS9960enableProximity', 'apds9960.enableProximity(true);', true);
		Blockly.Arduino.addSetup('APDS9960enableGesture', 'apds9960.enableGesture(true);', true);
		return ['apds9960.readGesture()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'WHITE')  {
		Blockly.Arduino.addSetup('APDS9960enableColor', 'apds9960.enableColor(true);', true);
		return ['apds9960.getWhite()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'RED')  {
		Blockly.Arduino.addSetup('APDS9960enableColor', 'apds9960.enableColor(true);', true);
		return ['apds9960.getRed()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'GREEN')  {
		Blockly.Arduino.addSetup('APDS9960enableColor', 'apds9960.enableColor(true);', true);
		return ['apds9960.getGreen()', Blockly.Arduino.ORDER_ATOMIC];
	} else if (value == 'BLUE')  {
		Blockly.Arduino.addSetup('APDS9960enableColor', 'apds9960.enableColor(true);', true);
		return ['apds9960.getBlue()', Blockly.Arduino.ORDER_ATOMIC];
	}
	return ""
};

Blockly.Arduino['kniwwelino_HCSR04getValue'] = function(block) {
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('HCSR04', '#include <NewPing.h> //https://bitbucket.org/teckel12/arduino-new-ping/');
	Blockly.Arduino.addDeclaration('HCSR04', 'NewPing hcsr04(D0, D5, 200);');
	return ['hcsr04.ping_cm()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_HCSR04getValue1Pin'] = function(block) {
  var pin = block.getFieldValue('PIN');
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('HCSR04', '#include <NewPing.h> //https://bitbucket.org/teckel12/arduino-new-ping/');
	Blockly.Arduino.addDeclaration('HCSR04_'+pin+pin, 'NewPing hcsr04_'+pin+pin+'('+pin+', '+pin+', 200);');
	return ['hcsr04_'+pin+pin+'.ping_cm()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_HCSR04getValue2Pin'] = function(block) {
  var pinTrig = block.getFieldValue('PIN_TRIG');
  var pinEcho = block.getFieldValue('PIN_ECHO');
	kniwwelinoBaseCode();
	Blockly.Arduino.addInclude('HCSR04', '#include <NewPing.h> //https://bitbucket.org/teckel12/arduino-new-ping/');
	Blockly.Arduino.addDeclaration('HCSR04_'+pinTrig+pinEcho, 'NewPing hcsr04_'+pinTrig+pinEcho+'('+pinTrig+', '+pinEcho+', 200);');
	return ['hcsr04_'+pinTrig+pinEcho+'.ping_cm()', Blockly.Arduino.ORDER_ATOMIC];
};

//==== WEATHER ============================================

Blockly.Arduino['kniwwelino_WeatherTopicChooser'] = function(block) {
	var location = block.getFieldValue('LOCATION');
  var weather_par = block.getFieldValue('WEATHER_PAR');

  var code = "\"weather/"+location+"/"+weather_par + "\"";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['kniwwelino_WeatherConstChooser'] = function(block) {
  var weather_const = '\"'+block.getFieldValue('WEATHER_CONST')+'\"';
	return [weather_const, Blockly.Arduino.ORDER_ATOMIC];
};

//==== AUDIO ==============================================

Blockly.Arduino['kniwwelino_playNote'] = function(block) {
	  var pin = block.getFieldValue('TONEPIN');
	  var freq = Blockly.Arduino.valueToCode(block, 'NOTE', Blockly.Arduino.ORDER_ATOMIC);
    //var octave = Blockly.Arduino.valueToCode(block, 'OCTAVE', Blockly.Arduino.ORDER_ATOMIC);
	  var dur  = Blockly.Arduino.valueToCode(block, 'NOTE_DURATION', Blockly.Arduino.ORDER_ATOMIC);
	  Blockly.Arduino.reservePin(
	      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

	  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
	  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

	  var code = 'Kniwwelino.playNote(' + pin + ', ' + freq + ', ' + dur + ');\n';
	  return code;
	};

Blockly.Arduino['kniwwelino_playTone'] = function(block) {
	  var pin = block.getFieldValue('TONEPIN');
	  var freq = Blockly.Arduino.valueToCode(block, 'NOTE', Blockly.Arduino.ORDER_ATOMIC);
    //var octave = Blockly.Arduino.valueToCode(block, 'OCTAVE', Blockly.Arduino.ORDER_ATOMIC);
	  Blockly.Arduino.reservePin(
	      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

	  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
	  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

	  var code = 'Kniwwelino.playTone(' + pin + ', ' + freq + ');\n';
	  return code;
	};


Blockly.Arduino['kniwwelino_toneOff'] = function(block) {
	  var pin = block.getFieldValue("TONEPIN");
	  Blockly.Arduino.reservePin(
	      block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Tone Pin');

	  var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);\n';
	  Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

	  var code = 'Kniwwelino.toneOff(' + pin + ');\n';
	  return code;
	};


Blockly.Arduino['kniwwelino_toneChooser'] = function(block) {
		kniwwelinoBaseCode();
    var isPause = block.getField('NOTE').getText().toLowerCase()==="pause"?true:false;
		var freq = block.getFieldValue('NOTE');
    var octave = block.getFieldValue('OCTAVE');

    if (octave === '0') {
      if (freq !== 'NOTE_B') {
        octave = 1;
      }
    } else if (octave === '8') {
      if (freq === 'NOTE_C' | freq === 'NOTE_CS' | freq === 'NOTE_D' | freq === 'NOTE_DS') {
      } else {
        octave = 7;
      }
    }

		return [freq+(isPause?"":octave), Blockly.Arduino.ORDER_ATOMIC];
	};


//==== Neopixel WS2812 ==============================================

	Blockly.Arduino['kniwwelino_neopixelInit'] = function(block) {
		kniwwelinoBaseCode();
		var size = block.getFieldValue('SIZE');
		var pin = block.getFieldValue('PIN');
		Blockly.Arduino.addInclude('WS2812FX', '#include <WS2812FX.h>');
		Blockly.Arduino.addDeclaration('kniwwelino_WS2812FXinit','WS2812FX ws2812fx = WS2812FX('+size+', '+pin+', NEO_GRB + NEO_KHZ800);');
		Blockly.Arduino.addSetup('kniwwelino_WS2812FXsetup', '//initialize neopixel strip\n  ws2812fx.init();\n  ws2812fx.start();', true);
    Blockly.Arduino.addKniwwelinoBGTask('kniwwelino_WS2812FX', "ws2812fx.service(); // handle Neopixel Effect");
		return '';
	};

	Blockly.Arduino['kniwwelino_neopixelSetEffect'] = function(block) {
		kniwwelinoBaseCode();
		var effect = Blockly.Arduino.valueToCode(block, 'EFFECT', Blockly.Arduino.ORDER_UNARY_POSTFIX);
		if (effect == null || effect === undefined || effect == "") effect = 0;

		var code = 'if(ws2812fx.getMode()!='+effect+'){ws2812fx.setMode(' + effect + ');} if(!ws2812fx.isRunning()){ws2812fx.start();}\n';
		return code;
	};

	Blockly.Arduino['kniwwelino_neopixelEffectChooser'] = function(block) {
			kniwwelinoBaseCode();
			var effect = block.getFieldValue('EFFECT');
			return [effect, Blockly.Arduino.ORDER_ATOMIC];
	};


	Blockly.Arduino['kniwwelino_neopixelsetStripColorFromString'] = function(block) {
		kniwwelinoBaseCode();
		var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_UNARY_POSTFIX);
		if (color == null || color === undefined || color == "") color = 0;

		var code = 'ws2812fx.setColor(Kniwwelino.RGBhex2int(' + color + '));\n';
		return code;
	};

	Blockly.Arduino['kniwwelino_neopixelsetPixelColorFromString'] = function(block) {
		kniwwelinoBaseCode();

		var pixel = Blockly.Arduino.valueToCode(block, 'PIXEL', Blockly.Arduino.ORDER_UNARY_POSTFIX);
		if (pixel == null || pixel === undefined || pixel == "") pixel = 0;

		var color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_UNARY_POSTFIX);
		if (color == null || color === undefined || color == "") color = 0;

		var code = 'if(ws2812fx.isRunning()){ws2812fx.stop();} ws2812fx.setPixelColor('+pixel+', Kniwwelino.RGBhex2int(' + color + ')); ws2812fx.show();\n';
		return code;
	};

	Blockly.Arduino['kniwwelino_neopixelsetSpeed'] = function(block) {
		kniwwelinoBaseCode();
		var speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_UNARY_POSTFIX);
		return  'ws2812fx.setSpeed(' + speed + ');\n';
	};

	Blockly.Arduino['kniwwelino_neopixelsetBrightness'] = function(block) {
		kniwwelinoBaseCode();
		var brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_UNARY_POSTFIX);
		return  'ws2812fx.setBrightness(' + brightness + ');\n';
	};

	Blockly.Arduino['kniwwelino_neopixelStop'] = function(block) {
		kniwwelinoBaseCode();
		return  'ws2812fx.stop();\n';
	};

  Blockly.Arduino['kniwwelino_HD44780_setup'] = function(block) {
		kniwwelinoBaseCode();
    var lcdCols = block.getFieldValue('LCD_COLS');
    var lcdRows = block.getFieldValue('LCD_ROWS');
    var address = block.getFieldValue('ADDRESS');

    Blockly.Arduino.addInclude('HD44780', '#include <hd44780.h> // main hd44780 header\n#include <hd44780ioClass/hd44780_I2Cexp.h>\n\n#define I2CEXPDIAG_CFG_DECODE_ESP8266PINS');
		Blockly.Arduino.addDeclaration('HD44780init','hd44780_I2Cexp lcd('+address+');\n// LCD geometry\nconst int LCD_COLS = '+lcdCols+';\nconst int LCD_ROWS = '+lcdRows+';');
		Blockly.Arduino.addSetup('HD44780setup', 'int status;\n  status = lcd.begin(LCD_COLS, LCD_ROWS);\n  if(status) { // non zero status means it was unsuccesful\n    status = -status;\n    Serial.println(status);\n    hd44780::fatalError(status);\n  }', true);

    return '';
  };

  Blockly.Arduino['kniwwelino_HD44780_setCurser'] = function(block) {
		kniwwelinoBaseCode();
    var lcdCol = Blockly.Arduino.valueToCode(block, 'LCD_COL', Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var lcdRow = Blockly.Arduino.valueToCode(block, 'LCD_ROW', Blockly.Arduino.ORDER_UNARY_POSTFIX);

    return 'lcd.setCursor('+lcdCol+', '+lcdRow+');\n';
  };

  Blockly.Arduino['kniwwelino_HD44780_print'] = function(block) {
		kniwwelinoBaseCode();
    var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX);

    return 'lcd.print('+text+');\n';
  };

  Blockly.Arduino['kniwwelino_HD44780_clear'] = function(block) {
		kniwwelinoBaseCode();

    return 'lcd.clear();\n';
  };



  lcd.noBacklight();
  lcd.backlight();
