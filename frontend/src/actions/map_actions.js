export const RECEIVE_TOILET_POS = 'RECEIVE_TOILET_POS';
export const RECEIVE_TOILET_ADDRESS = "RECEIVE_TOILET_ADDRESS";
export const SET_CENTER = 'SET_CENTER';

export const receiveToiletPos = position => ({
    type: RECEIVE_TOILET_POS,
    position
})

export const receiveToiletAddress = address => ({
    type: RECEIVE_TOILET_ADDRESS,
    address
})

export const setCenter = center => ({
    type: SET_CENTER,
    center
})



