import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./app.css";

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="grid-rows-4 grid-flow-col gap-4">
      <h1>Hello world!</h1>
      <h2>It is {clockState}</h2>
    </div>
  );
};

const EventHandleButton = () => {
  const [isToggle, setToggle] = useState(true);

  return (
    <button
      onClick={() => setToggle(!isToggle)}
      className="w-1/3 h-16 bg-red-500 text-red-100 flex items-center justify-center text-xl"
    >
      {isToggle ? "ON" : "OFF"}
    </button>
  );
};

const App = () => {
  return (
    // <div className="w-full h-screen flex justify-center items-center">
    //   <EventHandleButton />
    // </div>
    <TodoList title="What's the Plan for Today ?" />
  );
};

export default App;
