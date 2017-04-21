'use strict'

var todoList = [];

function insertItem(value) {
	var theList = document.getElementById('thelist');
	thelist.innerHTML += "<li>" + value + "</li>";
}

function listener() {
	var insert = document.getElementById('insertList').elements['addButton'];
	insert.onclick = function (e){
		e.preventDefault();
		var todo_item = document.getElementById('insertList').elements['userInput'].value;
		if (todo_item != null){
			insertItem(todo_item);
		}
	};
}

listener();