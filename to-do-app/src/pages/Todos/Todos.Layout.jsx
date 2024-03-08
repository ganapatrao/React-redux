import AddTodo from "./views/AddTodo.Component";
import ListTodo from "./views/ListTodo.Component";

const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
};

export default Todo;
