import React from "react";

import IconView from "./Icon.view";

import icons from "../../assets/icons";

type Props = {
  name: keyof typeof icons;
  className?: string;
  size?: "s" | "m" | "l";
};

const Icon: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <IconView
      name={props.name}
      className={props.className}
      size={props.size}
    ></IconView>
  );
};

Icon.displayName = "Icon";
Icon.defaultProps = {};

export default Icon;
