const activeView = (state = 'StickerList', action) => {
    switch (action.type) {
      case 'SET_ACTIVE_VIEW':
        return action.activeView
      default:
        return state
    }
  }
  
  export default activeView