#include <Kniwwelino.h>

void setup() {
  //Initialize the Kniwwelino Board
  Kniwwelino.begin(true, true, false); // Wifi=true, Fastboot=true, MQTT Logging=false


  Kniwwelino.MATRIXdrawIcon(ICON_ARROW_RIGHT);
  Kniwwelino.MATRIXdrawIcon(ICON_ARROW_LEFT);

}

void loop() {

  Kniwwelino.loop(); // do background stuff...
}
