import React from "react";
import Card from "../../views/Card/Card";

import { DummyData } from "./Home.model";

import logo from "../../assets/images/cyber.jpg";
import { useTranslation } from "react-i18next";

type Props = {
  data: DummyData[];
};

const HomeView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: "100px",
        backgroundColor: "pink",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 style={{ color: "white" }}>{t("pages.home.title")}</h1>
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
