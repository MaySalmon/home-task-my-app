import React from "react";

import classes from "./Icon.module.scss";

import icons from "../../assets/icons";

type Props = {
  name: keyof typeof icons;
  size?: "s" | "m" | "l";
  className?: string;
};

const IconView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <svg
      className={`${classes["container"]} ${
        props.size ? classes[`container--${props.size}`] : ""
      } ${props.className || ""}`.trim()}
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + icons[props.name][0]}
      dangerouslySetInnerHTML={{ __html: icons[props.name][1] }}
    ></svg>
  );
};

IconView.displayName = "IconView";
IconView.defaultProps = {};

export default IconView;
