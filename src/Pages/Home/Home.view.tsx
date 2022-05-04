import React from "react";

import { DummyData } from "./Home.model";

type Props = {
  data: DummyData[];
};

const HomeView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="temp">
      {props.data.map((item: DummyData) => (
        <div>{item.date}</div>
      ))}
    </div>
  );
};

HomeView.displayName = "HomeView";
HomeView.defaultProps = {};

export default HomeView;
