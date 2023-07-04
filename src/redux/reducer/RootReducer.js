import { combineReducers, createStore } from "redux";
import { BookingTicketReducer } from './BookingTicketReducer'
export const rootReducer = combineReducers({
    BookingTicketReducer
});
export const store = createStore(rootReducer);