//request
export type GetDataRequest = {
  id: string;
  url: string;
};

//response
export type GetDataResponse = {
  name: string;
  id: string;
  URL: string;
  version: string;
  date: string;
  platform: string;
}[];
