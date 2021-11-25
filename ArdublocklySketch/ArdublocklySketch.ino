#include <Connect.h>

ConnectServo servoD5;
ConnectServo servoD7;

void doHeart() {
}

void doHappy() {
  servoD5.queueEaseTo(180, EASE_CUBIC_IN_OUT, 60);
  servoD7.queueEaseTo(180, EASE_CUBIC_IN, 20);
  servoWaitForServo(servoD5, servoD7);
  servoD5.queueMoveTo(30);
}


void setup() {
  //Initialise as a Connect device
  connectSetup();

  servoD5.setPin(D5);
  servoD7.setPin(D7);
}

void loop() {

  connectLoop(); // do Connect stuff...
}
