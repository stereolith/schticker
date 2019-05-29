import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ARWrapper from '../components/ARWrapper'

import InfoCard from '../components/InfoCard'

import {
    ViroARSceneNavigator
  } from 'react-viro';

export default class DetectSticker extends Component {
    constructor() {
        super()

        this.state = {
            cardActive: false
        }
    }

    render() {
        return(
            <View style={localStyles.flex}>
                <ViroARSceneNavigator apiKey='AAE05855-A301-4B82-9AE5-9DB1EEF4F23C'
                initialScene={{scene: ARWrapper}} sryle={localStyles.arBg} />
                <InfoCard />
            </View>
        )
    }

    showCard() {
        this.setState({
            cardActive: true
        })
    }
}

var localStyles = StyleSheet.create({
    flex: {
        flex: 1,
    }
})