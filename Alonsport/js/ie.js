$("input[type=checkbox]").css("border-width","1");//get rid of checkbox border in ie6
$("input[type=file]").css("background","transparent");//remove background in fileupload in ie8
//enable focus,hover effect on ie's
function focusfix(input, className) {

$("input[type=submit]").hover(function() {
$(this).css("cursor", "pointer");});
$("input, textarea").focus(function() {
$(this).css("background", "#FCF4CF").css("border-color","#000");});
$("input, textarea").blur(function() {
$(this).css("background", "#fff");});}
jQuery(document).ready(function($) {
focusfix('input.input-text', 'focus');
});