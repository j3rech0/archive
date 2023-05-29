
//my cart hover
$(document).ready(function(){
$("#mycart").hover(
function() {
$("#mycart a").stop().animate({"background-position": "0px -50px","opacity":"0.7" }, "slow");
},
function() {
$("#mycart a").stop().animate({"background-position": "0px 0px","opacity":"1" }, "slow"); 
});
$("#checkout").hover(
function() {
$("#checkout a").stop().animate({"background-position": "-92px -50px","opacity":"0.7" }, "slow");
},
function() {
$("#checkout a").stop().animate({"background-position": "-92px 0px","opacity":"1" }, "slow"); 
});});

//img right
