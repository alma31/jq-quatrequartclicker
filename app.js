

$(document).ready(function(){
var i = 0;
$("img").click(function(){

$("span").text(++i);

if (i % 20 === 0){
	alert("trouver une activité plus productive !!!!")
}

console.log(i)


});


});