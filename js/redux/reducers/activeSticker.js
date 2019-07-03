const activeSticker = (state = 'abc', action) => {
    switch (action.type) {
      case 'SELECT_STICKER':
        return action.id
      default:
        return state
    }
  }
  
  export default activeSticker