import { ComponentProps } from "react";

export type ViewList = ComponentProps<"input"> & {
  show: number;
  setShow: (value: number) => void;
  startingPosition?: number;
};
