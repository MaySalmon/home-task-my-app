import React from "react";

import { DummyData } from "../../pages/Home/Home.model";

import classes from "./Card.module.scss";

type Props = {
  item: DummyData;
  onClickDownload?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
};

const CardView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className={classes["container"]} onClick={props.onClick}>
      <span>{props.item.name}</span>
      <span>{props.item.URL}</span>
      <span>{props.item.id}</span>
      <span>{props.item.date}</span>
      <span>{props.item.platform}</span>
      <span>{props.item.version}</span>
    </div>
  );
};

CardView.displayName = "CardView";
CardView.defaultProps = {};

export default CardView;
