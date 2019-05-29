import { combineReducers } from 'redux'
import activeSticker from './activeSticker'
import stickers from './stickers'

export default combineReducers({
  stickers,
  activeSticker
})