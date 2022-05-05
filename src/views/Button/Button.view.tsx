import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";
import { ThemeColors } from "../../models/general";

interface Props {
  className?: string;
  color?: ThemeColors;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  block?: boolean;
  to?: string;
  style?: CSSProperties;
  size?: "sm";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MButtonView: React.FC<Props> = (
  props: React.PropsWithChildren<Props>
) => {
  return props.to ? (
    <Link className={classes["link"]} to={props.to}>
      <button
        style={props.style}
        className={`${classes["btn"]} ${classes[`btn--${props.color}`]} ${
          props.size === "sm" ? classes["btn--small"] : ""
        } ${props.block ? classes["btn--block"] : ""}  ${
          props.className || ""
        }`.trim()}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </Link>
  ) : (
    <button
      style={props.style}
      className={`${classes["btn"]} ${classes[`btn--${props.color}`]} ${
        props.size === "sm" ? classes["btn--small"] : ""
      } ${props.block ? classes["btn--block"] : ""}  ${
        props.className || ""
      }`.trim()}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

MButtonView.displayName = "MButtonView";
MButtonView.defaultProps = {
  color: "transparent",
};

export default MButtonView;
