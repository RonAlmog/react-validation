import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import BlueButton from "../components/blue-button";

const Imperative = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <h2>Imperative Handle</h2>
      <div className="m-2">
        <Button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Parent Button
        </Button>
      </div>

      <div className="m-2">
        <BlueButton ref={buttonRef} />
      </div>
    </div>
  );
};

export default Imperative;
