'use strict';

import React, { Component } from 'react';

import {StyleSheet, Alert} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  ViroSphere,
  ViroARTrackingTargets,
  ViroMaterials
} from 'react-viro';

import StickerMarker from './components/StickerMarker'

export default class ARWrapper extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    ViroMaterials.createMaterials({
      sphereMaterial: {
        diffuseColor: '#FF0000',
      },
      sphereBlue: {
        diffuseColor: '#4286f4'
      }
    });

    

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  componentWillMount() {
    console.log(this.state.image)
  }

  render() {
    return (
    <ViroARScene numberOfTrackedImages={5} onTrackingUpdated={this._onInitialized} >
      <StickerMarker imgUri='https://raw.githubusercontent.com/stereolith/schticker/master/js/res/vans.png' width="0.07"></StickerMarker>
    </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = ARWrapper;
