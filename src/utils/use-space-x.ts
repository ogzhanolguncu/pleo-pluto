import useSWR, { useSWRInfinite } from "swr";
import { PAGE_SIZE } from "../constants";

type Options = {
  limit: number,
  order?: "desc" | "asc",
  sort?: string,
  offset?: number
  site_id?: string,
}

const fetcher = async (path: string) => {
  const response = await fetch(path);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
};

const getSpaceXUrl = (path: string | null, options?: Options) => {
  const searchParams = new URLSearchParams();
  for (const property in options) {
    searchParams.append(property, (options as any)[property as string | number]);
  }

  const spaceXApiBase = process.env.REACT_APP_SPACEX_API_URL;
  return `${spaceXApiBase}${path}?${searchParams.toString()}`;
}

export const useSpaceX = (path: string | null, options?: Options) => {
  const endpointUrl = getSpaceXUrl(path, options);
  return useSWR(path ? endpointUrl : null, fetcher);
}

export const useSpaceXPaginated = <T>(path: string, options: Options = { limit: PAGE_SIZE }) => {
  return useSWRInfinite<T[]>((pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) {
      return null;
    }
    return getSpaceXUrl(path, {
      ...options,
      offset: options?.limit * pageIndex,
    });
  }, fetcher)
}
