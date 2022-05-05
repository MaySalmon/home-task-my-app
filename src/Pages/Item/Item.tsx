import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Parser } from "json2csv";

import ItemView from "./Item.view";

import { GetDataSingleResponse } from "../../models/http/home";
import useHttp from "../../utils/use-http";
import { ItemDummyData } from "../Home/Home.model";

type Props = Record<never, never>;

const Item: React.FC<Props> = () => {
  const params = useParams<"id">();
  const http = useHttp();
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const [itemDataState, setItemDataState] = useState<ItemDummyData>();

  useEffect(() => {
    http.home
      .getDataById(params.id!)
      .then((response: GetDataSingleResponse) => {
        setItemDataState(() => response);
      })
      .catch(() => {
        console.error();
      });
  }, [params.id]);

  const tempData: ItemDummyData = useMemo(() => {
    return [
      {
        id: "97fc5a40-1a55-40e0-9f9a-2fc5ced5c288",
        url: "https://www.moovex.ai/privacy-policy",
      },
      {
        id: "975a6eb3-9574-436c-9aa1-7808f6e4ad53",
        url: "https://www.moovex.ai/privacy-policy",
      },
      {
        id: "bca4781a-7af4-4baa-87ea-38ee75e16c90",
        url: "https://www.moovex.ai/privacy-policy",
      },
      {
        id: "76de8132-29d8-4f60-8f4e-b5a654e0f4ee",
        url: "https://www.moovex.ai/privacy-policy",
      },
    ].find(
      (item: ItemDummyData) => item.id === params.id
    ) as unknown as ItemDummyData;
  }, [params.id]);

  const onClickDownloadData = () => {
    if (!downloadRef.current) {
      return;
    }

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(tempData!);

    downloadRef.current.href =
      "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    downloadRef.current.click();
  };

  return (
    <React.Fragment>
      <ItemView
        tempData={tempData}
        onClickDownload={onClickDownloadData}
      ></ItemView>
      <a
        ref={downloadRef}
        href="#"
        download="data.csv"
        style={{ display: "hidden" }}
      >
        Hidden download CSV
      </a>
    </React.Fragment>
  );
};

Item.displayName = "Item";
Item.defaultProps = {};

export default Item;
