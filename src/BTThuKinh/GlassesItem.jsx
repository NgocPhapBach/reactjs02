import React, { Component } from 'react'

export default class GlassesItem extends Component {
  render() {
    let {url} = this.props.product
    return (
      <button onClick={() => { 
        this.props.showGlasses(this.props.product);
       }}>
        <img style={{ width: "100px" }} src={url} alt="" />
      </button> 
    )
  }
}
