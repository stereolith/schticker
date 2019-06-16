import React, { Component } from 'react';

import {StyleSheet, View, Text, Animated, Easing, TouchableWithoutFeedback } from 'react-native';

import { Card } from '@ant-design/react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSticker, addSticker } from '../redux/actions';

class InfoCard extends Component {

    constructor() {
        super()

        //state = Variablen, die eine Componente hat/JavaScript-Objekte
        this.state = {
            visible: false,
            slideInAnim: new Animated.Value(-300),
            activeSticker: null
        }

    }

    render() {
        let { slideInAnim } = this.state;

        return(
            <Animated.View style={{...localStyles.cardWrapper, bottom: slideInAnim}}  >
            { this.state.visible ? 
                <Card style={localStyles.card} bordered={false} >
                    <TouchableWithoutFeedback onPress={() => { this.props.selectSticker('')} }>
                        <Card.Header
                            title={this.state.activeSticker.name}
                            extra="X"
                        />
                    </TouchableWithoutFeedback>
                    <Card.Body style={{ marginLeft: 16 }}  >
                        <View >
                            <Text style={{ fontWeight: 'bold' }}> { this.state.activeSticker.author.name }</Text>
                            <Text style={{ paddingTop: 20 }}> {this.state.activeSticker.description} </Text>
                        </View>
                        <View style={{ position: 'absolute', bottom: 20 }} >
                            <Text style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold' }}>Zuletzt gesehen: </Text>
                                <Text>{this.state.activeSticker.location[0].added}</Text>
                            </Text>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content="footer content"
                        extra="footer extra content"
                    />
                </Card> : null
            }
            </Animated.View>
        )
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.visible) {
            this.setState({visible: true, activeSticker: nextProps.activeSticker})
        }
        Animated.timing(
            this.state.slideInAnim,
            {
                toValue: nextProps.visible ? 0 : -300,
                easing: Easing.in(),
                duration: 400
            }
        ).start(() => {
            this.setState({ visible: nextProps.visible })
        })
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