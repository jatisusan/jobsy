import { useEffect, useState, useCallback } from "react";

export function useFetch(fetcher, params, deps = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const run = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetcher(params);
      setData(res);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [fetcher, params]);

  useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, isLoading, error, refetch: run };
}
