const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  todoName = prompt('Enter a new TODO element')
  if (todoName != null)
  {
    div = document.createElement('div')
    divId =  Number(itemCountSpan.innerText) + 1
    div.id = divId
    div.className = classNames.TODO_ITEM
    li = document.createElement('li');
    checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className=classNames.TODO_CHECKBOX

    checkbox.addEventListener( 'change', function() {
      if(this.checked) {
         uncheckedCountSpan.innerHTML = --uncheckedCountSpan.innerText
      } else {
        uncheckedCountSpan.innerHTML = ++uncheckedCountSpan.innerText
      }
     });
    // creating label for checkbox 
    var label = document.createElement('label'); 
    label.className=classNames.TODO_TEXT

    // appending the created text to  
    // the created label tag  
    label.appendChild(document.createTextNode(todoName)); 
     
    var deleteBtn = document.createElement('input')
    deleteBtn.type = 'submit'
    deleteBtn.value = 'delete'
    deleteBtn.className = classNames.TODO_DELETE
    deleteBtn.onclick= function() {
      this.parentElement.parentElement.remove()
      itemCountSpan.innerHTML= --itemCountSpan.innerText
      var inputElements = this.parentElement.children

      for(var i=0; i < inputElements.length; ++i){
        if(inputElements[i].type == 'checkbox'){
             if (!inputElements[i].checked)
             {
            uncheckedCountSpan.innerHTML = --uncheckedCountSpan.innerText
             }
             break;
        }
      }
     };
    
    // appending the checkbox 
    // and label to div 

    li.appendChild(checkbox); 
    li.appendChild(label); 
    li.appendChild(deleteBtn); 
    div.appendChild(li)
    list.appendChild(div)
    
    itemCountSpan.innerHTML= ++itemCountSpan.innerText
    uncheckedCountSpan.innerHTML = ++uncheckedCountSpan.innerText
  }
}
