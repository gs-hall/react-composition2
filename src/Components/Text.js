import React from "react";

export default function Text({title, link, name, description, text, addClassName}) {
  return (
    <>
      {title && <span className={"title" + (addClassName ? " " + addClassName : "")}>{title}</span>}
      {link ? <a href={link}>{name}</a> : <span>{name}</span>}
      {description && <span className="description">{description}</span>}
    </>
  );
};