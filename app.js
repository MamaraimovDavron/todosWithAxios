const inputTodo = document.querySelector("input");
const btnPlus = document.getElementById("btnPlus");
const todoBox = document.querySelector(".todo-box");
const todoBody = document.querySelector(".body");
// const todoBodyLi = document.querySelectorAll("li");
const todoUl = document.querySelector("ul");
// console.log(todoBodyLi);

const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );

  //   console.log(response.data);
  return response.data;
};

// getTodos();

const setTodos = async () => {
  const todos = await getTodos();
  //   console.log(addingValue);
  //   console.log(todos);

  todoUl.innerHTML = "";
  todos.map((todo, item) => {
    // const completed = todo.completed;
    const li = document.createElement("li");

    if (todo.completed) {
      li.className = "li";
      li.innerHTML = `
      <s><a href="#" class="text text-secondary text-hover" onclick="deleteBtn()">${todo.title}<i class="bi bi-trash"></i></a></s>
    `;
      todoUl.appendChild(li);
    } else {
      //   const li = document.createElement("li");
      li.className = "li";
      li.innerHTML = `
    <a href="#" class="text text-secondary text-hover" onclick="deleteBtn()">${todo.title}<i class="bi bi-trash"></i></a>
    `;
      todoUl.appendChild(li);
    }
    // todoUl.appendChild(li);
  });
};

const deleteBtn = async () => {
  todoUl.removeChild(todoUl.firstElementChild);
  const response = await axios.delete(
    "https://jsonplaceholder.typicode.com/todos/10"
  );

  console.log(response);

  return response;
};

const addValue = async () => {
  const response = await axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: `${inputTodo.value}`,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  // console.log(object);
  //   console.log(response.data.title);

  return response;
};

setTodos();

// const addValue = async () => {
//   const response = await axios
//     .post("https://jsonplaceholder.typicode.com/todos", {
//       title: `${inputTodo.value}`,
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   const lis = document.createElement("li");
//   lis.className = "li";
//   lis.innerHTML = `
//     <a href="#" class="text text-secondary text-hover" onclick="deleteBtn()">${todo.title}<i class="bi bi-trash"></i></a>
//     `;
//   todoUl.appendChild(li);
//   //   console.log(response.data.title);

//   return response;
// };
