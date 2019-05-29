'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARImageMarker,
  ViroSphere,
  ViroARTrackingTargets,
  ViroMaterials
} from 'react-viro'; 

export default class StickerMarker extends Component {

    constructor(props) {
      super(props);
  
      ViroARTrackingTargets.createTargets({
        "target": {
          source : {uri: this.props.imgUri},
          orientation : "Up",
          physicalWidth : this.props.width
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
  
    }
  
    render() {
      return (
        <ViroARImageMarker target={"target"} >
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
    