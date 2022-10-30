// Набор из нескольких соседних блоков в рамках одного контейнера

import React from "react";
import Block from "./Block";

export default function Blocks({type, blocks, data}) {
  return (
    <div className={type}>
      {
      blocks.map((block, index) => (
        <Block key={block} block={block} data={data[block]} />
        ))
      }
    </div>
  )
};