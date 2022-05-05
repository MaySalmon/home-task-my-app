import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Button from "../../views/Button/Button";
import Card from "../../views/Card/Card";

import { ItemDummyData } from "../Home/Home.model";
import classes from "./Item.module.scss";

type Props = {
  tempData: ItemDummyData;
  onClickDownload?: () => void;
};

const ItemView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  return (
    <div className={classes["container"]}>
      <Link type="button" color="primary" to="/">
        {t("pages.item.back")}
      </Link>
      <Card className={classes["content"]}>
        <div>
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
  );
};

ItemView.displayName = "ItemView";
ItemView.defaultProps = {};

export default ItemView;
