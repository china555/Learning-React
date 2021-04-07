import "./App.css";
import Greet from "./components/Greet";
function App() {
  return (
    <div className="App">
      <Greet name="Nam" sex="male">
        <p>This is children props</p>
      </Greet>
      <Greet name="China" sex="female" />
      <Greet name="Chinam" sex="Both" />
    </div>
  );
}

export default App;
