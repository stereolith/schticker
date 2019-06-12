import React, { Component } from 'react';

import {StyleSheet, View, Text, Animated, Easing } from 'react-native';

import { Card } from '@ant-design/react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker, addSticker } from '../redux/actions';


class InfoCard extends Component {

    constructor() {
        super()

        this.state = {
            slideInAnim: new Animated.Value(-300)
        }

    }

    render() {
        let { slideInAnim } = this.state;
        return(
            <Animated.View style={{...localStyles.cardWrapper, bottom: slideInAnim}}  >
                <Card style={localStyles.card} bordered={false} >
                    <Card.Header
                        title={this.props.activeSticker.name}
                        extra="X"
                    />
                    <Card.Body style={{ marginLeft: 16 }}  >
                        <View >
                            <Text style={{ fontWeight: 'bold' }}> { this.props.activeSticker.author.name }</Text>
                            <Text style={{ paddingTop: 20 }}> {this.props.activeSticker.description} </Text>
                        </View>
                        <View style={{ position: 'absolute', bottom: 20 }} >
                            <Text style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold' }}>Zuletzt gesehen: </Text>
                                <Text>{this.props.activeSticker.location[0].added}</Text>
                            </Text>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content="footer content"
                        extra="footer extra content"
                    />
                </Card>
            </Animated.View>
        )
    }

    componentDidMount() {
        Animated.timing(
            this.state.slideInAnim,
            {
                toValue: 0,
                easing: Easing.in(),
                duration: 500
            }
        ).start()
        console.log(this.props.activeSticker)
    }
}

var localStyles = StyleSheet.create({
    cardWrapper: {
        flex: 1,
        position:'absolute',
        left:0,
        padding: 15,
        width: '100%',
        height: 300,

    },
    card: {
        backgroundColor: '#FFF',
        height: '100%',
        position: 'relative'
    }
})


const mapDispatchToProps = dispatch => (
    bindActionCreators({
      selectSticker,
      addSticker
    }, dispatch)
  );
const mapStateToProps = (state) => {
    const { stickers } = state
    return { 
      activeStickerId: state.activeSticker,
      activeSticker: state.stickers.find((sticker) => sticker.id === state.activeSticker),
      stickers
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);