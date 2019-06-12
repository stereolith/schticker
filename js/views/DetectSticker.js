import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ARWrapper from '../components/ARWrapper'

import InfoCard from '../components/InfoCard'

import {
    ViroARSceneNavigator
  } from 'react-viro';

//JavaScript-Klasse, ähnlich wie C++ Klasse
class DetectSticker extends Component {
    constructor() {
        super()

        this.state = {
            cardActive: false
        }

    }

//    
    render() {
        return(
            <View style={localStyles.flex}>
                <ViroARSceneNavigator apiKey='AAE05855-A301-4B82-9AE5-9DB1EEF4F23C'
                initialScene={{scene: ARWrapper}} sryle={localStyles.arBg} />
                {this._renderCard()}
            </View>
        )
    }

//Soll Info-Karte für Sticker angezeigt werden?
    _renderCard() {
        console.log(this.props.activeSticker)
        //wenn Sticker-Id nicht leer, zeige Karte an
        if(this.props.activeSticker != '') {
            return(
                <InfoCard />
            )

        }
    }
}

var localStyles = StyleSheet.create({
    flex: {
        flex: 1,
    }
})

const mapStateToProps = (state) => {
    const { activeSticker } = state
    return { activeSticker }
};

export default connect(mapStateToProps)(DetectSticker);
