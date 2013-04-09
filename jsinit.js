x = $('tr');
for (var i = 0; i< x.length; i++)
{console.log( x.slice(i,i+1).innerHTML);}


// besser: $('tr').find('td')
//auch nicht schlecht: $('tr').find('td')[1].innerHTML.slice(x+7,x+40)
// for (var i = 5; i< t.length; i++){var k = t[i]; console.log(k.getElementsByTagName('td'))} //noch  besser

for (var i = 0; i< t.length; i++)
 {var k = t[i]; var di = k.getElementsByTagName('td'); 
 for (var ei = 0; ei< di.length; ei++)
 {
  if(di[ei].innerHTML.match('geo'))
 {console.log('we got a geo ' + ei + '  ' + i)}}
 }
 

for (var i = 0; i< t.length; i++)
 {var k = t[i]; var di = k.getElementsByTagName('td'); 
 for (var ei = 0; ei< di.length; ei++)
 {
 if(di[ei].innerHTML.match('geo'))
 {var c = di[ei].innerHTML.indexOf('geohack');
 di[ei].slice(c+7,c+40)}}
 } //thats it (i guess) aber nur für chrome, oder?
 
 for (var i = 0; i< t.length; i++)
 {var k = t[i]; var di = k.getElementsByTagName('td'); 
 for (var ei = 0; ei< di.length; ei++)
 {
  if(di[ei].innerHTML.match('geohack'))
 {var c = di[ei].innerHTML;
 c.slice(c.lastIndexOf('params')+7,c.lastIndexOf('params')+30)}}
 } //nur ein output ?



jo: das die map die referenziert werden soll (letzter Parameter 0,0,0,0 passt scho - zumindest bekommt man so die Street View hin)
https://maps.google.de/maps?t=h&z=21&layer=c&cbll=48.137572,11.462496&cbp=0,0,0,0
