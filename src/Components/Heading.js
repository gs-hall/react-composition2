// Заголовок блока

import React, { useState } from "react";
import Icon from "./Icon";

export default function Heading({headings}) {
  const [activeHeading, setActiveHeading] = useState(0);

  if (headings == null) {return null};
  return (
    <div className="heading">
      {
        headings.map((heading, index) => (
        <h2
          key={heading.id}
          className={heading.isButton ? 'button' :
           index === activeHeading ? 'active':null}
          onClick={() => setActiveHeading(index)}
        >
          {heading.icon && <Icon icon={heading.icon}/>}
          {heading.name}
        </h2>
      ))
      }
    </div>
  );
};