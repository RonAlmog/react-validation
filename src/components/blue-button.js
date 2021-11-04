import Button from "react-bootstrap/Button";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Fragment } from "react";

const BlueButton = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setShow(!show);
    },
  }));
  return (
    <Fragment>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        Big Blue Child Button
      </Button>
      {show && <p>Helllllo!</p>}
    </Fragment>
  );
});

export default BlueButton;
