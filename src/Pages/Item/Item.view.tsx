import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Button from "../../views/Button/Button";
import Card from "../../views/Card/Card";

import { ItemDummyData } from "../Home/Home.model";
import classes from "./Item.module.scss";
import logo from "../../assets/images/profero-logo.jpg";

type Props = {
  tempData: ItemDummyData;
  onClickDownload?: () => void;
};

const ItemView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <Link type="button" color="primary" to="/">
          {t("pages.item.back")}
        </Link>
        <img className={classes["logo"]} src={logo} alt="profero"></img>
      </div>
      <div className={classes["body"]}>
        <Card className={classes["content"]}>
          <div className={classes["card"]}>
            <div className={classes["attribute"]}>
              <span className={classes["attribute__title"]}>
                {t("pages.item.cards.id")}
              </span>
              <span className={classes["attribute__content"]}>
                {props.tempData?.id}
              </span>
            </div>
            <div className={classes["attribute"]}>
              <span className={classes["attribute__title"]}>
                {t("pages.item.cards.url")}
              </span>
              <span className={classes["attribute__content"]}>
                {props.tempData?.url}
              </span>
            </div>
          </div>
          <a href={props.tempData.url}>
            <Button
              className={classes["downloadBtn"]}
              type="button"
              color="primary"
              onClick={props.onClickDownload}
            >
              {t("pages.item.download")}
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
};

ItemView.displayName = "ItemView";
ItemView.defaultProps = {};

export default ItemView;
