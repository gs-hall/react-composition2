// Абстрактный информационный блок (новости, погода - и т.д.)

import React from "react";
import InfoBlockItem from "./InfoBlockItem";

export default function InfoBlock({items = []}) {
  const ItemElements = items.map((item, index) => (
    <InfoBlockItem key={item.id} item={item} />
  ));

  return (
    <ul>
      {ItemElements}
    </ul>
  );
};
