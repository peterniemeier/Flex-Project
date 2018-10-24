export const RECEIVE_TOILET_POS = 'RECEIVE_TOILET_POS';
export const RECEIVE_TOILET_ADDRESS = "RECEIVE_TOILET_ADDRESS";

export const receiveToiletPos = position => ({
    type: RECEIVE_TOILET_POS,
    position
})

export const receiveToiletAddress = address => ({
    type: RECEIVE_TOILET_ADDRESS,
    address
})



