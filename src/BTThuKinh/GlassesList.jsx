import React, { Component } from 'react'
import GlassesItem from './GlassesItem'

export default class GlassesList extends Component {

  renderGlassesList = () => {
    return this.props.glasses.map((product) => {
      let {id} = product
      return <div className="col-2 py-2" key={id}>
        <GlassesItem showGlasses={this.props.showGlasses} product={product}/>
      </div>
    })
  }

  render() {
    return (
      <div className="row py-5 bg-white">
        {this.renderGlassesList()}
      </div>
    )
  }
}
