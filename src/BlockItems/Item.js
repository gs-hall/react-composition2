// Отображение типового элемента (например, новости) - если состоит из картинки и ссылки

import React from "react";
import Icon from "../Components/Icon";
import Text from "../Components/Text";

export default function Item ({item, ...rest}) {
  return (
    <>
      <Icon icon={item.icon} {...rest}/>
      <Text
        title={item.title}
        name={item.name}
        description={item.description}
        link={item.link}
        {...rest} />
    </>
  );
};