import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <button className="new">
            <span className="plus">+</span>
            <span className="label">New</span>
          </button>
        </li>
        <li>Dashboard</li>
        <li>Banking</li>
        <li>Expenses</li>
        <li>Sales</li>
        <li>Projects</li>
        <li>Payroll</li>
        <li>Reports</li>
        <li>Taxes</li>
        <li>Milage</li>
        <li>Accounting</li>
        <li>My Accountant</li>
      </ul>
    )
  }
}
