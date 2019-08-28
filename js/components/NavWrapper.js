'use strict';

import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker, addSticker, setSidebar } from '../redux/actions';

import Sidebar from './Sidebar';
import DetectSticker from '../views/DetectSticker';
import StickerList from '../views/StickerList';
import StickerDetail from '../views/StickerDetail';
import AddStickerView from '../views/AddSticker';

class NavWrapper extends Component {

    constructor() {
        super()
    }

    componentWillMount() {

        if(this.props.stickers.length > 0) return;

        const stickerDb = [
            [
                'Je suis partoutl',
                '019:05:25 12:18:54+02:00',
                'Anna',
                require('../res/sticker-db/logo.png'),
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'Thierry Jaspart',
                    'links': {
                        'facebook': 'facebook": "https://www.facebook.com/thierryjaspartofficial/',
                        'website':'http://thierry-jaspart.com/?fbclid=IwAR3S7y0tEvmGdFJZQdBB_HOqNRKS5DifKo9NcUiYsw3-_Dt9DkxEBOeV2to',
                        'twitter': 'https://twitter.com/andalltha?lang=de'
                    }
                },
                'Streetart Projekt namens "Andalltha" vom belgischen Künstler Thierry Jaspart,"Je suis partout" gehört zur Stickerreihe j"esxiste'
            ],
            [
                '#Duckel',
                '2019:05:25 12:18:54+02:00',
                'Anna',
                'https://github.com/stereolith/schticker/raw/master/sticker-db/img2/img2.jpg',
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'Duckel Projek',
                    'links': {
                        'instagram': 'https://www.instagram.com/street.duckel/' 
                    }
                },
                'Der Künstler ist unbekannt, Sticker gehört zum Duckel Projekt, Instagram: @street.duckel'
            ],
            [
                'PilzWald',
                '2019:05:25 12:18:54+02:00',
                'Anna',
                'https://github.com/stereolith/schticker/raw/master/sticker-db/img3/img3.jpg',
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'Paul&Alex',
                    'links': {
                        'website': 'https://www.pilzwald.de' 
                    }
                },
                'StartUp: DIY Tutorials, um selber eigene Speisepilze im eigenen Haus oder Garten anzubauen; Speisepilzzucht in der Stadt'
            ],
            [
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
            ], 
            [
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
            ],
            [
                'R.I.P. Stecken',
                '2019:05:25 12:18:54+02:00',
                'Anna',
                'https://github.com/stereolith/schticker/raw/master/sticker-db/img4/img4.jpg',
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'unkown',
                    'links': {
                        'facebook': 'https://www.facebook.com/pages/Stecken/106478066081421',
                        'website': 'https://www.ksta.de/koeln/innenstadt/koelner-kult-club--stecken--szene-club-wird-ein-heizungskeller-2251162' 
                    }
                },
                'Stecken ist ein ehemaliger Underground-Club in Köln und wurde 2014 dauerhauft geschlossen. Der Club im Keller eines Wohnhauses zog mehr als 20 Jahre lang junge Menschen aus der ganzen Welt an. Heute befindet sich dort ein Heizungskeller.'
            ],
            [
                'fckng done.',
                '2019:05:25 12:18:54+02:00',
                'Anna',
                'https://github.com/stereolith/schticker/raw/master/sticker-db/img5/img5.jpg',
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'fckng done official',
                    'links': {
                        'instagram': 'https://www.instagram.com/fckngdone.official/' 
                    }
                },
                'Dieser Sticker steht symbolisch für die Bewältigung und das Abschließen mit etwas Großem, was einen über längere Zeit beschäftigt hat. Somit sind diese Aufkleber eine Aussage der Erleichterung.'
            ],
            [
                'Trash Tristan Tattoo',
                '2019:05:25 12:18:54+02:00',
                'Anna',
                'https://github.com/stereolith/schticker/raw/master/sticker-db/img5/img5.jpg',
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'Tristan Baumer',
                    'links': {
                        'instagram': 'https://www.instagram.com/trashtristantattoo/?hl=de',
                        'website': 'https://www.sukitattoo-cologne.com/tätowierer-tristan-galerie/'
                    }
                },
                'Tristan Baumer ist ein Tätowierer des Tattoostudios Sukitattoo-cologne. Er arbeitet in den Bereichen Blackwork, Oldschool und Contemporary.'
            ],
            [
                'Radio Love Love',
                '2019:05:25 12:18:54+02:00',
                'Anna',
                'https://github.com/stereolith/schticker/raw/master/sticker-db/img7/img7.jpg',
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'Razzy Bailey und Twit One',
                    'links': {
                        'facebook': 'https://www.facebook.com/RadioLoveLoveCGN/',
                        'website': 'http://ihateshirts.blogspot.com',
                        'soundcloud': 'https://soundcloud.com/radiolovelove'
                    }
                },
                'Umgesetzt von Twit One (kölner Musikproduzent und DJ), inspiriert von Razzy Baileys Song I hate hate von 1974. Läuft unter dem Label von Radio LoveLove'
            ],
            [
                'Späm x Reth1',
                '2019:05:25 12:18:54+02:00',
                'Anna',
                'https://github.com/stereolith/schticker/raw/master/sticker-db/img8/img8.jpg',
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': '2019:05:22 10:42:54+02:00'
                    }
                ],
                {
                    'name': 'SpaemSpaem und Reth One',
                    'links': {
                        'facebook': 'https://www.facebook.com/pg/Reth.One.Art/posts/',
                        'website': 'https://www.flvcrew.com',
                        'website2': 'http://spaemspaem.de',
                        'instagram': 'https://www.instagram.com/reth.one/?hl=de'
                    }
                },
                'Reth One ist ein deutscher Streetartkünstler mit Schwerpunkt auf Stickern.'
            ]
        ]


        this.props.selectSticker('')
        stickerDb.forEach((sticker) => {
            this.props.addSticker(...sticker)   
        })
    }
  
    render() {
        return (
            <Sidebar>
                <View style={{flex:1}}>
                    {this.__getActiveView()}
                    <TouchableWithoutFeedback onPress={() => {this.props.setSidebar(true)}}>
                        <View
                            style={{flex: 1, position:'absolute', backgroundColor: '#71E5E6', top: 30, left: 20, height: 40, width: 40,borderRadius: 40, flex:1, alignContent: 'center', justifyContent: 'center'}}>
                            <Image    
                                style={{height: 20, width: 20, alignSelf: 'center'}}
                                resizeMode="contain"
                                source={require('../res/icons/menu.png')}></Image>
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
            case 'AddSticker':
                return <AddStickerView></AddStickerView>
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
