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

import StickerMarker from './StickerMarker'

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

const mapStateToProps = (state) => {
  const { activeSticker } = state
  return { activeSticker }
};

module.exports = ARWrapper;
