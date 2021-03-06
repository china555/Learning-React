import "./App.css";
import { Message } from "./components/message";
import { Counter } from "./components/Counter";
import { Greet } from "./components/Greet";
import { FunctionClick } from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import { ParentComponent } from "./components/ParentComponent";
import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";
import { NameListAddKey } from "./components/NameListAddKey";
function App() {
  return (
    <div className="App">
      <NameListAddKey />
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Message />
      <Counter {...{ addValue: 9, addValue2: 2 }} />
      <Greet {...{ name: "Diana", heroName: "Wonder Women" }} />
      <Greet {...{ name: "Bruce", heroName: "Batman" }} />
      <FunctionClick /> */}
    </div>
  );
}

export default App;
