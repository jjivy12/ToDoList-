
var inputValue = document.getElementById("myInput");
var list = document.getElementById ("ul")
var el = document.getElementById("addbtn");


el.addEventListener('click', function(event){
	
	var li = document.createElement('li');
	li.innerHTML = inputValue.value;
	list.appendChild(li);
	inputValue.value= "";
});


list.addEventListener('click',function(event) {

	event.target.style.textDecoration ="line-through";

	setTimeout(function(){
		event.target.remove();
	},1000)
}) 







