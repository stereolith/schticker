import { combineReducers } from 'redux'
import activeSticker from './activeSticker'
import stickers from './stickers'
import activeSidebar from './activeSidebar'
import activeView from './activeView'
import latestAdded from './lastAdded'

export default combineReducers({
  stickers,
  activeSticker,
  activeSidebar,
  activeView,
  latestAdded
})