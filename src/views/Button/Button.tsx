import React, { CSSProperties } from "react";

import MButtonView from "./Button.view";

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

const MButton: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <MButtonView
      color={props.color}
      disabled={props.disabled}
      className={props.className}
      type={props.type}
      block={props.block}
      style={props.style}
      to={props.to}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </MButtonView>
  );
};

MButton.displayName = "MButton";
MButton.defaultProps = {};

export default MButton;
