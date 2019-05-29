import React, { Component } from 'react';

import {StyleSheet, View, Text, Animated, Easing } from 'react-native';

import { Card } from '@ant-design/react-native';

export default class InfoCard extends Component {

    constructor() {
        super()

        this.state = {
            slideInAnim: new Animated.Value(-300)
        }

    }

    render() {
        let { slideInAnim } = this.state;
        return(
            <Animated.View style={{...localStyles.cardWrapper, bottom: slideInAnim}} >
                <Card style={localStyles.card} bordered={false} >
                    <Card.Header
                        title="This is title"
                        extra="this is extra"
                    />
                    <Card.Body>
                    <View style={{ height: 42 }}>
                        <Text style={{ marginLeft: 16 }}>Card Content</Text>
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
        height: '100%'
    }
})