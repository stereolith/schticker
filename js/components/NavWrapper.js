"use strict";

import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectSticker, addSticker, setSidebar } from "../redux/actions";

import Sidebar from "./Sidebar";
import DetectSticker from "../views/DetectSticker";
import StickerList from "../views/StickerList";
import StickerDetail from "../views/StickerDetail";
import AddStickerView from "../views/AddSticker";

class NavWrapper extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    if (this.props.stickers.length > 0) return;

    const stickerDb = [
      [
        "BLAW BLAW BLAW",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/blawblawblaw/blawblawblaw.jpg",
        [
          {
            lat: 50.94644,
            lon: 6.917723,
            added: "2019:04:06 10:42:57+02:00"
          }
        ],
        {
          name: "BLAW BLAW BLAW",
          links: {
            facebook: "https://www.facebook.com/BLAW.CGN/"
          }
        },
        "Street-Art Kollektiv aus Köln ohne nähere Angaben."
      ],
      [
        "Desmiregal",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/desmiregal/desmiregal.jpg",
        [
          {
            lat: 50.948232,
            lon: 6.954733,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "Tuk Streetart",
          links: {
            facebook: "https://www.facebook.com/TukArts/",
            website: "https://www.instagram.com/tuk_streetart"
          }
        },
        'Straßenkünstler aus Köln mit Fokus auf Schablonen und ortsspezifische Paste-Ups (weltweit). "Cross roads. Cross borders. Cross minds." Dieser Sticker ist eine Parodie des Modelabels Desigual.'
      ],
      [
        "GREENTAXONOMY",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/greentaxonomy/greentaxonomy.jpg",
        [
          {
            lat: 50.952656,
            lon: 6.912594,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "GREENTAXONOMY Street Art",
          links: {
            twitter: "https://twitter.com/greentaxonomy0",
            instagram: "https://www.instagram.com/greentaxonomy/"
          }
        },
        "Die Werke von GREENTAXONOMY sind ein Mashup von Organismen und behandeln die Absurdität der Klassifikation und Theorie der Taxonomie."
      ],
      //   [
      //     "Reklablatte",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/greentaxonomy2.jpg"),
      //     [
      //       {
      //         lat: 50.554998,
      //         lon: 6.9399,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "GREENTAXONOMY Street Art",
      //       links: {
      //         twitter: "https://twitter.com/greentaxonomy0",
      //         instagram: "https://www.instagram.com/greentaxonomy/"
      //       }
      //     },
      //     "Die Werke von GREENTAXONOMY sind ein Mashup von Organismen und behandeln die Absurdität der Klassifikation und Theorie der Taxonomie."
      //   ],
      //   [
      //     "Hambi bleibt",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/hambibleibt.jpg"),
      //     [
      //       {
      //         lat: 50.932954,
      //         lon: 6.932652,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "Hambacher Forst Bewegung",
      //       links: {
      //         facebook: "https://www.facebook.com/HambacherForstBesetzung/",
      //         website: "https://hambacherforst.org"
      //       }
      //     },
      //     "Politisch-gesellschaftliche Bewegung gegen die Rodung und Zerstörung des Hambacher Forstes, einem Wald zwischen Köln und Aachen."
      //   ],
      //   [
      //     "The Hemp Project",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/hempproject.jpg"),
      //     [
      //       {
      //         lat: 50.92658833333333,
      //         lon: 6.932486666666667,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "The Hemp Project Collective",
      //       links: {
      //         website: "http://studio-hustle.com/the-hemp-project.html",
      //         instagram: "https://www.instagram.com/thehempprojectcollective"
      //       }
      //     },
      //     "The Hemp Project ist ein Freundeskollektiv mit dem Ziel, das Denken über Hanf zu verändern und die Pflanze als nachhaltige Alternative zu promoten, die Nahrung, Kleidung, Obdach, Energie und vieles mehr bietet."
      //   ],
      //   [
      //     "Hippie Trim",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/hippietrim.jpg"),
      //     [
      //       {
      //         lat: 50.92738333333333,
      //         lon: 6.933836666666666,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "Hippie Trim Band",
      //       links: {
      //         facebook: "https://www.facebook.com/hippietrim/",
      //         website: "http://www.hippietrim.com"
      //       }
      //     },
      //     "Melodic Hardcore-Band aus dem Rheinland/Ruhrgebiet. Stilistisch bewegt sich die Formation zwischen Punk Rock, Hardcore, Shoegaze und Pop. Label: Redfield Records."
      //   ],
      ["Hole you seen him?!",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/holeyouseenhim/holeyouseenhim.jpg",
        [
          {
            lat: 50.92603,
            lon: 6.931421666666667,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "wHOLE heART",
          links: {
            facebook: "hhttps://www.facebook.com/HoleStreetart/",
            instagram: "https://www.instagram.com/wholeheart74/?hl=de"
          }
        },
        "Sticker & Pasteup Künstler aus Köln. Seine Sticker enthalten oft Wort- oder Motivspiele mit dem Künstlernamen."
      ],

      //   [
      //     "Say yes to hummus",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/hummus.jpg"),
      //     [
      //       {
      //         lat: 50.92297833333333,
      //         lon: 6.92438,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "Mashery Hummus Kitchen",
      //       links: {
      //         facebook: "https://www.facebook.com/masheryhummus/",
      //         website: "http://www.mashery-hummus.de"
      //       }
      //     },
      //     "Vegetarisches Restaurant im Kölner Kwartier Latäng, die Hummus als Hauptgerichtin verschiednen Varianten anbieten."
      //   ],
      [
        "Je suis partout",
        "019:05:25 12:18:54+02:00",
        "Anna",
        "https://github.com/stereolith/schticker/blob/master/sticker-db/img1/img1.jpg",
        [
          {
            lat: 50.932637,
            lon: 6.932696,
            added: "2019:05:22 10:42:54+02:00"
          }
        ],
        {
          name: "Thierry Jaspart",
          links: {
            facebook:
              'facebook": "https://www.facebook.com/thierryjaspartofficial/',
            website:
              "http://thierry-jaspart.com/?fbclid=IwAR3S7y0tEvmGdFJZQdBB_HOqNRKS5DifKo9NcUiYsw3-_Dt9DkxEBOeV2to",
            twitter: "https://twitter.com/andalltha?lang=de"
          }
        },
        "Streetart Projekt namens 'Andalltha' vom belgischen Künstler Thierry Jaspart. 'Je suis partout' gehört zur Stickerreihe 'J'existe'."
      ],

      //   [
      //     "#Duckel",
      //     "2019:05:25 12:18:54+02:00",
      //     "Anna",
      //     require("../res/sticker-db/img2.jpg"),
      //     [
      //       {
      //         lat: 50.935346,
      //         lon: 6.932756,
      //         added: "2019:05:22 10:42:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "Duckel Projekt",
      //       links: {
      //         instagram: "https://www.instagram.com/street.duckel/"
      //       }
      //     },
      //     "Der Künstler ist unbekannt, Sticker gehört zum Duckel Projekt, Instagram: @street.duckel"
      //   ],

      //   [
      //     "PilzWald",
      //     "2019:05:25 12:18:54+02:00",
      //     "Anna",
      //     require("../res/sticker-db/img3.jpg"),
      //     [
      //       {
      //         lat: 50.936965,
      //         lon: 6.932702,
      //         added: "2019:05:22 10:42:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "Paul&Alex",
      //       links: {
      //         website: "https://www.pilzwald.de"
      //       }
      //     },
      //     "StartUp: DIY Tutorials, um selber eigene Speisepilze im eigenen Haus oder Garten anzubauen; Speisepilzzucht in der Stadt"
      //   ],
      [
        "R.I.P. Stecken",
        "2019:05:25 12:18:54+02:00",
        "Anna",
        "https://github.com/stereolith/schticker/blob/master/sticker-db/img4/img4.jpg",
        [
          {
            lat: 50.932879,
            lon: 6.932747,
            added: "2019:05:22 10:42:54+02:00"
          }
        ],
        {
          name: "unkown",
          links: {
            facebook: "https://www.facebook.com/pages/Stecken/106478066081421",
            website:
              "https://www.ksta.de/koeln/innenstadt/koelner-kult-club--stecken--szene-club-wird-ein-heizungskeller-2251162"
          }
        },
        "Stecken ist ein ehemaliger Underground-Club in Köln und wurde 2014 dauerhauft geschlossen. Der Club im Keller eines Wohnhauses zog mehr als 20 Jahre lang junge Menschen aus der ganzen Welt an. Heute befindet sich dort ein Heizungskeller."
      ],

      //   [
      //     "fckng done.",
      //     "2019:05:25 12:18:54+02:00",
      //     "Anna",
      //     require("../res/sticker-db/img5.jpg"),
      //     [
      //       {
      //         lat: 50.933321,
      //         lon: 6.932544,
      //         added: "2019:05:22 10:42:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "fckng done official",
      //       links: {
      //         instagram: "https://www.instagram.com/fckngdone.official/"
      //       }
      //     },
      //     "Dieser Sticker steht symbolisch für die Bewältigung und das Abschließen mit etwas Großem, was einen über längere Zeit beschäftigt hat. Somit sind diese Aufkleber eine Aussage der Erleichterung."
      //   ],

      //   [
      //     "Trash Tristan Tattoo",
      //     "2019:05:25 12:18:54+02:00",
      //     "Anna",
      //     require("../res/sticker-db/img6.jpg"),
      //     [
      //       {
      //         lat: 50.937301,
      //         lon: 6.932823,
      //         added: "2019:05:22 10:42:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "Tristan Baumer",
      //       links: {
      //         instagram: "https://www.instagram.com/trashtristantattoo/?hl=de",
      //         website:
      //           "https://www.sukitattoo-cologne.com/tätowierer-tristan-galerie/"
      //       }
      //     },
      //     "Tristan Baumer ist ein Tätowierer des Tattoostudios Sukitattoo-cologne. Er arbeitet in den Bereichen Blackwork, Oldschool und Contemporary."
      //   ],

      //   [
      //     "Radio Love Love",
      //     "2019:05:25 12:18:54+02:00",
      //     "Anna",
      //     require("../res/sticker-db/img7.jpg"),
      //     [
      //       {
      //         lat: 50.933411,
      //         lon: 6.932558,
      //         added: "2019:05:22 10:42:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "Razzy Bailey und Twit One",
      //       links: {
      //         facebook: "https://www.facebook.com/RadioLoveLoveCGN/",
      //         website: "http://ihateshirts.blogspot.com",
      //         soundcloud: "https://soundcloud.com/radiolovelove"
      //       }
      //     },
      //     "Umgesetzt von Twit One (kölner Musikproduzent und DJ), inspiriert von Razzy Baileys Song I hate hate von 1974. Läuft unter dem Label von Radio LoveLove"
      //   ],

      //   [
      //     "Späm x Reth1",
      //     "2019:05:25 12:18:54+02:00",
      //     "Anna",
      //     require("../res/sticker-db/img8.jpg"),
      //     [
      //       {
      //         lat: 50.938151,
      //         lon: 6.93294,
      //         added: "2019:05:22 10:42:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "SpaemSpaem und Reth One",
      //       links: {
      //         facebook: "https://www.facebook.com/pg/Reth.One.Art/posts/",
      //         website: "https://www.flvcrew.com",
      //         website2: "http://spaemspaem.de",
      //         instagram: "https://www.instagram.com/reth.one/?hl=de"
      //       }
      //     },
      //     "Reth One ist ein deutscher Streetartkünstler mit Schwerpunkt auf Stickern."
      //   ],

      //   [
      //     "Heute geht's mir nicht so gut",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/inkeaterjack.jpg"),
      //     [
      //       {
      //         lat: 50.92656333333333,
      //         lon: 6.909913333333334,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "inkeaterjack / Jacques Mundri",
      //       links: {
      //         instagram: "https://www.instagram.com/inkeaterjack/"
      //       }
      //     },
      //     "Künstlerin aus Köln, die Illustrationen mit Text verbindet und diese auch auf Sticker bringt."
      //   ],

      [
        "Ja! Da!",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/jada/jada.jpg",
        [
          {
            lat: 50.5530888,
            lon: 6.554941,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "Ja! Da! Streetart",
          links: {
            instagram: "https://www.instagram.com/jada_streetart/"
          }
        },
        "Streetart-Künstler aus Köln. Hauptsächlich größere Paste-ups mit Figuren aus Comics oder Zeichentrick und Sprechblasen."
      ],

      //   [
      //     "I am not a nugget",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/nugget.jpg"),
      //     [
      //       {
      //         lat: 50.5521072,
      //         lon: 6.5520832,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "PETA (ZWEI)",
      //       links: {
      //         website: "https://www.petazwei.de",
      //         facebook: "https://www.facebook.com/petazwei/",
      //         instagram: "https://www.instagram.com/petazwei/"
      //       }
      //     },
      //     "Sticker gegen den Konsum von Hühnerküken in Form von Chicken-Nuggets. Von der Tierschutz-Organisation PETA bzw. PETA ZWEI, der Jugendorganisation von PETA."
      //   ],

      [
        "Whalebomb",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/pozt137/pozt137.jpg",
        [
          {
            lat: 50.934879,
            lon: 6.932744,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "Pozt.137",
          links: {
            facebook: "https://www.facebook.com/pg/pozt.137/",
            instagram: "https://www.instagram.com/pozt.137"
          }
        },
        "Sticker Artist aus Düsseldorf. Bekannt für das Spiegelei-Motiv."
      ],

      //   [
      //     "Pusher Tony",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/pushertony.jpg"),
      //     [
      //       {
      //         lat: 50.554611,
      //         lon: 6.5611622,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "Pusher Thony",
      //       links: {
      //         instagram: "https://www.instagram.com/pushertony"
      //       }
      //     },
      //     "Tattoo-Künstler aus Köln. Pusher Tony kombiniert kultige Motive der 1980er Popkultur mit antiken Kunstmotiven."
      //   ],

      [
        "Alkoholfreie Radler Aktion",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/radler/radler.jpg",
        [
          {
            lat: 50.945178,
            lon: 6.921422,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "Alkoholfreie Radler Aktion",
          links: {
            facebook: "https://www.facebook.com/AlkoholfreieRadlerAktion/",
            youtube: "https://www.youtube.com/channel/UCm5a0Askh_Oy21Y_LITbbPA"
          }
        },
        "Politisch gesellschaftliche Bewegung gegen die Ächtung von alkoholfreiem Radler."
      ],

      //   [
      //     "Shut up and create",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/shutupandcreate.jpg"),
      //     [
      //       {
      //         lat: 50.5542768,
      //         lon: 6.5632622,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "wHOLE heART",
      //       links: {
      //         facebook: "https://www.facebook.com/HoleStreetart/",
      //         instagram: "https://www.instagram.com/wholeheart74/?hl=de"
      //       }
      //     },
      //     "Sticker & Pasteup Künstler aus Köln. Seine Sticker enthalten oft Wort- oder Motivspiele mit dem Künstlernamen."
      //   ],

      [
        "Tuk",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/tuk_cologne/tuk_cologne.jpg",
        [
          {
            lat: 50.555043,
            lon: 6.56198,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "Tuk Streetart",
          links: {
            facebook: "https://www.facebook.com/TukArts/",
            instagram: "https://www.instagram.com/tuk_streetart"
          }
        },
        'Straßenkünstler aus Köln mit Fokus auf Schablonen und ortsspezifische Paste-Ups (weltweit). "Cross roads. Cross borders. Cross minds." Dieser Sticker ist eine Anspielung auf den gleichnamigen Keks der Marke DeBeukelaer.'
      ],
      [
        "Urban Nipple",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/urbannipple/urbannipple.jpg",
        [
          {
            lat: 50.554998,
            lon: 6.5619488,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "Urban Nipple",
          links: {
            instagram: "https://www.instagram.com/urbannipple"
          }
        },
        "Online-Initiative gegen das Sperren und Entfernen von Bildern auf Social-Media-Plattformen, auf denen Brustwarzen zu sehen sind."
      ],

      //   [
      //     "Wa Da Da",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/wadada.jpg"),
      //     [
      //       {
      //         lat: 50.930839,
      //         lon: 6.935583,
      //         added: "2019:05:22 10:42:54+02:00"
      //       },
      //       {
      //         lat: 50.930901,
      //         lon: 6.935523,
      //         added: "2019:06:22 09:12:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "Wadada Records",
      //       links: {
      //         facebook: "https://www.facebook.com/wadadarecords/",
      //         "logo-design": "http://www.createdbygabe.com/"
      //       }
      //     },
      //     "Logo der Wadada Records, einer Jazz und Soul Plattenfirma. Logodesign von GABE."
      //   ],

      //   [
      //     "Was ist Rassismus?",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/wasistrassismus.jpg"),
      //     [
      //       {
      //         lat: 50.55291,
      //         lon: 6.5530108,
      //         added: "2019:05:22 10:42:54+02:00"
      //       }
      //     ],
      //     {
      //       name: "Was ist Rassismus e.V.",
      //       links: {
      //         website: "http://www.was-ist-rassismus.de",
      //         twitter: "https://twitter.com/wasistrassismus"
      //       }
      //     },
      //     "Ein Online-Portal zum Umgang mit Rassismus, das für das Thema sensibilisieren, darüber informieren und zum Handeln anregen möchte. Das Portal öffnet den Blick auf Rassismus als gesellschaftliche Machtstruktur, welche Menschen in ihrem ganz alltäglichen Leben leitet, privilegiert oder benachteiligt."
      //   ],

      //   [
      //     "Whole Heart",
      //     "2019:07:14 09:12:54+02:00",
      //     "Kim",
      //     require("../res/sticker-db/wholeheart.jpg"),
      //     [
      //       {
      //         lat: 50.5534908,
      //         lon: 6.5556382,
      //         added: "2019:07:14 10:42:57+02:00"
      //       }
      //     ],
      //     {
      //       name: "wHOLE heART",
      //       links: {
      //         facebook: "https://www.facebook.com/HoleStreetart/",
      //         instagram: "https://www.instagram.com/wholeheart74"
      //       }
      //     },
      //     "Sticker & Pasteup Künstler aus Köln. Seine Sticker enthalten oft Wort- oder Motivspiele mit dem Künstlernamen."
      //   ],

      [
        "(w)HOLE STREET (he)ART",
        "2019:07:14 09:12:54+02:00",
        "Kim",
        "https://raw.githubusercontent.com/stereolith/schticker/master/sticker-db/wholestreetheart/wholestreetheart.jpg",
        [
          {
            lat: 50.5534458,
            lon: 6.5555092,
            added: "2019:07:14 10:42:57+02:00"
          }
        ],
        {
          name: "wHOLE heART",
          links: {
            facebook: "https://www.facebook.com/HoleStreetart/",
            instagram: "https://www.instagram.com/wholeheart74"
          }
        },
        "Sticker & Pasteup Künstler aus Köln. Seine Sticker enthalten oft Wort- oder Motivspiele mit dem Künstlernamen."
      ]
    ];

    this.props.selectSticker("");
    stickerDb.forEach(sticker => {
      this.props.addSticker(...sticker);
    });
  }

  render() {
    return (
      <Sidebar>
        <View style={{ flex: 1 }}>
          {this.__getActiveView()}
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.setSidebar(true);
            }}
          >
            <View
              style={{
                flex: 1,
                position: "absolute",
                backgroundColor: "#71E5E6",
                top: 30,
                left: 20,
                height: 40,
                width: 40,
                borderRadius: 40,
                flex: 1,
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <Image
                style={{ height: 20, width: 20, alignSelf: "center" }}
                resizeMode="contain"
                source={require("../res/icons/menu.png")}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Sidebar>
    );
  }

  __getActiveView() {
    console.log(this.props.activeView);
    switch (this.props.activeView) {
      case "DetectSticker":
        return <DetectSticker />;
      case "StickerList":
        return <StickerList />;
      case "StickerDetail":
        return <StickerDetail />;
      case "AddSticker":
        return <AddStickerView />;
      default:
        return null;
    }
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectSticker,
      addSticker,
      setSidebar
    },
    dispatch
  );
const mapStateToProps = state => {
  const { stickers, activeView } = state;
  return {
    activeStickerId: state.activeSticker,
    activeSticker: state.stickers.filter(sticker => {
      return sticker.id === state.activeSticker;
    }),
    stickers,
    activeView
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavWrapper);
