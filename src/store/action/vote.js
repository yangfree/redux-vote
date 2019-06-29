import * as TYPE from "../actiopn_types";
let vote = {
  support() {
    return {
      type: TYPE.VOTE_SUPPORT,
    }
  },
  against() {
    return {
      type: TYPE.VOTE_AGAINST,
    }
  },
  init(initData = {}) {
    return {
      type: TYPE.VOTE_INIT,
      ...initData,
    }
  }
}

export default vote;