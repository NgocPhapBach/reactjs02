import React, { Component } from 'react'

export default class GioKinh extends Component {

  renderGioKinh = () => {
    return this.props.gioKinh.map((product) => {
      let {id, url, name, desc} = product
      return <div key={id} >
        <img style={{ width: "155px", position: "absolute", top: "93px", left: "73px", opacity: "70%" }} src={url} alt="" />
        <div className='p-2 text-white' style={{ width: "300px", height: "120px", position: "absolute", bottom: "0", left: "0", background: "rgba(241, 89, 34, 0.5" }}>
          <h5 style={{ color: "blue" }}>{name}</h5>
          <p>{desc}</p>
        </div>
      </div>
    })
  }

  render() {
    return (
      <div className='m-auto' style={{ width: "300px", position: "relative" }}>
        <img style={{ width: "300px", display: "block" }} src="./img/glassesImage/model.jpg" alt="" />
        {this.renderGioKinh()}
      </div>
    )
  }
}
