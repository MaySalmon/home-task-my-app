import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatch, useParams } from "react-router-dom";

import { DummyData } from "../Home/Home.model";
import classes from "./Item.module.scss";

type Props = Record<never, never>;

const ItemView: React.FC<Props> = () => {
  const { t } = useTranslation();

  const id = useParams();

  const temp= useMemo(()=>{
    const idtemp= id;
    const data: DummyData[] = [
      {
        name: "eMule",
        id: "97fc5a40-1a55-40e0-9f9a-2fc5ced5c288",
        URL: "",
        version: "v1.0.3",
        date: "24-02-2022",
        platform: "Win64",
      },
      {
        name: "LZ-Test",
        id: "975a6eb3-9574-436c-9aa1-7808f6e4ad53",
        URL: "",
        version: "v2.1",
        date: "4-2-2020",
        platform: "Win64",
      },
      {
        name: "LZ-Test",
        id: "bca4781a-7af4-4baa-87ea-38ee75e16c90",
        URL: "",
        version: "v2.1",
        date: "4-2-2020",
        platform: "linux-64b",
      },
      {
        name: "eMule",
        id: "76de8132-29d8-4f60-8f4e-b5a654e0f4ee",
        URL: "",
        version: "v1.0.5",
        date: "24-02-2022",
        platform: "linux-64b",
      },
    ];
  },[]);
 

  return (
    <div className={classes["container"]}>
      <Link to="/">
        <button>{t("pages.item.back")}</button>
      </Link>
    </div>
  );
};

ItemView.displayName = "ItemView";
ItemView.defaultProps = {};

export default ItemView;
