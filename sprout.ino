char junk;
String inputString="";

void setup()                    
{
 Serial.begin(9600);            
 pinMode(8, OUTPUT);
pinMode(9,OUTPUT);
pinMode(10,OUTPUT);
pinMode(11,OUTPUT);
pinMode(6,OUTPUT);
pinMode(7,OUTPUT);
}

void loop()
{
  if(Serial.available()){
  while(Serial.available())
    {
      char inChar = (char)Serial.read(); 
      inputString += inChar;       
    }
    Serial.println(inputString);
    while (Serial.available() > 0)  
    {
 junk = Serial.read() ; 
}      
    if(inputString == "B")
{         
digitalWrite(8, HIGH);  
digitalWrite(9, LOW); 
digitalWrite(10, HIGH); 
digitalWrite(11, LOW); 
    }
else if(inputString == "F")
{  
digitalWrite(8, LOW);  
digitalWrite(9, HIGH); 
digitalWrite(10, LOW); 
digitalWrite(11, HIGH); digitalWrite(7, HIGH);  
digitalWrite(6, HIGH);  
    }
else if(inputString == "R")
{  
digitalWrite(8, HIGH);  
digitalWrite(9, LOW); 
digitalWrite(10, LOW); 
digitalWrite(11, LOW); digitalWrite(7, HIGH);  
digitalWrite(6, HIGH);  
    }
else if(inputString == "L")
{  
digitalWrite(8, LOW);  
digitalWrite(9, LOW); 
digitalWrite(10, HIGH); 
digitalWrite(11, LOW); digitalWrite(7, HIGH);  
digitalWrite(6, HIGH);  
    }
else if(inputString == "V")
{  
digitalWrite(7, HIGH);  
digitalWrite(6, HIGH);   
    }
else if(inputString == "v")
{  
digitalWrite(7, LOW);  
digitalWrite(6, LOW);  
    }
else
{
 digitalWrite(8, LOW);
 digitalWrite(9, LOW); 
digitalWrite(10, LOW); 
digitalWrite(11, LOW); 
digitalWrite(7, LOW);  
digitalWrite(6, LOW); 
}
    inputString = "";
  }
}