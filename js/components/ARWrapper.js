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
    //this.props.selectSticker('')
  }
  
  render() {
    //stickers = Array von allen Stickern, die es gibt
    //.map() = Funktion, nur bei Array, für jedes Element wird gleiche Funktion, 
    //die innerhalb der Klammern defniert wird ausgeführt

    const markers = this.props.stickers.map((sticker) => 
    //imgUri = prop
    //StickerMarker (Component) wird mit Attributen (props) initialisiert
      <StickerMarker key={sticker.id} imgUri={sticker.imageUrl} stickerID={sticker.id} width="0.1"></StickerMarker>
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
