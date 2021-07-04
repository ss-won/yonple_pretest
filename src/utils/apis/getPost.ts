import { client } from "utils/apis/client";

interface paramTypes {
  path: string;
  page?: string;
  query?: string;
}

export const getList = ({ path, page, query }: paramTypes) => {
  return client.get(path, { params: { search: query, page: page } });
};

export const getDetail = ({ path }: paramTypes) => client.get(path);
