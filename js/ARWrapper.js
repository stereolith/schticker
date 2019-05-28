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

export default class ARWrapper extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    ViroARTrackingTargets.createTargets({
      "sevenTarget" : {
        source : require('./res/uno.jpg'),
        orientation : "Up",
        physicalWidth : 0.05 // real world width in meters
      },
      "vansTarget": {
        source : require('./res/vans.png'),
        orientation : "Up",
        physicalWidth : 0.07
      }
    });
  
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

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
      <ViroARImageMarker target={"sevenTarget"} >
        <ViroSphere
          heightSegmentCount={20}
          widthSegmentCount={20}
          radius={.01}
          position={[.02, 0, .01]}
          materials={["sphereMaterial"]}
          onClick={() => {
            Alert.alert('7!');
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"vansTarget"} >
        <ViroSphere
          heightSegmentCount={20}
          widthSegmentCount={20}
          radius={.01}
          position={[.02, 0, .01]}
          materials={["sphereBlue"]}
          onClick={() => {
            Alert.alert('Vans!');
          }}
        />
      </ViroARImageMarker>
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
