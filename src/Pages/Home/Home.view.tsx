import React from "react";
import { useTranslation } from "react-i18next";

import Card from "../../views/Card/Card";
import Button from "../../views/Button/Button";

import { DummyData } from "./Home.model";
import classes from "./Home.module.scss";
import logo from "../../assets/images/profero-logo.jpg";

type Props = {
  data: DummyData[];
  onClick?: (id: string) => void;
};

const HomeView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();
  console.log(props.data);

  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <h1 className={classes["title"]}>{t("pages.home.title")}</h1>
        <img className={classes["logo"]} src={logo} alt="profero"></img>
      </div>
      <div className={classes["body"]}>
        {props.data.map((item: DummyData) => (
          <Card key={item.id} className={classes["card"]}>
            <div className={classes["cardData"]}>
              <div className={classes["attribute"]}>
                <span className={classes["attribute__title"]}>Name:</span>
                <span className={classes["attribute__content"]}>
                  {item.name}
                </span>
              </div>
              <div className={classes["attribute"]}>
                <span className={classes["attribute__title"]}>URL:</span>
                <span className={classes["attribute__content"]}>
                  {item.url}
                </span>
              </div>
              <div className={classes["attribute"]}>
                <span className={classes["attribute__title"]}>Id:</span>
                <span className={classes["attribute__content"]}>{item.id}</span>
              </div>
              <div className={classes["attribute"]}>
                <span className={classes["attribute__title"]}>Platform:</span>
                <span className={classes["attribute__content"]}>
                  {item.platform}
                </span>
              </div>
              <div className={classes["attribute"]}>
                <span className={classes["attribute__title"]}>Versions:</span>
                <span className={classes["attribute__content"]}>
                  {item.version}
                </span>
              </div>
            </div>
            <Button
              type="button"
              color="primary"
              className={classes["chooseBtn"]}
              onClick={() => props.onClick?.(item.id)}
            >
              Choose
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

HomeView.displayName = "HomeView";
HomeView.defaultProps = {};

export default HomeView;
