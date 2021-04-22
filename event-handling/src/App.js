import "./App.css";
import { Message } from "./components/message";
import { Counter } from "./components/Counter";
import { Greet } from "./components/Greet";
function App() {
  return (
    <div className="App">
      <Message />
      <Counter {...{ addValue: 9, addValue2: 2 }} />
      <Greet {...{ name: "Diana", heroName: "Wonder Women" }} />
      <Greet {...{ name: "Bruce", heroName: "Batman" }} />
    </div>
  );
}

export default App;
