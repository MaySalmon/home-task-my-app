import React from "react";

import AppView from "./AppView.view";

type Props = Record<never, never>;

const App: React.FC<Props> = () => {
  return <AppView></AppView>;
};

App.displayName = "App";
App.defaultProps = {};

export default App;
