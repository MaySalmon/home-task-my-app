import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../views/Button/Button";

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
      <div className={classes["body"]}>
        <span>{props.tempData?.id}</span>
        <span>{props.tempData?.url}</span>
        <a href={props.tempData.url}>
          <Button type="button" color="primary" onClick={props.onClickDownload}>
            {t("pages.item.download")}
          </Button>
        </a>
      </div>
      <Button type="button" color="primary" to="/">
        {t("pages.item.back")}
      </Button>
    </div>
  );
};

ItemView.displayName = "ItemView";
ItemView.defaultProps = {};

export default ItemView;
