'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  ViroBox,
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
      "thierryTarget" : {
        source : require('./res/uno.jpg'),
        orientation : "Up",
        physicalWidth : 0.05 // real world width in meters
      },
    });

    var styles = StyleSheet.create({
      boldFont: {
        color: '#FFFFFF',
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'left',
        fontWeight: 'bold',
      },
    });
  
    ViroMaterials.createMaterials({
      frontMaterial: {
        diffuseColor: '#FF0000',
      },
      backMaterial: {
        diffuseColor: '#FFFFFF',
      },
      sideMaterial: {
        diffuseColor: '#0000FF',
      },
    });

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
      <ViroARImageMarker target={"thierryTarget"} >
        <ViroText
          fontSize={2}
          style={styles.boldFont}
          textLineBreakMode={"wordwrap"}
          position={[.05, 0, 0]}
          width={.1} height={.1}
          extrusionDepth={.1}
          rotation={[-90, 0, 0]}
          materials={["frontMaterial", "backMaterial", "sideMaterial"]}
          text="STIL VOR TALENT"
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
