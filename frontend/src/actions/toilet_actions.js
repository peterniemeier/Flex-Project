// import * as ToiletUtilAPI from './'

export const RECEIVE_TOILETS = 'RECEIVE_TOILETS';
export const RECEIVE_TOILET = 'RECEIVE_TOILET';
export const REMOVE_TOILET = 'RECEIVE_TOILET';

const recieveToilets = toilets => {
  return {
    type: RECEIVE_TOILETS,
    toilets
  }
}

const receiveToilet = toilet => {
  return {
    type: RECEIVE_TOILET,
    toilet
  }
}


const removeToilet = id => {
  return {
    type: 'REMOVE_TOILET',
    id
  }
}
