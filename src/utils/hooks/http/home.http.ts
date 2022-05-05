import { AxiosResponse } from "axios";

import {
  GetDataResponse,
  GetDataSingleResponse,
} from "../../../models/http/home";
import { serverAxios } from "../../http";

class homeHttp {
  // TODO: implement this properly whwn the demo server is working
  private static route = "/localhost:8000";

  public async getData(): Promise<GetDataResponse> {
    return serverAxios
      .get(`${homeHttp.route}/resources`)
      .then((response: AxiosResponse<GetDataResponse>) => {
        return response.data;
      });
  }

  public async getDataById(id: string): Promise<GetDataSingleResponse> {
    return serverAxios
      .get(`/downloadurl/${id}`)
      .then((response: AxiosResponse<GetDataSingleResponse>) => {
        return response.data;
      });
  }
}

export default homeHttp;
