import * as types from "../../ActionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  start: false // 'login' / 'after-login'
});

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case types.STARTUP:
      return {
        ...state,
        start:true
      }
    default:
      return state;
  }
}
