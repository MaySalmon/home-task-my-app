import React from "react";
import { useTranslation } from "react-i18next";

import { DummyData } from "./Home.model";

import Card from "../../views/Card/Card";
import classes from "./Home.module.scss";

type Props = {
  data: DummyData[];
  onClickDownload?: (value: string) => void;
};

const HomeView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>{t("pages.home.title")}</h1>
      <div className={classes["body"]}>
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
