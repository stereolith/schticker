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
        'Biermedia',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/biermedia.jpg'),
        [
            {
                'lat': 50.5551528,
                'lon': 6.5627168,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'Fachschaft Intermedia',
            'links': {
                'facebook': 'https://www.facebook.com/intermedia.uni.koeln/',
        'website': 'https://fachschaft-intermedia.de'
            }
        },
        'Party-Reihe der Fachschaft des Studiengangs Intermedia der Universität zu Köln.'
            ],
            [
                'BLAW BLAW BLAW',
                '2019:07:14 09:12:54+02:00',
                'Kim',
                require('../res/sticker-db/blawblawblaw.jpg'),
                [
                    {
                        'lat': 50.946440,
                        'lon': 6.917723,
                        'added': "2019:04:06 10:42:57+02:00"
                    }
                ],
                {
                    'name': 'BLAW BLAW BLAW',
                    'links': {
                        'facebook': 'https://www.facebook.com/BLAW.CGN/'
                    }
                },
                'Street-Art Kollektiv aus Köln ohne nähere Angaben.'
            ],
            [
                'Chicago am Rhein',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/chicagoamrhein.jpg'),
        [
            {
                'lat': 50.5531032,
                'lon': 6.5549542,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'Der lange Tünn (Anton Claaßen)',
            'links': {
                'facebook': 'https://www.facebook.com/Der-lange-Tünn-851344824960609',
		'website': 'https://derlangetuenn.koeln/start'
            }
            
        },
        'Stadtführung durch Köln mit einem der letzten Zeitzeugen der Kölner Rotlichtszene der 60er, 70er und 80er Jahre.'
            ],
        [
                'Desmiregal',
                '2019:07:14 09:12:54+02:00',
                'Kim',
                require('../res/sticker-db/desmiregal.jpg'),
                [
                    {
                        'lat': 50.948232,
                        'lon': 6.954733,
                        'added': '2019:07:14 10:42:57+02:00'
                    }
                ],
                {
                    'name': 'Tuk Streetart',
                    'links': {
                        'facebook': 'https://www.facebook.com/TukArts/',
                'website': 'https://www.instagram.com/tuk_streetart'
                    }
                },
                'Straßenkünstler aus Köln mit Fokus auf Schablonen und ortsspezifische Paste-Ups (weltweit). "Cross roads. Cross borders. Cross minds." Dieser Sticker ist eine Parodie des Modelabels Desigual.'
        ],
        [
                'Esel & Schnörres',
                '2019:07:14 09:12:54+02:00',
                'Kim',
                require('../res/sticker-db/eselschnoerres.jpg'),
                [
                    {
                        'lat': 50.5552302,
                        'lon': 6.5626988,
                        'added': '2019:07:14 10:42:57+02:00'
                    }
                ],
                {
                    'name': 'Philip Treutel und Luca Knezevic',
                    'links': {
                'website': 'https://eselundschnoerres.podigee.io'
                    }
                },
                '"Esel & Schnörres" ist ein Podcast zweier Kölner, die über alles sprechen, was ihnen so einfällt. Das Besondere am Podcast: Alles passiert draußen (außer bei Regen oder Kälte). Philip und Luca nehmen HörerInnen mit zu den unterschiedlichsten Orten und man kann „Live“ dabei sein, wie die beiden interessante Geschichten aus dem Schnörres zaubern.'
        ],
        [
            'You dont see the world as it is',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/eye_anaisnin.jpg'),
        [
            {
                'lat': 50.554719,
                'lon': 6.5611262,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'Unbekannt',
            'links': {
		
            }
        },
        'Sticker mit einem Zitat der Schriftstellerin Anais Nin. UrheberIn unbekannt.'
        ],
        [
            'GREENTAXONOMY',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/greentaxonomy.jpg'),
        [
            {
                'lat': 50.952656,
                'lon': 6.912594,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'GREENTAXONOMY Street Art',
            'links': {
		'twitter': 'https://twitter.com/greentaxonomy0',
            	'instagram': 'https://www.instagram.com/greentaxonomy/'
            }
        },
        'Die Werke von GREENTAXONOMY sind ein Mashup von Organismen und behandeln die Absurdität der Klassifikation und Theorie der Taxonomie.'
        ]
        [
            'Reklablatte',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/greentaxonomy2.jpg'),
        [
            {
                'lat': 50.554998,
                'lon': 6.562364,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'GREENTAXONOMY Street Art',
            'links': {
		'twitter': 'https://twitter.com/greentaxonomy0',
            	'instagram': 'https://www.instagram.com/greentaxonomy/'
            }
        },
        'Die Werke von GREENTAXONOMY sind ein Mashup von Organismen und behandeln die Absurdität der Klassifikation und Theorie der Taxonomie.'
        ],
        [
            'Hambi bleibt',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/hambibleibt.jpg'),
        [
            {
                'lat': 50.932954,
                'lon': 6.932652,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'Hambacher Forst Bewegung',
            'links': {
		'facebook': 'https://www.facebook.com/HambacherForstBesetzung/',
            	'website': 'https://hambacherforst.org'
            }
        },
        'Politisch-gesellschaftliche Bewegung gegen die Rodung und Zerstörung des Hambacher Forstes, einem Wald zwischen Köln und Aachen.'
        ],
        [
            'The Hemp Project',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/hempproject.jpg'),
        [
            {
                'lat': 50.5535718,
                'lon': 6.5556952,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'The Hemp Project Collective',
            'links': {
		'website': 'http://studio-hustle.com/the-hemp-project.html',
            	'instagram': 'https://www.instagram.com/thehempprojectcollective'
            }
        },
        'The Hemp Project ist ein Freundeskollektiv mit dem Ziel, das Denken über Hanf zu verändern und die Pflanze als nachhaltige Alternative zu promoten, die Nahrung, Kleidung, Obdach, Energie und vieles mehr bietet.'
        ],
        [
            'Hippie Trim',
            '2019:07:14 09:12:54+02:00',
            'Kim',
            require('../res/sticker-db/hippietrim.jpg'),
            [
                {
                    'lat': 50.553858,
                    'lon': 6.561812,
                    'added': '2019:07:14 10:42:57+02:00'
                }
            ],
            {
                'name': 'Hippie Trim Band',
                'links': {
            'facebook': 'https://www.facebook.com/hippietrim/',
                    'website': 'http://www.hippietrim.com'
                }
            },
            'Melodic Hardcore-Band aus dem Rheinland/Ruhrgebiet. Stilistisch bewegt sich die Formation zwischen Punk Rock, Hardcore, Shoegaze und Pop. Label: Redfield Records.'
          
        ],
        [
            'Hole you seen him?!',
            '2019:07:14 09:12:54+02:00',
            'Kim',
            require('../res/sticker-db/holeyouseenhim.jpg'),
            [
                {
                    'lat': 50.5533708,
                    'lon': 6.5553118,
                    'added': '2019:07:14 10:42:57+02:00'
                }
            ],
            {
                'name': 'wHOLE heART',
                'links': {
            'facebook': 'hhttps://www.facebook.com/HoleStreetart/',
                    'instagram': 'https://www.instagram.com/wholeheart74/?hl=de'
                }
            },
            'Sticker & Pasteup Künstler aus Köln. Seine Sticker enthalten oft Wort- oder Motivspiele mit dem Künstlernamen.'
        ],

        [
        'Say yes to hummus',
        '2019:07:14 09:12:54+02:00',
        'Kim',
        require('../res/sticker-db/hummus.jpg'),
        [
            {
                'lat': 50.5522722,
                'lon': 6.5527768,
                'added': '2019:07:14 10:42:57+02:00'
            }
        ],
        {
            'name': 'Mashery Hummus Kitchen',
            'links': {
		'facebook': 'https://www.facebook.com/masheryhummus/'
            	'website': 'http://www.mashery-hummus.de'
            }
        },
        'Vegetarisches Restaurant im Kölner Kwartier Latäng, die Hummus als Hauptgerichtin verschiednen Varianten anbieten.'
      ],
      [
        'Je suis partout',
        '019:05:25 12:18:54+02:00',
        'Anna',
        require('../res/sticker-db/img1.jpg'),
        [
            {
                'lat': 50.932637,
                'lon': 6.932696,
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
        'Streetart Projekt namens "Andalltha" vom belgischen Künstler Thierry Jaspart,"Je suis partout" gehört zur Stickerreihe j esxiste'
      ],

      [
        '#Duckel',
        '2019:05:25 12:18:54+02:00',
        'Anna',
        require('../res/sticker-db/img2.jpg'),
        [
            {
                'lat': 50.935346,
                'lon': 6.932756,
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
        require('../res/sticker-db/img3.jpg'),
        [
            {
                'lat': 50.936965,
                'lon': 6.932702,
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
