'use strict';

import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker, addSticker, setSidebar } from '../redux/actions';

import Sidebar from './Sidebar'
import DetectSticker from '../views/DetectSticker'
import StickerList from '../views/StickerList'
import StickerDetail from '../views/StickerDetail'

import Icon from 'react-native-vector-icons/Feather';

class NavWrapper extends Component {

    constructor() {
        super()
    }

    componentWillMount() {
        this.props.selectSticker('')
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
            'name': 'BLAW BLAW BLAW Kollektiv',
            'links': {
                'facebook': 'https://www.facebook.com/BLAW.CGN/'
            }
        },
        'Street-Art Kollektiv aus Köln ohne nähere Angaben'
        )
    }
  
    render() {
        return (
            <Sidebar>
                <View style={{flex:1}}>
                    {this.__getActiveView()}
                    <TouchableWithoutFeedback onPress={() => {this.props.setSidebar(true); console.log('setSidebar true')}}>
                        <View
                            style={{flex: 1, position:'absolute', backgroundColor: '#555', top: 30, left: 20, height: 40, width: 40,borderRadius: 40}}>
                        </View>

                    </TouchableWithoutFeedback>

                </View>
            </Sidebar>
        );
    }

    __getActiveView() {
        console.log(this.props.activeView)
        switch(this.props.activeView) {
            case 'DetectSticker':
                return <DetectSticker></DetectSticker>
            case 'StickerList':
                return <StickerList></StickerList>
            case 'StickerDetail':
                return <StickerDetail></StickerDetail>
            default:
                return null
        }
    }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectSticker,
    addSticker,
    setSidebar
  }, dispatch)
);
const mapStateToProps = (state) => {
  const { stickers, activeView } = state
  return { 
    activeStickerId: state.activeSticker,
    activeSticker: state.stickers.filter((sticker) => {
      return sticker.id === state.activeSticker
    }),
    stickers,
    activeView
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavWrapper);
