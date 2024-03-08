import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { removeTodo, editTodo } from "../todos.slice";

const ListTodo = () => {
  const todos = useSelector((state) => state.toDos.data);
  const dispatch = useDispatch();

  const onDeleteTodo = (item) => {
    confirmAlert({
      title: "Delete confirmation!",
      message: `Are you sure that you want to delete ${item.title}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(removeTodo(item.id)),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  // console.log("Todos: ", todos);
  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid silver",
              padding: "12px",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>{item.title}</p>

              <button onClick={() => onDeleteTodo(item)}>x</button>
            </div>
            <p style={{ fontSize: "11px", color: "#666" }}>
              {item.description}
            </p>
            <p style={{ fontSize: "11px", color: "#666" }}>{item.createdAt}</p>
            {}
            <button onClick={() => dispatch(editTodo(item))}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListTodo;
