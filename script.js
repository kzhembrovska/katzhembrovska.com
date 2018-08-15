/* Scripts for katzhembrovska.com*/

var $ = require('jquery');
var SimpleLightbox = require('simple-lightbox');
SimpleLightbox.registerAsJqueryPlugin($);

$(document).ready(function(){

	$('.ex').simpleLightbox();
	
})