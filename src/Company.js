import React, { Component } from 'react';
import './Company.css';

import { connect } from "react-redux";

class Company extends Component {

  state = {
    projectName: "David's Orchids",
    showProject: false,
    showScrim: true
  }

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    this.state.projectName = this.props.projectName;
    if (this.state.projectName && this.state.projectName.length > 0) {
      this.state.showProject = true;
    } else {
      this.state.showProject = false;
    }
  }

  closeOverlay() {
    this.state.showProject = true;
    this.setState({
      showScrim: false,
      projectName: this.props.projectName
    });
  }

  closeOverlayClicked(e) {
    this.closeOverlay();
  }

  render() {
    return (
      <div className={`company ${this.state.showProject > 0 ? 'show' : 'hide'}`}>
        <h3><a href="#">All projects</a></h3>
        <h2>{this.state.projectName != null ? this.state.projectName : "David's Orchids"}</h2>
        <h4><a href="#">David C</a> | <a href="#">In progress</a></h4>
        <div className="card"></div>
        <ul className="company-nav">
          <li className="selected">Overview</li>
          <li>Transactions</li>
          <li>Time Activity</li>
          <li>Project Reports</li>
        </ul>
        <div className="mini-cards">
          <div className="mini-card">
            <div className="amount green">$0.00</div>
            <div className="type">Income</div>
          </div>
          <div className="mini-card">
            <div className="circle left">-</div>
            <div className="amount teal">$0.00</div>
            <div className="type">Costs</div>
            <div className="circle right">=</div>
          </div>
          <div className="mini-card">
            <div className="amount">$0.00</div>
            <div className="type">Profit</div>
          </div>
        </div>
        <div className={`overlay ${this.state.showScrim > 0 ? 'show' : 'hide'}`}>
          <div className="multi-scrim scrim1"></div>
          <div className="multi-scrim scrim2"></div>
          <div className="multi-scrim scrim3"></div>
          <div className="multi-scrim scrim4"></div>
          <div className="multi-scrim scrim5"></div>
          <div className="info">
            <div className="close" onClick={(e) => this.closeOverlayClicked(e)}>x</div>
            <h2>Your project at a glance</h2>
            <p>See your project's performance end-to-end. Track income and all your costs, including labor.</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
