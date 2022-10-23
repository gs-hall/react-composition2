// Элемент инфоблока (новость и т.д.)

import React from "react";

export default function InfoBlockItem({icon, title, 
  text, link, channel}) {
  return (
    <>
      <i src={icon} />
      <a href={link}>{text}</a>
    </>
  );
};