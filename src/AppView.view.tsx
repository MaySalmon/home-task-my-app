import React from "react";

import Home from "./pages/Home/Home";

type Props = Record<never, never>;

const AppView: React.FC<Props> = () => {
  return <Home></Home>;
};

AppView.displayName = "AppView";
AppView.defaultProps = {};

export default AppView;
