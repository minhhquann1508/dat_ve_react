import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {
    renderTable = () => {
        return this.props.danhSachVeDaDat.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.userName}</td>
                    <td>{item.danhSachChoNgoiDangDat.map((ghe, index) => {
                        return (
                            <b key={index}>{ghe.soGhe}</b>
                        )
                    })}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="container mt-3">
                <div className='text-center my-2'>
                    <button onClick={() => this.props.confirmBooking()} className='btn btn-success'>Confirm Selection</button>
                </div>
                <table className="table" border={2}>
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Hàng vé đã đặt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachVeDaDat: state.BookingTicketReducer.danhSachVeDaDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        confirmBooking: () => {
            dispatch({
                type: 'CONFIRM_BOOKING'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)