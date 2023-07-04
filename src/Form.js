import React, { Component } from 'react'
import { connect } from 'react-redux'
class Form extends Component {
    constructor(props) {
        super()
        this.state = {
            thongTinNguoiDung: {
                userName: '',
                danhSachChoNgoiDangDat: [
                    { "soGhe": "A1", "gia": 75000, "daDat": false },
                    { "soGhe": "A2", "gia": 75000, "daDat": false },
                ]
            }
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            thongTinNguoiDung: { ...this.state.thongTinNguoiDung, [name]: value }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitUser(this.state.thongTinNguoiDung);
    }
    render() {
        return (
            <form className='container'>
                <div className="row">
                    <div className="col-10 form-group">
                        <label>Username</label>
                        <input type="text" name='userName' onChange={this.handleChange} className='form-control' />
                        <button onClick={this.handleSubmit} className='btn btn-success mt-2'>Start Selecting</button>
                    </div>
                </div>
                <div>
                    <button className='gheDangDat'></button> <span>Selected Seat</span>
                    <button className='gheDaDat'></button> <span>Reserved Seat</span>
                    <button className='gheConTrong'></button> <span>Empty Seat</span>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitUser: (newUser) => {
            dispatch({
                type: 'SUBMIT_NEW_USER_SEAT',
                newUser
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Form)
