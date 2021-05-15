import {combineReducers} from 'redux';
import auth from "./auth";
import levels from "./levels";
import market from "./arbitrage";
import articles from "./articles";
import country from "./countries";
import withdrawal from "./withdrawal";
import profit from "./profit";
import transaction from "./transaction";
import invest from "./invest";
import kyc from "./kyc";
import faq from "./faq";
import report from "./report";

const RootReducer = combineReducers({
  auth,
  report,
  levels,
  market,
  articles,
  country,
  withdrawal,
  profit,
  transaction,
  invest,
  kyc,
  faq
});

export default RootReducer;
