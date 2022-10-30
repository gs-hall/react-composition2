// Абстрактный информационный блок (новости, погода - и т.д.)

import React from "react";
import BlockItem from "../BlockItems/BlockItem";
import Heading from "./Heading";

export default function Block({block, data}) {
  const itemElements = data.items.map((item, index) => (
    <BlockItem type={block} key={item.id} item={item} />
  ));

  return (
    <div className={block}>
      <Heading headings={data.headings} />
      <ul>
        {itemElements}
      </ul>
    </div>
  );
};
