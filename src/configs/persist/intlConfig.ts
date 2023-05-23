import { commonConfigPersist } from "./commonConfig";

export const intlConfigPersist = {
  ...commonConfigPersist,
  key: "intl",
  whiteList: ["lang"],
};
