import React, { Component } from 'react'
import Button from "../../components/Button/index"

export default class Action extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <Button action={this.props.action} content={this.props.content} active={this.props.active}/>
    )
  }
}


