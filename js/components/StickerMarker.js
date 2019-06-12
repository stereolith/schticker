'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker } from '../redux/actions'

import {
  ViroARImageMarker,
  ViroSphere,
  ViroARTrackingTargets,
  ViroMaterials
} from 'react-viro'; 

class StickerMarker extends Component {

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

  componentDidMount() {
    console.log(this.props.selectSticker)
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
          onClick={() => 
            this.props.selectSticker(this.props.stickerID)
          }
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
  
const mapDispatchToProps = dispatch => {
  return {
    selectSticker: (id) => {
      dispatch(selectSticker(id))
    }
  }
}

const mapStateToProps = (state) => {
  const { activeSticker } = state
  return { activeSticker }
};


export default connect(mapStateToProps, mapDispatchToProps)(StickerMarker);