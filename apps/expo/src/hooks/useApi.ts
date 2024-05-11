import { useState } from "react";

interface ApiReturnType {
  data: any;
  error: boolean;
  loading: boolean;
  request: (...args: any[]) => Promise<any>;
}

export default function useApi(apiFunc): ApiReturnType {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: Parameters<typeof apiFunc>) => {
    setLoading(true);
    const response = await apiFunc(...args);

    setLoading(false);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
}
