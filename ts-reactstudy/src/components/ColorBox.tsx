import * as React from 'react';
import { ColorConsumer } from '../contexts/color';
// import ColorContext from '../contexts/color';

interface IColorBoxProps {}

const ColorBox: React.FunctionComponent<IColorBoxProps> = ({}) => {
  return (
    <>
      <ColorConsumer>
        {value => (
          <>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: value.state.color,
              }}
            />
            <div
              style={{
                width: '64px',
                height: '64px',
                background: value.state.subcolor,
              }}
            />
          </>
        )}
      </ColorConsumer>
    </>
  );
};

export default ColorBox;
