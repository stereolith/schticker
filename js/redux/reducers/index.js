import { combineReducers } from 'redux'
import activeSticker from './activeSticker'
import stickers from './stickers'
import activeSidebar from './activeSidebar'
import activeView from './activeView'

export default combineReducers({
  stickers,
  activeSticker,
  activeSidebar,
  activeView
})