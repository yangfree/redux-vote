import React from "react";
import action from '../../store/action';

export default class VoteBase extends React.Component {
  constructor(props) {
    super(props);

    let reduxState = this.props.store.getState().vote;
    this.state = { ...reduxState };
  }

  componentWillMount() {
    this.props.store.dispatch(action.vote.init({
      title: '这是一个默认值',
      n: 0,
      m: 100,
    }));
    let reduxState = this.props.store.getState().vote;
    this.setState({
      ...reduxState,
    });
  }

  componentDidMount() {
    this.props.store.subscribe(() => {
      let reduxState = this.props.store.getState().vote;
      this.setState({
        ...reduxState,
      });
    });
  }

  render() {
    let { title, n, m } = this.state;
    return <div style={{ padding: '20px 15px' }}>
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        支持人数: <span>{n}</span>
        <br />
        反对人数: <span>{m}</span>
      </div>
    </div>
  }
}