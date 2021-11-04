import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const State = () => {
  const [counter, setCounter] = useState(3);
  const [userName, setUserName] = useState("");
  const increment = () => {
    setCounter(counter + 1);
  };
  const updateName = (event) => {
    const newValue = event.target.value;
    setUserName(newValue);
  };
  return (
    <div>
      <h2>State Management</h2>
      <Card className="m-2 p-2">
        <p>Counter: {counter}</p>
        <Button onClick={increment}>Increment</Button>
      </Card>
      <Card className="m-2 p-2">
        <input type="text" placeholder="Your name?" onChange={updateName} />
        {userName}
      </Card>
    </div>
  );
};

export default State;
