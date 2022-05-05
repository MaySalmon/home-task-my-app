import React from "react";

import classes from "./Card.module.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const CardView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className={`${classes["container"]} ${props.className || ""}`.trim()}>
      {props.children}
    </div>
  );
};

CardView.displayName = "CardView";
CardView.defaultProps = {};

export default CardView;
