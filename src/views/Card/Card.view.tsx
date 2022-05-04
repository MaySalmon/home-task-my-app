import React from "react";

import { DummyData } from "../../pages/Home/Home.model";

type Props = {
  item: DummyData;
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
      }}
    >
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
