import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
