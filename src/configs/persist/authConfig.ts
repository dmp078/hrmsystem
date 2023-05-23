import { commonConfigPersist } from "./commonConfig";

export const authConfigPersist = {
  ...commonConfigPersist,
  key: "auth",
  whiteList: ["token"],
};
