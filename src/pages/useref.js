import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const UseRef = () => {
  const inputRef = useRef(null);
  const changeit = () => {
    console.log("value:", inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>UseRef Hook</h2>
      <h1>Hello</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <Button className="m-2" onClick={changeit}>
        Change Name
      </Button>
    </div>
  );
};

export default UseRef;
