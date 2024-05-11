import { ApiResponse, create } from "apisauce";
import { AxiosRequestConfig } from "axios";

import authStorage from "../auth/storage";
import settings from "../config/settings";
import cache from "../utils/cache";

const apiClient = create({
  baseURL: settings.webUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();
  if (!token) return;

  if (!request.headers) request.headers = {};
  request.headers["x-auth-token"] = token;
});

const { get } = apiClient;

apiClient.get = async <T, U = T>(
  url: string,
  params?: {},
  axiosConfig?: AxiosRequestConfig,
): Promise<ApiResponse<T, U>> => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return Promise.resolve<ApiResponse<T, U>>(response as ApiResponse<T, U>);
  }

  const data = await cache.get(url);
  return data
    ? Promise.resolve<ApiResponse<T, U>>({ ok: true, data } as ApiResponse<
        T,
        U
      >)
    : Promise.resolve<ApiResponse<T, U>>(response as ApiResponse<T, U>);
};

export default apiClient;
