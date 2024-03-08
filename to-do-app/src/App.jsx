import { Provider } from "react-redux";
import ToDoStore from "./redux/store";
//import Calculator from "./pages/Calculator/Calculator.Layout";
//import Stats from "./pages/Stats/Stats.Layout";
import Todo from "./pages/Todos/Todos.Layout";

function App() {
  return (
    <Provider store={ToDoStore}>
      <Todo />
    </Provider>
  );
}

export default App;
