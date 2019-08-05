'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker, setActiveView } from '../redux/actions'

import {
  ViroARImageMarker,
  ViroSphere,
  ViroARTrackingTargets,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations
} from 'react-viro'; 

class StickerMarker extends Component {

  constructor(props) {
    super(props);

    ViroARTrackingTargets.createTargets({
      [this.props.stickerID]: {
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

    ViroAnimations.registerAnimations({
      animateBall: {
        properties: {
          opacity: 1
        },
        easing:"EaseIn", 
        duration: 1000,
        delay: 10000
      }
    });
  }

  componentDidMount() {
    console.log(this.props.selectSticker)
  }

  render() {
    return (
      <ViroARImageMarker target={this.props.stickerID} >
        <ViroAmbientLight color="#FFFFFF" />
        <Viro3DObject source={require('../res/sphere.vrx')}
              position={[.02, 0, .01]}
              scale={[0.01, 0.01, 0.01]}
              opacity={0.7}
              animation={{name: 'Take 001',
                      run:true,
                      loop:true
                    }}
              type="VRX"
              onClick={() => 
                this.props.selectSticker(this.props.stickerID)
              }  
            />
              
      </ViroARImageMarker>
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
  
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectSticker,
    setActiveView
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { activeSticker } = state
  return { activeSticker }
};


export default connect(mapStateToProps, mapDispatchToProps)(StickerMarker);