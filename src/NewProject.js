import React, { Component } from 'react';
import './NewProject.css';

import { connect } from "react-redux";
import { showAction, hideAction } from "./redux/actions";

class NewProject extends Component {

  state = {
    showCustomerName: false,
    showNewCustomer: false,
    customerName: ''
  }

  constructor(props) {
    super(props);
  }

  renameProject(name) {
    this.props.setProjectName(name);
  }

  setProjectName(e) {
    var newVal = e.target.value;
    if (newVal.length > 0) {
      this.renameProject(newVal);
    }
  }

  saveProject(name) {
    console.log('saveProject');
    this.props.showAction();
  }

  save(e) {
    this.saveProject();
  }

  setCustomer(e) {
    var show = false;
    if (e.target.value.length > 0) {
      show = true;
    }
    this.setState({
      showCustomerName: show,
      customerName: e.target.value
    });
  }

  newCustomer(e) {
    this.setState({
      showCustomerName: false,
      showNewCustomer: true
    });
  }

  hideNewCustomer(e) {
    this.setState({
      showCustomerName: false,
      showNewCustomer: false
    });
  }
  
  render() {
    return (
      <div className={`new-project ${!this.props.dialog ? 'show' : 'hide'}`}>
        <div className="scrim"></div>
        <div className="side-panel">
          <h2>New project</h2>
          <h4>Project name *</h4>
          <input onBlur={(e) => this.setProjectName(e)}></input>
          <h4>Customer *</h4>
          <input onKeyUp={(e) => this.setCustomer(e)} onBlur={(e) => this.setCustomer(e)} onClick={(e) => this.setCustomer(e)}></input>
          <div className={`add-customer ${this.state.showCustomerName ? 'show' : ''}`} onClick={(e) => this.newCustomer(e)}>
            <span className="add">+</span> Add {this.state.customerName}
          </div>
          <div className={`new-customer ${this.state.showNewCustomer ? 'show' : ''}`}>
            <h2>New Customer</h2>
            <h4>* Name</h4>
            <input value={this.state.customerName}></input>
            <div className="save-container">
              <button className="save" onClick={(e) => this.hideNewCustomer(e)}>Save</button>
            </div>
            <div className="divider"></div>
            <p><a>Got a Gmail account</a></p>
          </div>
          <h4>Notes</h4>
          <textarea></textarea>
          <button className="green" onClick={(e) => this.save()}>Save</button>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  showAction: () => dispatch(showAction),
  hideAction: () => dispatch(hideAction),
  setProjectName: (name) => dispatch({
    type: 'projectName',
    payload: name
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
