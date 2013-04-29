t = $('tr');
//console.log(t.length + " anzahl elemente in t")
var Name, Beschreibung, Params_raw, llN, llE, Output, allParams;
for (var i = 0; i< t.length; i++)
 {var k = t[i]; var di = k.getElementsByTagName('td');
 Name = "";
 Beschreibung = "";
 Params_raw = "";
 llN ="";
 llE ="";
 Output = "";
 for (var ei = 0; ei< di.length - 1; ei++)
 {
  var jo = di[ei];
  if(jo.textContent.length > 30)
  {Beschreibung += " " + jo.textContent.replace("(?Standort)","");}
  else{Name += " " + jo.textContent.replace("(?Standort)","");}
  if(di[ei].innerHTML.match('geo'))
   {
   var c = di[ei].innerHTML.indexOf('params');
   Params_raw = di[ei].innerHTML.slice(c+7,di[ei].innerHTML.length);
   Params_raw = Params_raw.slice(0, Params_raw.indexOf('E'));
   llN = Params_raw.slice(0,Params_raw.indexOf('N') - 1);
   llE = Params_raw.slice(Params_raw.indexOf('N') + 2, Params_raw.length-1);
//   Params = di[ei].innerHTML.slice(c+7,c+30);   
   }    
 }
 if(Beschreibung == "")
 {console.log("Name: " + Name +  "   " + "; Params: " + llN + "    " + llE);}
 else{console.log("Name: " + Name +  "   " + "; Beschreibung: " + Beschreibung + "; Params: " + llN + "    " + llE);}
 console.log("https://maps.google.de/maps?t=h&z=21&layer=c&ll="+llN+","+llE);
 jQuery.post( 'http://localhost:4711/api/books', {
    'title': Name,
    'author': Beschreibung,
    'releaseDate': new Date( 2008, 4, 1 ).getTime(),
 'llN': llN,
	'llE': llE
 }, function(data, textStatus, jqXHR) {
    console.log( 'Post response:' );
    console.dir( data );
    console.log( textStatus );
    console.dir( jqXHR );
 });
 
}
jo: das die map die referenziert werden soll (letzter Parameter 0,0,0,0 passt scho - zumindest bekommt man so die Street View hin)
https://maps.google.de/maps?t=h&z=21&layer=c&cbll=48.137572,11.462496&cbp=0,0,0,0
jaaa, wahrscheinlich: <iframe width="200" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
         src="http://dev.virtualearth.net/embeddedMap/v1/ajax/birdseye?zoomLevel=22&center=48.3701_10.905&pushpins=47.5_-122.5"/>
