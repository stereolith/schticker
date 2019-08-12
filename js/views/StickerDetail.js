import React, { Component } from 'react';
import { Linking, Text, ScrollView, StyleSheet, Image, View } from 'react-native';
import { Button } from '@ant-design/react-native';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';

class StickerDetail extends Component {
    constructor() {
        super()
    }

    render() {
        return(
          <ScrollView
            style={{ flex: 1, backgroundColor: '#E5E5E5' }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ width: '100%', flex: 1, ...localStyles.section}}>
              <Image    
              style={{height: 150, width: 250, alignSelf: 'center'}}
              resizeMode="contain"
              source={{uri: this.props.activeSticker.imageUrl}}></Image>
            </View>
            <View style={localStyles.section}>
              <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 5}}>{this.props.activeSticker.name}</Text>
              <Text style={{fontSize: 17, paddingBottom: 10, lineHeight: 20, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.6)'}}>von: {this.props.activeSticker.author.name}</Text>
              <Text style={{paddingVertical: 10, fontWeight: 'bold'}}>Kurzbeschribung/ Info</Text>
              <Text>{this.props.activeSticker.description}</Text>
              <Text style={{paddingTop: 10 }}>Hinzugefügt von: <Text style={{fontWeight: 'bold'}}>{this.props.activeSticker.addedBy}</Text></Text>
            </View>
            <View style={localStyles.section}>
              <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 5}}>Dieser Schticker im Netz</Text>
              <View style={{flex:1, flexDirection: 'row', flexGrow: 1}}>
                 {this.linkList()}
              </View>
            </View>
            <View style={localStyles.section}>

            </View>
          </ScrollView>
        )
    }

    linkList() {
      let links = this.props.activeSticker.author.links
      let icons = {
        facebook: require('../res/icons/facebook.png'),
        instagram: require('../res/icons/instagram.png'),
        twitter: require('../res/icons/twitter.png'),
        website: require('../res/icons/globe.png')
      }
      if (links) {
        return Object.keys(this.props.activeSticker.author.links).map((key) => (
          <Button
            style={{
              flexGrow:1,
              paddingVertical: 5,
              textTransform: 'capitalize',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10
            }}
            onPress={() => Linking.openURL(links[key])}
          >
            <Image    
              style={{height: 25, width: 25, marginRight: 15, color: '#000'}}
              source={icons[key]}
              resizeMode="contain"
              >
            </Image>
          </Button>
        ))
      }
      return 
    }
}

var localStyles = StyleSheet.create({
  section: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10

  }
})

const mapStateToProps = (state) => {
    const { stickers } = state
    return { 
      activeStickerId: state.activeSticker,
      activeSticker: state.stickers.find((sticker) => sticker.id === state.activeSticker),
      stickers
    }
};

export default connect(mapStateToProps)(StickerDetail);
