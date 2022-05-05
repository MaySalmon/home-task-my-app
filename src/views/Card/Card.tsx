import React from "react";

import CardView from "./Card.view";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return <CardView className={props.className}>{props.children}</CardView>;
};

Card.displayName = "Card";
Card.defaultProps = {};

export default Card;
