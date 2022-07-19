import React, { Component } from 'react'
import ContentThuKinh from './ContentThuKinh'
import HeaderThuKinh from './HeaderThuKinh'

export default class BTThuKinh extends Component {
    render() {
        return (
            <div className='bgThuKinh' style={{ backgroundImage: "url('./img/glassesImage/background.jpg')" }}>
                <div style={{background: "rgba(0,0,0,0.5)"}}>
                    <HeaderThuKinh />
                    <ContentThuKinh />
                </div>
            </div>
        )
    }
}
