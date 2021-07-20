import React, { useCallback, useState } from "react";

const ItemAddExample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = useCallback((event) => {
    setInputText(event.target.value);
  }, []);

  const onAddClick = useCallback(() => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  }, [nextId, inputText]);

  const onRemove = useCallback(
    (id) => {
      const nextNames = names.filter((name) => name.id !== id);
      setNames(nextNames);
    },
    [names]
  );

  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={(e) => {
        onRemove(name.id);
      }}
    >
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onAddClick}> 추가 </button>
      <ul>{namesList}</ul>
    </>
  );
};

export default ItemAddExample;
