'use strict'

var todoList = [];

function insertItem(value) {
	todoList.push(value);
	var theList = document.getElementById('thelist');
	var list = document.createElement("li");
	var check = document.createElement("INPUT");
	check.type = "checkbox";
	check.name = 'checkeditem';
	list.innerHTML =  value ;
	thelist.appendChild(list);
	list.appendChild(check);
	var s = todoList.join();
	console.log(s);
}

function deleteCheckedItem(){
	var listArr = document.getElementById('thelist').children;
	for (var i = listArr.length - 1; i >= 0; i--){
		if (listArr[i].children[0].checked){
			listArr[i].remove();
			todoList.splice(i, 1);
		}
	}
}

function listener() {
	var insert = document.getElementById('insertList').elements['addButton'];
	var itemClear = document.getElementById('deleteButton');
	insert.onclick = function (e){
		e.preventDefault();
		var todo_item = document.getElementById('insertList').elements['userInput'].value;
		if (todo_item != null){
			insertItem(todo_item);
		}
	};
	itemClear.onclick = function (e) {
		e.preventDefault();
		deleteCheckedItem();
	};
}

listener();