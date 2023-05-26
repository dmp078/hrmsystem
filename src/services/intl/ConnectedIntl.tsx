import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { getLanguageSource } from "./getIntlLanguage";
import { RootState } from "../../redux/store";

function mapStateToProps(state: RootState) {
  return {
    locale: state.intl.lang,
    messages: getLanguageSource(state.intl.lang),
  };
}

export default connect(mapStateToProps)(IntlProvider);
