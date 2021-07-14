import React, { useCallback, useState } from "react";

const RefExampleScrollBox = () => {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };

  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  const buttionStyle = {
    border: "1px solid black",
  };
  const scrollToBottom = useCallback(() => {
    const { scrollHeight, clientHeight } = box;
    box.scrollTop = scrollHeight - clientHeight;
  }, []);

  const scrollBottomTo = useCallback(() => {
    const { scrollHeight, clientHeight } = box;
    box.scrollTop = 0;
  }, []);

  let box = null;
  return (
    <div>
      <div
        style={style}
        ref={(input) => {
          box = input;
        }}
      >
        <div style={innerStyle} />
      </div>
      <buttion style={buttionStyle} onClick={() => scrollToBottom()}>
        맨 밑으로
      </buttion>
      <buttion style={buttionStyle} onClick={() => scrollBottomTo()}>
        맨 위로
      </buttion>
    </div>
  );
};

export default RefExampleScrollBox;
