// JavaScript Document
//Michael Valadao-Martins - 200412941
//create variables for the submit button, the ul, the check sound and the uncheck sound
let enterButton = document.getElementById('enterButton');
let toDoList = document.getElementById('todolist');
let checkSound = document.getElementById('checkAudio');
let uncheckSound = document.getElementById('uncheckAudio');

//create the DeleteItem function to add to the delete button as eventlistener on click
let deleteItem=function()
{
		let listItem=this.parentNode;
		let ul=listItem.parentNode;
		//Remove the listItem from the ul.
		ul.removeChild(listItem);
}

//create checkedItem function to set to checkBox as eventlistener on click
let checkedItem=function()
{
		let listItem=this.parentNode;
		let ul=listItem.parentNode;

    //checks if the first child node, which in this case is checkbox, is checked
    if(listItem.childNodes[0].checked == true)
    {
      //plays a sound
      checkSound.play();
      //sends item to the bottom and sets it's attributes
      ul.append(listItem);
      listItem.style.setProperty("text-decoration", "line-through");
      listItem.style.setProperty("background-color", "red");
    }
    //if not unchecked it willgot to else
     else
    {
      //plays a sound
      uncheckSound.play();
      //sends item to the top and sets it's attributes
      ul.prepend(listItem);
      listItem.style.setProperty("text-decoration", "none");
      listItem.style.setProperty("background-color", "green");
    }
}

//creates function to add an li to the ul
function addItemToList()
{
  //create variables for input by getting element by id
  let input = document.getElementById('input').value;
  //creates 3 elements, li, checkbox and the deleteButton
  let li = document.createElement('li');
  let checkBox = document.createElement('input');
  let deleteButton = document.createElement('button');
  //set text and id for deleteButton
  deleteButton.innerText = 'Delete';
  deleteButton.id = 'deleteButton';
  //set checkBox type to checkbox
  checkBox.type = 'checkbox';
  //adds the checkbox, inout and delete button to the li
  li.appendChild(checkBox);
  li.appendChild(document.createTextNode(input));
  li.appendChild(deleteButton);
  //set the style property for li and for it's child nodes
  li.style.setProperty("background-color", "green");
  li.style.setProperty("margin-right", "45px");
  li.style.setProperty("margin-bottom", "10px");
  li.childNodes[0].style.setProperty("margin-right", "10px");
  li.childNodes[2].style.setProperty("margin-left", "10px");
  li.childNodes[2].style.setProperty("margin-bottom", "15px");
  //adds the li to the ul
  toDoList.appendChild(li);
  //adds event listeners to the checkBox and deleteButton on click
  checkBox.addEventListener('click', checkedItem);
  deleteButton.addEventListener('click', deleteItem);
}

//adds event listener to the submit button 
enterButton.addEventListener('click', addItemToList);
