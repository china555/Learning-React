export const FunctionClick = function () {
  function clickHandler() {
    console.log("Button");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
