import {combineReducers} from "redux";
import amountReducer from "./amountReducer";
import numbReducer from "./shareReducer";
import metaReducer from "./metaReducer";
import amazonReducer from "./amazonReducer";
import appleReducer from "./appleReducer";
import netflixReducer from "./netflixReducer";
import googleReducer from "./googleReducer";



const reducers = combineReducers({
  amount: amountReducer,
  numb: numbReducer,
  Meta: metaReducer,
  Amazon: amazonReducer,
  Apple: appleReducer,
  Netflix: netflixReducer,
  Google: googleReducer
})

export default reducers