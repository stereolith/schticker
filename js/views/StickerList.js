import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image, View } from 'react-native';
import { List } from '@ant-design/react-native';
const Item = List.Item;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker, setActiveView } from '../redux/actions'

class StickerList extends Component {
    constructor() {
        super()

    }

//    
    render() {
        const stikersItems = this.props.stickers.map((sticker) => {
          return (
            <Item key={sticker.id} onPress={() => this.handleItemPress(sticker.id)}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                <Image    
                  style={{width: 70, height: 70}}
                  source={{uri: sticker.imageUrl}}></Image>
                <Text>{sticker.name}</Text>
              </View>
            </Item>
          );
        })
        return(
          <ScrollView
          style={{ flex: 1, backgroundColor: '#f5f5f9' }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <List renderHeader={'Alle Sticker'}>
            {stikersItems}
          </List>
        </ScrollView>
        )
    }

    handleItemPress(stickerId) {
      this.props.selectSticker(stickerId)
      this.props.setActiveView('StickerDetail')
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    listItem: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
  })

  const mapDispatchToProps = dispatch => (
    bindActionCreators({
      selectSticker,
      setActiveView
    }, dispatch)
  );
const mapStateToProps = (state) => {
    const { stickers } = state
    return { stickers }
};

export default connect(mapStateToProps, mapDispatchToProps)(StickerList);
