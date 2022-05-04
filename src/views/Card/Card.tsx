import React from "react";

import CardView from "./Card.view";

import { DummyData } from "../../pages/Home/Home.model";

type Props = {
  item: DummyData;
  onClickDownload?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Card: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <CardView
      item={props.item}
      onClickDownload={props.onClickDownload}
    ></CardView>
  );
};

Card.displayName = "Card";
Card.defaultProps = {};

export default Card;
