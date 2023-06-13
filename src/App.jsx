import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Header } from "./components/Header/Header";
import { Text } from "./components/Text/Text";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Todo />
      </div>
    </BrowserRouter>
  );
}

export default App;
