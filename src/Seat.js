import React, { Component } from 'react'
import { connect } from 'react-redux'
class Seat extends Component {
    constructor(props) {
        super()
    }
    handleBookingTicket = () => {
        if (!this.props.status) {
            alert('Vui lòng điền tên người dùng !!')
        }
        else {
            this.props.bookingTicket(this.props.ghe)
        }
    }
    render() {
        let cssGheDaDat = '';
        let cssGheDangDat = '';
        let index = this.props.thongTinNguoiDung.danhSachChoNgoiDangDat
            .findIndex(seat => seat.soGhe === this.props.ghe.soGhe)
        if (this.props.ghe.daDat) {
            cssGheDaDat = 'gheDaDat'
            return (
                <button disabled onClick={() => this.handleBookingTicket()} className={`seat mx-2 ${cssGheDaDat}`}></button>
            )
        }
        if (index != -1) {
            cssGheDangDat = 'gheDangDat';
        }
        return (
            <button onClick={() => this.handleBookingTicket()} className={`seat mx-2 ${cssGheDangDat}`}></button>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        thongTinNguoiDung: state.BookingTicketReducer.thongTinNguoiDung,
        status: state.BookingTicketReducer.status,
        danhSachVeDaDat: state.BookingTicketReducer.danhSachVeDaDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bookingTicket: (seat) => {
            dispatch({
                type: 'GET_INFO_TICKET',
                seat
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seat)
