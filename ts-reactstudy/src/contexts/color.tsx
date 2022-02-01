import * as React from 'react';

export const ColorContext = React.createContext<{
  state: any;
  actions: {
    setColor: (color: string) => void;
    setSubcolor: (color: string) => void;
  };
}>({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: (color: string) => {},
    setSubcolor: (color: string) => {},
  },
});

const ColorProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [color, setColor] = React.useState<string>('black');
  const [subcolor, setSubcolor] = React.useState<string>('red');

  const value = {
    state: { color, subcolor } as any,
    actions: { setColor, setSubcolor } as any,
  };
  console.log(children);
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer라는 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
