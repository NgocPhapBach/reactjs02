import React, { Component } from 'react'
import GlassesList from './GlassesList'
import GioKinh from './GioKinh'

export default class ContentThuKinh extends Component {

    glasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        gioKinh: []
    }

    showGlasses = (productClicked) => {
        let gioKinhUpdate = [...this.state.gioKinh]
        let glassesFind = this.state.gioKinh.find((product) => {
            return product.id === productClicked.id
        })
        if (glassesFind) {

        } else {
            gioKinhUpdate = []
            let glassesGK = { ...productClicked }
            gioKinhUpdate.push(glassesGK)
        }

        this.setState({
            gioKinh: gioKinhUpdate
        })
    }

    render() {
        return (
            <div className='container pb-5'>
                <div className="row py-5">
                    <div className="col-6">
                        <h3 className='text-center text-white'>AFTER</h3>
                        <GioKinh gioKinh={this.state.gioKinh} />
                    </div>
                    <div className="col-6">
                        <h3 className='text-center text-white'>BEFORE</h3>
                        <img className='m-auto' style={{ width: "300px", display: "block" }} src="./img/glassesImage/model.jpg" alt="" />
                    </div>
                </div>
                <GlassesList showGlasses={this.showGlasses} glasses={this.glasses} />
            </div>
        )
    }
}
