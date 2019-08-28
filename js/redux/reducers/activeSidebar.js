
const activeSidebar = (state = false, action) => {
    switch (action.type) {
      case 'SET_SIDEBAR':
        console.log('sidebar true')
        return action.sidebarActive
      default:
        return state
    }
  }
  
  export default activeSidebar