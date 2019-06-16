import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker } from '../redux/actions'

class StickerList extends Component {
    constructor() {
        super()

    }

//    
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.stickers}
                    renderItem={
                        ({sticker}) => <Text style={styles.listItem}>{sticker.name}</Text>
                    }
                />
            </View>
        )
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

const mapDispatchToProps = dispatch => {
    return {
      selectSticker: (id) => {
        dispatch(selectSticker(id))
      }
    }
  }
const mapStateToProps = (state) => {
    const { stickers } = state
    return { stickers }
};

export default connect(mapStateToProps)(StickerList);
