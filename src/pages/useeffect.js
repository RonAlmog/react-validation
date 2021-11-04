import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hey useeffect");
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      console.log("res", res.data);
      setData(res.data[0].email);
    });
  }, []);
  return (
    <div>
      <h2>Use Effect</h2>
      <p>Hello {data}</p>
      <p>Count: {count}</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
    </div>
  );
};

export default UseEffect;
