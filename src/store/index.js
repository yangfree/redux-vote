// 创建所有的状态管理
import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer);
export default store;