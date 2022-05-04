import React from "react";
import Card from "../../views/Card/Card";
import { useTranslation } from "react-i18next";

import { DummyData } from "./Home.model";

import logo from "../../assets/images/cyber.jpg";

type Props = {
  data: DummyData[];
  onClickDownload?: (value: string) => void;
};

const HomeView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: "100px",
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
          <Card
            key={item.id}
            item={item}
            onClickDownload={() => props.onClickDownload?.(item.id)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

HomeView.displayName = "HomeView";
HomeView.defaultProps = {};

export default HomeView;
