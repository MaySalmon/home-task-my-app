import React from "react";

import ButtonView from "./Button.view";

import { ThemeColors } from "../../models/general";

type Props = {
  to?: string;
  className?: string;
  color?: ThemeColors;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: "sm";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div></div>
    // <ButtonView
    //   to={props.to}
    //   className={props.className}
    //   color={props.color}
    //   disabled={props.disabled}
    //   type={props.type}
    //   size={props.size}
    //   onClick={props.onClick}
    // >
    //   {props.children}
    // </ButtonView>
  );
};

Button.displayName = "Button";
Button.defaultProps = {};

export default Button;
