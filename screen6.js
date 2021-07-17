var filter = document.getElementById("filter");
var general = document.getElementById("general");

var filterview = document.getElementById("filterview");
var generalview = document.getElementById("generalview");

generalview.style.display = 'block';
filterview.style.display = 'none';
filter.addEventListener('click',function(){
	generalview.style.display = 'none';
	filterview.style.display = 'block';
});
general.addEventListener('click',function(){
	generalview.style.display = 'block';
	filterview.style.display = 'none';
});

