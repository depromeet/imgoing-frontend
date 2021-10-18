import { combineReducers } from 'redux'
import users from "./slices/user"
const reducer = combineReducers({
    users
})

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;