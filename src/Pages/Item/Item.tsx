import React from "react";
import ItemView from "./Item.view";

type Props = Record<never, never>;

const Item: React.FC<Props> = () => {
  return <ItemView></ItemView>;
};

Item.displayName = "Item";
Item.defaultProps = {};

export default Item;
