/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './js/redux/reducers'

import DetectSticker from './js/views/DetectSticker'

const store = createStore(rootReducer);


// Sets the default scene you want for AR and VR

export default class ViroSample extends Component {
  constructor() {
    super();


  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return (
      <Provider store={ store }>
        <DetectSticker></DetectSticker>
      </Provider>
    );
  }

}

module.exports = ViroSample
