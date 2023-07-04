import React, { Component } from 'react'
import data from './data/danhSachGhe (1).json';
import Seat from './Seat'
export default class SeatList extends Component {
    renderDanhSachHangGhe = () => {
        return data.map((item, index) => {
            return (
                <div key={index}>{item.hang}</div>
            )
        })
    }
    renderDanhSachGhe = () => {
        return data.map((item, index) => {
            if (index !== 0) {
                return (
                    <div key={index}>
                        {item.danhSachGhe.map((ghe, index) => {
                            return (
                                <Seat key={index} ghe={ghe} />
                            )
                        })}
                    </div>
                )
            }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="seat-list d-flex">
                    <div>
                        {this.renderDanhSachHangGhe()}
                    </div>
                    <div>
                        {this.renderDanhSachGhe()}
                    </div>
                </div>
                <div className='screen text-center'>SCREEN</div>
            </div>
        )
    }
}
