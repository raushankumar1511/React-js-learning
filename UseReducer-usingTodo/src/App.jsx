import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessege from "./components/WelcomeMessege";
import TodoItemsContextProvider from "./store/todo-items-store";
// import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo />
        <WelcomeMessege></WelcomeMessege>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
