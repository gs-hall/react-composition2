// Контейнер, содержажий несколько блоков/компоненотв (для изучения props.children)

import React from "react";

export default function Container(props) {
  return (
    <div className={props.type ? props.type : null}>
      {props.children}
    </div>
  );
};