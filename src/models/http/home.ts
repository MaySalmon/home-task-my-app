//request
export type GetDataRequest = {
  id: string;
  url: string;
};

//response
export type GetDataResponse = {
  name: string;
  id: string;
  url: string;
  version: string;
  date: string;
  platform: string;
}[];

export type GetDataSingleResponse = {
  id: string;
  url: string;
};
