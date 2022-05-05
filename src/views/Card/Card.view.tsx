import React from "react";
import { Link, Navigate } from "react-router-dom";

import { DummyData } from "../../pages/Home/Home.model";
import './Card.module.scss';

type Props = {
  item: DummyData;
  onClickDownload?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
};

const CardView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255, 0.9)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        height: "300px",
        textDecoration: "none !important",
      }}
      onClick={props.onClick}
    >
      <span
        style={{
          textDecoration: "none !important",
        }}
      >
        {props.item.name}
      </span>
      <span className="temp">{props.item.URL}</span>
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
