const usePrint = () => {
  const print = () => {
    console.log('print1');
  };
  const print2 = () => {
    console.log('print2');
  };

  return { print, print2 };
};

export default usePrint;
