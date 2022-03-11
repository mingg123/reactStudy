import { valueToNode } from '@babel/types';
import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../context/color';
import ColorBox from './ColorBox';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColor = () => {
  const { actions } = useContext(ColorContext);
  return (
    <>
      <div>
        {colors.map(color => (
          <div
            key={color}
            style={{
              background: color,
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }}
            onClick={() => {
              actions.setColor(color);
            }}
            onContextMenu={e => {
              e.preventDefault();
              actions.setSubColor(color);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default SelectColor;
