/*var config = require('./config.json');

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};*/

import React, {Component} from 'react'
import config from './config.json';
import Type from './Type';

export default class Greeter extends Component{
constructor(props) {
    super(props);
    this.state ={
    	val:config.greetText
    };
    this.onChildChanged = this.onChildChanged.bind(this)
}    
onChildChanged(vals){
	this.setState({
		val:vals
	})
}
  render() {
    return (
      <div>
        {this.state.val}
        <Type callbackParent={this.onChildChanged}/>
      </div>
    );
  }
}