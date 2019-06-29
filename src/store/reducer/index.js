// 把所有的reducer合并成为一个reducer 一个store只有一个reducer
import { combineReducers } from 'redux';
import vote from './vote';
import personal from './personal';
//合并reducer的时候，为了保证每一个板块管理的状态信息不冲突，在redux中按照板块的名称，以合并的时候作为属性名为主，作为最后划分管理的名字。 
let reducer = combineReducers({
  vote,
  personal,
});

export default reducer;