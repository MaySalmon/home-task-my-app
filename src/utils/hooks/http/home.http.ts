import { AxiosResponse, CancelTokenSource } from "axios";

import { GetDataResponse } from "../../../models/http/home";
import { serverAxios } from "../../http";

class homeHttp {
  private static route = "/resources";

  public async getdata(): Promise<GetDataResponse> {
    return serverAxios
      .get(`${homeHttp.route}`)
      .then((response: AxiosResponse<GetDataResponse>) => {
        return response.data;
      });
  }
}

export default homeHttp;
