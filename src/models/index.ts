import { MouseEventHandler } from "react";

export interface Post {
  mode?: number;
  id?: string;
  title: string;
  content: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
