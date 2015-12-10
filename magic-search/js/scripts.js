
$("document").ready(function(){

var getContacts=function(){
var cnt=$('#contact').val();
if(cnt=='')
{
console.log("inside the function");
$('#results').html("<h2 class='loading'>Dude!!Enter some text in the text box!</h2>");
}
else
{
$.getJSON("https://www.googleapis.com/plus/v1/people?query="+cnt+"&key=AIzaSyCcz9H7okxJ08Dh_rEegfRp0RsOR7ok0GQ",

function(data){	
	
$('#results').empty();	
	
for (i=1; i<data.items.length; i++){	

$("#results").append('<h2 class="loading">Images from google+</h2><img width="10%" id="thePoster" src="' + data.items[i].image.url +'"/>');

}
});
}
}

$('#search').click(getContacts);
   $('#contact').keyup(function(event){
       if(event.keyCode == 13){
           getContacts();
       }
   });
});