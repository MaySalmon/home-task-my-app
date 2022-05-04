import React, { useRef, useState } from "react";
import { Parser } from "json2csv";

import HomeView from "./Home.view";

import { DummyData } from "./Home.model";

type Props = Record<never, never>;

const Home: React.FC<Props> = () => {
  //const [dataState, setDataState] = useState<string[]>([]);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const [selectedItemsState, setSelectedItemsState] = useState<string[]>([]);

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

  const onClickDownloadData = (value: string) => {
    const dataToDownload =
      data.find((item: DummyData) => item.id === value) || [];

    if (!downloadRef.current) {
      return;
    }
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(dataToDownload);

    downloadRef.current.href =
      "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    downloadRef.current.click();
  };

  return (
    <React.Fragment>
      <HomeView data={data} onClickDownload={onClickDownloadData}></HomeView>
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

Home.displayName = "Home";
Home.defaultProps = {};

export default Home;
