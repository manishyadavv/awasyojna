// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require materialize
//= require_tree .




 $( document ).ready(function() {
      $(".button-collapse").sideNav();

    });


 window.addEventListener('load',function(){
var content=document.getElementById('book_heading');
content.addEventListener('keyup',function(){
	var letter=document.getElementById('letter');
	letter.innerHTML=content.value.length;
	if (content.value.length>18) {
		letter.style.color="red";
	}
	else{
		letter.style.color="black";
	}
})
});

 window.addEventListener('load',function(){
var content=document.getElementById('book_description');
content.addEventListener('keyup',function(){
	var letter=document.getElementById('letter1');
	letter.innerHTML=content.value.length;
	if (content.value.length>140) {
		letter.style.color="red";
	}
	else{
		letter.style.color="black";
	}
})
});


document.addEventListener("DOMContentLoaded", function(){
    $('.preloader-background').delay(1700).fadeOut('slow');

    $('.preloader-wrapper')
        .delay(5000)
        .fadeOut();
});


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
