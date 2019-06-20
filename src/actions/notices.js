import { SET_NOTICE } from "./actionTypes";

export const setNotice = (notice, message) => {
    return {
        type: SET_NOTICE,
        notice: notice,
        message: message
    }
}
