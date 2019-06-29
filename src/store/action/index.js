// 每个模块修改redux容器中的状态，派发的任务都在这(actionCreator) index也是合并所有的action

import vote from "./vote";
import personal from "./personal";

let action = {
  vote,
  personal,
};

export default action;