import React, { Component } from 'react'
import 'index.css'

export default class Index extends Component {
  render() {
    return (
      <div className="header">
        <span className="userName"></span>
        <span className="userRole">
            <i className="icon"></i>
        </span>
      </div>
    )
  }
}