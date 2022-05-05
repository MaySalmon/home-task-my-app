import React from "react";
import { Link } from "react-router-dom";

import { ThemeColors } from "../../models/general";
import classes from "./Button.module.scss";

type Props = {
  to?: string;
  className?: string;
  color?: ThemeColors;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: "sm";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return <div></div>;
  //   return props.to ? (
  //     <Link className={classes["link"]} to={props.to}>
  //       <button
  //         className={`${classes["btn"]} ${classes[`btn--${props.color}`]}  ${
  //           props.className || ""
  //         }`.trim()}
  //         disabled={props.disabled}
  //         type={props.type}
  //         onClick={props.onClick}
  //       >
  //         {props.children}
  //       </button>
  //     </Link>
  //   ) : (
  //     <button
  //       className={`${classes["btn"]} ${classes[`btn--${props.color}`]} ${
  //         props.size === "sm" ? classes["btn--small"] : ""
  //       }
  // ${props.className || ""}`.trim()}
  //       type={props.type}
  //       disabled={props.disabled}
  //       onClick={props.onClick}
  //     >
  //       {props.children}
  //     </button>
};

ButtonView.displayName = "ButtonView";
ButtonView.defaultProps = {};

export default ButtonView;
