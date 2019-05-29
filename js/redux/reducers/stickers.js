const stickers = (state = [], action) => {
    switch (action.type) {
      case 'ADD_STICKER':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            added: action.added,
            addedBy: action.addedBy,
            imageUrl: action.imageUrl,
            location: action.location,
            author: action.author,
            description: action.description
          }
        ]
      default:
        return state
    }
  }
  
  export default stickers