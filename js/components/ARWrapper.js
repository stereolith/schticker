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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker, addSticker } from '../redux/actions';

class ARWrapper extends Component {

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
    this.props.selectSticker('')
    this.props.addSticker(
      'abc',
      'BLAW BLAW BLAW',
      '2019:05:22 09:12:54+02:00',
      'Kim',
      'https://raw.githubusercontent.com/stereolith/schticker/master/js/res/vans.png',
      [
        {
            'lat': 50.946440,
            'lon': 6.917723,
            'added': '2019:04:06 10:42:57+02:00'
        }
      ],
      {
        'name': 'BLAW BLAW BLAW',
        'links': {
            'facebook': 'https://www.facebook.com/BLAW.CGN/'
        }
      },
      'Street-Art Kollektiv aus Köln ohne nähere Angaben'
    )
    this.props.addSticker(
      'ccc',
      'Phase 10',
      '2019:05:22 09:12:54+02:00',
      'Lukas',
      'https://raw.githubusercontent.com/stereolith/schticker/master/js/res/uno.jpg',
      [
        {
            'lat': 50.946440,
            'lon': 6.917723,
            'added': '2019:04:06 10:42:57+02:00'
        }
      ],
      {
        'name': 'Phase 10 Spielkarte',
        'links': {
            'facebook': 'https://www.facebook.com/BLAW.CGN/'
        }
      },
      'Spielkarte für das Spiel Phase10'
    )
    setTimeout(() => {
      console.log(this.props.activeStickerId)
      console.log(this.props.stickers)
    }, 1000)
  }
  
  render() {
    const markers = this.props.stickers.map((sticker) => 
      <StickerMarker imgUri={sticker.imageUrl} stickerID={sticker.id} width="0.07"></StickerMarker>
    )
    return (
      <ViroARScene numberOfTrackedImages={5} onTrackingUpdated={this._onInitialized} >
        { markers }
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


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectSticker,
    addSticker
  }, dispatch)
);
const mapStateToProps = (state) => {
  const { stickers } = state
  return { 
    activeStickerId: state.activeSticker,
    activeSticker: state.stickers.filter((sticker) => {
      return sticker.id === state.activeSticker
    }),
    stickers }
};

export default connect(mapStateToProps, mapDispatchToProps)(ARWrapper);
