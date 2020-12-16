import React, { Component } from 'react';
import './Start.css';

import { connect } from "react-redux";
import { showAction, hideAction } from "./redux/actions";

class Start extends Component {
  render() {
    return (
      <div className="start">
        <h1>Run your projects with confidence</h1>
        <h4>Make better decisions by knowning how your jobs are doing</h4>
        <button className="green" onClick={(e) => this.props.hideAction(e)}>Start a project</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  hideAction: () => dispatch(hideAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
