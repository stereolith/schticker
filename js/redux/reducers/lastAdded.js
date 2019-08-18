const latestAdded = (state = 'LatestAdded', action) => {
    switch (action.type) {
      case 'ADD_STICKER':
        return action.id
      default:
        return state
    }
  }
  
  export default latestAdded