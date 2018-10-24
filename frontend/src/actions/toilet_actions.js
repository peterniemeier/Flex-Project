export const RECEIVE_TOILETS = 'RECEIVE_TOILETS';
export const RECEIVE_TOILET = 'RECEIVE_TOILET';
export const REMOVE_TOILET = 'REMOVE_TOILET';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveToilets = toilets => {
  return {
    type: RECEIVE_TOILETS,
    toilets
  }
}

export const receiveToilet = toilet => {
  return {
    type: RECEIVE_TOILET,
    toilet
  }
}


export const removeToilet = id => {
  return {
    type: REMOVE_TOILET,
    id
  }
}

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}
