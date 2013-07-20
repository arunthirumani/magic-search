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
$.getJSON("https://api.twitter.com/1.1/users/search.json?oauth_token=1593548364-FcNZI2HtXGpHHK6xUG38NI622yJkMHNaVUvda0H&q=Twitter%20API&page=1&count=3",

function(data){

for (i=0; i<data.results.length; i++){

$("#results").append("<p><strong>Text: </strong>" + data.results[i].text + "<BR/>" + "<p><strong>Created at: </strong>" + data.results[i].created_at +"</p><br /><br />");

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