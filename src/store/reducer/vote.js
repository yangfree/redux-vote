/* 
 * 1. redux初始状态不存在设置初始值
 * 
 * */

import * as TYPE from '../actiopn_types';

export default function vote(state = {
  title: '',
  n: 0,
  m: 0,
}, action) {
  switch (action.type) {
    case TYPE.VOTE_SUPPORT:
      state = { ...state, n: state.n + 1 };
      break;
    case TYPE.VOTE_AGAINST:
      state = { ...state, m: state.m + 1 };
      break;
    case TYPE.VOTE_INIT:
      let { title = '', n = 0, m = 0 } = action;
      state = { ...state, title, n, m };
      break;
    default:
      break;
  }
  return state;
}