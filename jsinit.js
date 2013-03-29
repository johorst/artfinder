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
 if(di[ei] != null && di[ei].innerText.match('geo'))
 {console.log('we got a geo')}}
 }
