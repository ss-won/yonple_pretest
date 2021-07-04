import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();

export const client: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}`,
});
