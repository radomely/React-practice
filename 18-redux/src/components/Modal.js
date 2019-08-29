import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 200px;
  padding: 16px;
  background-color: #fff;
`;

const Modal = ({ onClose }) => {
  // const backdropRef = useRef(null);

  const keyDownHandler = e => {
    if (e.code !== "Escape") {
      return;
    }

    onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <Backdrop>
      <Content>
        <p>
          Lorem as;dflk sdlkfj; lskdjf lsdkf sdlfj sdkfj sdlf sdlafj; ldskfjsd
          gjsfl as;lfd lfjsd
        </p>
        <button onClick={onClose}>Close</button>
      </Content>
    </Backdrop>
  );
};

export default Modal;
