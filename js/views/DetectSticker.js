import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ARWrapper from '../components/ARWrapper'

import InfoCard from '../components/InfoCard'

import {
    ViroARSceneNavigator
  } from 'react-viro';

class DetectSticker extends Component {
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
                {this._renderCard()}
            </View>
        )
    }


    _renderCard() {
        console.log(this.props.activeSticker)
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
