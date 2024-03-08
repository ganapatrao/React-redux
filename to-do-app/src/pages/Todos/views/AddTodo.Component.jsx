import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, updateTodo, clearAllTodos } from "../todos.slice";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const AddTodo = () => {
  const dispatch = useDispatch();

  const editTodo = useSelector((state) => state.toDos.edited);
  const todoData = useSelector((state) => state.toDos.data);
  const isEditing = Object.keys(editTodo).length !== 0;
  const isTododata = Object.keys(todoData).length !== 0;
  console.log("k", isTododata);

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editTodo) {
      setTodo({
        title: editTodo.title,
        description: editTodo.description,
      });
    } else {
      setTodo({
        title: "",
        description: "",
      });
    }
  }, [editTodo]);

  const onAddTodo = () => {
    const payload = {
      ...todo,
      id: uuidv4(),
      createdAt: new Date().getTime(),
    };
    console.log("Add Todo clicked: ", payload);
    //dispatch({ type: "udayTodos/addTodo", payload });
    dispatch(addTodo(payload));
    setTodo({ title: "", description: "" });
  };

  const onUpdateTodo = () => {
    const payload = {
      ...editTodo,
      ...todo,
      updatedAt: new Date().getTime(),
    };

    dispatch(updateTodo(payload));
    setTodo({ title: "", description: "" });
  };
  const onDeleteAll = () => {
    confirmAlert({
      title: "Delete confirmation!",
      message: `Are you sure  you want to delete All toDo's `,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(clearAllTodos()),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <p>Add new Todo</p>
      <div>
        <input
          type="text"
          placeholder="Enter todo title"
          value={todo.title}
          name="title"
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Enter todo description"
          value={todo.description}
          name="description"
          onChange={onInputChange}
        />

        {isEditing === true ? (
          <button onClick={onUpdateTodo}>Update todo</button>
        ) : (
          <button onClick={onAddTodo}>Add todo</button>
        )}
        {isTododata && <button onClick={onDeleteAll}>Delete All</button>}
      </div>
    </div>
  );
};

export default AddTodo;
