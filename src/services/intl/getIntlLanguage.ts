import { LANGUAGES } from "../../configs/intl/languages/languages";
import { default as en } from "../../configs/intl/languages/en-US.json";
import { default as vi } from "../../configs/intl/languages/vi.json";

type Tlanguage = typeof en;
export const getLanguageSource: (lang: string) => Tlanguage = (
  lang: string
) => {
  let languageSource;
  switch (lang) {
    case LANGUAGES.ENGLISH:
      languageSource = en;
      break;
    case LANGUAGES.VIETNAM:
      languageSource = vi;
      break;
    default:
      languageSource = en;
      break;
  }
  return languageSource;
};
