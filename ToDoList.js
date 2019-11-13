// JavaScript Document
//Michael Valadao-Martins - 200412941

let enterButton = document.getElementById('enterButton');
let toDoList = document.getElementById('todolist');
let checkSound = document.getElementById('checkAudio');
let uncheckSound = document.getElementById('uncheckAudio');

let deleteItem=function()
{
		let listItem=this.parentNode;
		let ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);
}

let checkedItem=function()
{
		let listItem=this.parentNode;
		let ul=listItem.parentNode;
		//Remove the parent list item from the ul.
    if(listItem.childNodes[0].checked == true)
    {
      checkSound.play();
      ul.append(listItem);
      listItem.style.setProperty("text-decoration", "line-through");
      listItem.style.setProperty("background-color", "red");
    }
     else
    {
      uncheckSound.play();
      ul.prepend(listItem);
      listItem.style.setProperty("text-decoration", "none");
      listItem.style.setProperty("background-color", "green");
    }
}

function addItemToList()
{
  let input = document.getElementById('input').value;
  let li = document.createElement('li');
  let checkBox = document.createElement('input');
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.id = 'deleteButton';
  checkBox.type = 'checkbox';
  li.appendChild(checkBox);
  li.appendChild(document.createTextNode(input));
  li.appendChild(deleteButton);
  li.style.setProperty("background-color", "green");
  li.style.setProperty("margin-right", "45px");
  li.style.setProperty("margin-bottom", "10px");
  li.childNodes[0].style.setProperty("margin-right", "10px");
  li.childNodes[2].style.setProperty("margin-left", "10px");
  li.childNodes[2].style.setProperty("margin-bottom", "15px");
  toDoList.appendChild(li);
  checkBox.addEventListener('click', checkedItem);
  deleteButton.addEventListener('click', deleteItem);
}

enterButton.addEventListener('click', addItemToList);
