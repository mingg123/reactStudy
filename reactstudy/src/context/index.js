import ColorContext, { ColorProvider } from "./color";
import ColorBox from "./ColorBox";
import SelectColors from "./SelectColor";

const ColorMain = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
    // <ColorContext.Provider value={{ color: "red" }}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>
  );
};

export default ColorMain;
