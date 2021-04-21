import "./App.css";
import { Message } from "./components/message";
import { Counter } from "./components/Counter";
function App() {
  return (
    <div className="App">
      <Message />
      <Counter {...{ addValue: 9, addValue2: 2 }} />
    </div>
  );
}

export default App;
