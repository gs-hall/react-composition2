// Элемент блока (новость и т.д.) - в зависимости от типа

import React from "react";

import Item from "./Item";

export default function BlockItem(props) {
  const type = props.type;
  const element = type === 'weather' ? <Item addClassName="big" {...props} /> : <Item {...props} />;
  return (
    <li>
      {element}
    </li>
  );
};