// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let grabOl = document.getElementById("todo-list")


let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos);
}

const populateTodos = () => {
    console.log("populateTodos", populateTodos)
  for (let i = 0; i < arrayOfTodos.length; i++) {
    const todo = arrayOfTodos[i];
    console.log("todo:", todo);
    console.log('todo[title]:', todo['title']);
    //This is where i would set for each individual piece of data
    let userTitle = document.createElement('LI')
    userTitle.innerText = todo.title
    grabOl.appendChild(userTitle);
}
}