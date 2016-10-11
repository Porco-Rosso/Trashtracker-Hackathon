/*
********************************************
14CORE ULTRASONIC DISTANCE SENSOR CODE TEST
********************************************
*/
#define TRIGGER 5
#define ECHO    4

#include <ESP8266WiFi.h>
 
const char* ssid = "Area31";
const char* password = "";

WiFiServer server(80);

// NodeMCU Pin D1 > TRIGGER | Pin D2 > ECHO

void setup() {
  
  Serial.begin (9600);
  pinMode(TRIGGER, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(BUILTIN_LED, OUTPUT);

   // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
 
  // Start the server
  server.begin();
  Serial.println("Server started");
 
  // Print the IP address
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
}

void loop() {

  WiFiClient client = server.available();
 /*
  if (!client) {
    return;
  }

  */
  
  long duration, distance;
  digitalWrite(TRIGGER, LOW);  
  delayMicroseconds(2); 
  
  digitalWrite(TRIGGER, HIGH);
  delayMicroseconds(10); 
  
  digitalWrite(TRIGGER, LOW);
  duration = pulseIn(ECHO, HIGH);
  distance = (duration/2) / 29.1;
  
  //Serial.println("Centimeter:");
  Serial.println(distance);

  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println(""); //  do not forget this one
  client.println("<!DOCTYPE HTML>");
  client.println("<html>");
  client.println("<meta http-equiv='refresh' content='2'>");
  client.println("<style>body{background-color:#27b366;color:white;font-size:60px;font-family:sans-serif;text-align:center;}</style>");

  client.print("STATUS OF TRASH:  ");

  int fullness=abs((50-distance)*2);

  if(fullness>100){
    fullness=64;
  }

  if(fullness<33){
      client.print("<h3 style=color:green;>EMPTY</h3>  ");
  }
  else if(fullness<66){
      client.print("<style>body{background-color:#ffcc66;}</style>  ");
      client.print("<h3 style=color:orange;>HALF FULL</h3>  ");
  }
  else{
     client.print("<style>body{background-color:#ff8080;}</style>  ");
     client.print("<h3 style=color:red;>FULL</h3>  ");
  }
  client.print("(");
  client.print(fullness);
  client.print("% full)");

  client.println("</html>");
  delay(1000);
}
