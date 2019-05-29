export const selectSticker = id => ({
    type: 'SELECT_STICKER',
    id: id
})

export const addSticker = (id, name, added, addedBy, imageUrl, location, author, description) => ({
    type: 'ADD_STICKER',
    id: id,
    name: name,
    added: added,
    addedBy: addedBy,
    imageUrl: imageUrl,
    location: location,
    author: author,
    description: description
})

