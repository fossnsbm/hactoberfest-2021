const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-elem");
const filteropt = document.querySelector('.filter');

//Event Listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filteropt.addEventListener('click', filterTodo);


//Functions
function addTodo(e){
    e.preventDefault();

    if(todoInput.value == ''){
        document.getElementById('error-div').style.display = 'block';
        return;
    }

    document.getElementById('error-div').style.display = 'none';

    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    savaTodo(todoInput.value)

    const newTodo= document.createElement("li");
    newTodo.innerText=todoInput.value;
    todoInput.value=""
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);


    const completeButton=document.createElement("button");
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    
    const trashButton=document.createElement("button");
    trashButton.innerHTML=`<i class="far fa-trash-alt"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv); 
}

function deleteCheck(e){
    document.getElementById('error-div').style.display = 'none';

    const item=e.target;
    if(item.classList[0]==='trash-btn'){
        console.log('hi');
        // const confirmDeleting = window.confirm("Want to delete the to-do?");
        // if(!confirmDeleting){
        //     return;
        // }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure ?',
            text: "You won't be able to revert this !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it !',
            cancelButtonText: 'No, cancel !',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted !',
                'Your To-do has been deleted.',
                'success'
              )
              return;
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your To-do is safe :)',
                'error'
              )
            }
        });
        
        const todo=item.parentElement;
        todo.classList.add("out");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

    }
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
        
    }
}

function filterTodo(e){
    document.getElementById('error-div').style.display = 'none';

    const todos=todoList.childNodes;
    
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display='flex'
                }
                else{
                    todo.style.display="none";
                }
                break;

            }
    })
}

function savaTodo(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}