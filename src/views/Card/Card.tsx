import React from "react";

import CardView from "./Card.view";

type Props = Record<never, never>;

const Card: React.FC<Props> = () => {
  return <CardView></CardView>;
};

Card.displayName = "Card";
Card.defaultProps = {};

export default Card;
