t = $('tr');
//console.log(t.length + " anzahl elemente in t")
var Name, Beschreibung, Params, Output;
for (var i = 0; i< t.length; i++)
 {var k = t[i]; var di = k.getElementsByTagName('td');
 Name = "";
 Beschreibung = "";
 Params ="";
 Output = "";
 for (var ei = 0; ei< di.length - 1; ei++)
 {
  var jo = di[ei];
  if(jo.textContent.length > 30)
  {Beschreibung += " " + jo.textContent.replace("(♁Standort)","");}
  else{Name += " " + jo.textContent.replace("(♁Standort)","");}
  if(di[ei].innerHTML.match('geo'))
   {
   var c = di[ei].innerHTML.indexOf('params');
   Params = di[ei].innerHTML.slice(c+7,c+30);   
   }    
 }
 if(Beschreibung == "")
 {console.log("Name: " + Name +  "   " + "; Params: " + Params);}
 else{console.log("Name: " + Name +  "   " + "; Beschreibung: " + Beschreibung.slice(0,12)+ "; Params: " + Params);}
 console.log("https://maps.google.de/maps?t=h&z=21&layer=c&ll="+Params.slice(0,8)+","+Params.slice(12,20));
 //gegenbeispiel, wenn params nicht gemäß 2 Vorkomma und 6 Nachkommestellen oder so sind: http://de.wikipedia.org/wiki/Liste_der_Kulturdenkm%C3%A4ler_in_Frankfurt-Altstadt
}
 


jo: das die map die referenziert werden soll (letzter Parameter 0,0,0,0 passt scho - zumindest bekommt man so die Street View hin)
https://maps.google.de/maps?t=h&z=21&layer=c&cbll=48.137572,11.462496&cbp=0,0,0,0
