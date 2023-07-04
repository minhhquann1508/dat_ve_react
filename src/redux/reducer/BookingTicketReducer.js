const stateDefault = {
    thongTinNguoiDung: {
        userName: '',
        danhSachChoNgoiDangDat: []
    },
    status: false,
    danhSachVeDaDat: []
}

export const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SUBMIT_NEW_USER_SEAT': {
            if (action.newUser.userName !== '') {
                let newStatus = true;
                state = {
                    ...state,
                    thongTinNguoiDung: {
                        ...state.thongTinNguoiDung,
                        userName: action.newUser.userName
                    },
                    status: newStatus,
                }
            }
            return { ...state };
        }
        case 'GET_INFO_TICKET': {
            let newThongTinNguoiDung = { ...state.thongTinNguoiDung }
            let index = newThongTinNguoiDung.danhSachChoNgoiDangDat.findIndex(seat => seat.soGhe === action.seat.soGhe);
            if (index !== -1) {
                newThongTinNguoiDung.danhSachChoNgoiDangDat.splice(index, 1);
            }
            else {
                newThongTinNguoiDung.danhSachChoNgoiDangDat.push(action.seat)
            }
            state.thongTinNguoiDung = newThongTinNguoiDung
            return { ...state };
        }
        case 'CONFIRM_BOOKING': {
            if (!state.status || state.thongTinNguoiDung.danhSachChoNgoiDangDat.length <= 0) {
                alert('Chưa đủ thông tin để đặt vé');
            }
            else {
                let newDanhSachVeDaDat = [...state.danhSachVeDaDat]
                newDanhSachVeDaDat.push(state.thongTinNguoiDung)
                return {
                    thongTinNguoiDung: {
                        userName: '',
                        danhSachChoNgoiDangDat: []
                    },
                    status: false,
                    danhSachVeDaDat: newDanhSachVeDaDat
                }
            }
            console.log(state.danhSachVeDaDat);
            return { ...state };
        }
        default: {
            return state
        }
    }
}
