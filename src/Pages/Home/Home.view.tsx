import React from "react";
import Card from "../../views/Card/Card";

import { DummyData } from "./Home.model";

type Props = {
  data: DummyData[];
};

const HomeView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        padding: "100px",
      }}
    >
      <h1> Please Choose:</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {props.data.map((item: DummyData) => (
          <Card item={item}></Card>
        ))}
      </div>
    </div>
  );
};

HomeView.displayName = "HomeView";
HomeView.defaultProps = {};

export default HomeView;
