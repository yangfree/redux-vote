import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import VoteBase from './component/vote/VoteBase';
import VoteHandle from './component/vote/VoteHandle';
// redux使用
import store from './store';

const root = document.getElementById('root');

ReactDOM.render(<section className="panel panel-default" style={{ width: '50%', margin: '20px auto' }}>
  <VoteBase store={store}></VoteBase>
  <VoteHandle store={store}></VoteHandle>
</section>, root);