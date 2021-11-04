import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState("");
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
    </div>
  );
};

export default UseEffect;
