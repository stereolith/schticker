const uuidv1 = require('uuid/v1');

export const selectSticker = id => ({
    type: 'SELECT_STICKER',
    id: id
})

export const addSticker = (name, added, addedBy, imageUrl, location, author, description) => ({
    type: 'ADD_STICKER',
    id: uuidv1(),
    name: name,
    added: added,
    addedBy: addedBy,
    imageUrl: imageUrl,
    location: location,
    author: author,
    description: description
})

export const setSidebar = sidebarActive => ({
    type: 'SET_SIDEBAR',
    sidebarActive: sidebarActive
})

export const setActiveView = activeView => ({
    type: 'SET_ACTIVE_VIEW',
    activeView: activeView
})

