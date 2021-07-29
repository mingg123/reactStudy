import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "./color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요.</h2>

      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              //마우스 우측클릭 시 막 검사 어쩌고 뜨는거 무시함
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>

      {/* <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  //마우스 우측클릭 시 막 검사 어쩌고 뜨는거 무시함
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer> */}
    </div>
  );
};

export default SelectColors;
