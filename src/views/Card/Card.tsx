import React from "react";
import { DummyData } from "../../pages/Home/Home.model";

import CardView from "./Card.view";

type Props = {
  item: DummyData;
};

const Card: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return <CardView item={props.item}></CardView>;
};

Card.displayName = "Card";
Card.defaultProps = {};

export default Card;
