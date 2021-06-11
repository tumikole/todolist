const todoObjectList =[];

class Todo_Class {
  constructor(item){
    this.ulElement =item;
  }
  add() {
    }
  done_undone() {
      }
  delete() {
      }
  display() {
      }
    }

    const listSection = document.querySelector("#myUL");

     myTodoList = Todo_Class(listSection);
    document.querySelector(".addBtn").addEventListener("click", function() {
      myTodoList.add()
    })

     function add() {
      const todoInput = document.querySelector("#myInput").value;
      if (todoInput == "") {
        alert("You did not enter any item")
      } else {
        const todoObject = {
          id : todoObjectList.length,
          todoText : todoInput,
          isDone : false,
        }

        todoObjectList.unshift(todoObject);
        this.display();
        document.querySelector("#myInput").value = '';
      }
    }

    function display(){
      this.ulElement.innerHTML = "";
      todoObjectList.forEach((Object_item) => {

        const liElement = document.createElement("li");
        const delBtn = document.createElement("i");

        liElement.innerText = object_item.todoText;
        liElement.setAttribute("data-id", object_item.id);
        delBtn.setAttribute("data_id", "fa-trash-alt");

        liElement.appendChild(delBtn);

        delBtn.addEventListener("click", function(e){
          const deleteId = e.target.getAttribute("data-id");
          myTodoList.deleteElement(deleteId);
        })
        liElement.addEventListener("click", function(e) {
          const selectedId = e.target.getAttribute("data-id")
          myTodoList.done_undone(selectedId);
        })
        if (object_item.isDone) {
          liElement.classList.add("checked");
        }
        this.ulElement.appendChild(liElement)
      })
    }