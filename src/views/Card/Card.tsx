import React from "react";

import CardView from "./Card.view";

import { DummyData } from "../../pages/Home/Home.model";
import { useNavigate } from "react-router-dom";

type Props = {
  item: DummyData;
  onClickDownload?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Card: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const navigate = useNavigate();

  return (
    <CardView
      item={props.item}
      onClickDownload={props.onClickDownload}
      onClick={() => navigate(`downloadurl/${props.item.id}`)}
    ></CardView>
  );
};

Card.displayName = "Card";
Card.defaultProps = {};

export default Card;
