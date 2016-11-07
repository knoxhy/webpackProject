/*var config = require('./config.json');

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};*/

import React, {Component} from 'react'

export default class Type extends Component{
  constructor(props) {
    super(props);
    this.state ={
      val:"确定"
    };
    this.handleClick =this.handleClick.bind(this)
} 
  handleClick(){
    this.setState({
      val:'组件通信测试'
    })
    this.props.callbackParent(this.state.val)
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>{this.state.val}</button>
      </div>
    );
  }
}