import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatch, useParams } from "react-router-dom";
import item from "../../i18n/en/pages/item";
import Button from "../../views/Button/Button";
import Card from "../../views/Card/Card";

import { DummyData, ItemDummyData } from "../Home/Home.model";
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
          <button onClick={props.onClickDownload}>download</button>
        </a>
      </div>
      {/* <Button to="/">{t("pages.item.back")}</Button> */}
      <Link to="/">
        <button>{t("pages.item.back")}</button>
      </Link>
    </div>
  );
};

ItemView.displayName = "ItemView";
ItemView.defaultProps = {};

export default ItemView;
