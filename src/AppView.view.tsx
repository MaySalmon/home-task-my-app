import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Item from "./pages/Item/Item";

type Props = {};

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/downloadurl/:id" element={<Item />}></Route>
      </Routes>
    </React.Fragment>
  );
};

AppView.displayName = "AppView";
AppView.defaultProps = {};

export default AppView;
