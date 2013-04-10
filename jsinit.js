t = $('tr');
//console.log(t.length + " anzahl elemente in t")
for (var i = 0; i< t.length; i++)
 {var k = t[i]; var di = k.getElementsByTagName('td');
 
 for (var ei = 0; ei< di.length; ei++)
 {
  var jo = di[ei];
  console.log(jo.textContent + " blibla")
  if(di[ei].innerHTML.match('geo'))
   {//tut nichts, warum?if(di[ei].innerText){console.log(di[ei].innerText);}
   var c = di[ei].innerHTML.indexOf('params');
   console.log(di[ei].innerHTML.slice(c+7,c+30));
   //console.log('got tr with matching GEO').
   }
  }
 }



jo: das die map die referenziert werden soll (letzter Parameter 0,0,0,0 passt scho - zumindest bekommt man so die Street View hin)
https://maps.google.de/maps?t=h&z=21&layer=c&cbll=48.137572,11.462496&cbp=0,0,0,0
