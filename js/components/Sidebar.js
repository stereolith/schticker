import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import { Drawer, List } from '@ant-design/react-native';
const Item = List.Item;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSidebar, setActiveView, selectSticker } from '../redux/actions';

class Sidebar extends Component {

    constructor() {
      super()
      this.state = {
        menuItems : [
          {title: 'Schticker Scannen', element: 'DetectSticker'},
          {title: 'Schticker Liste', element: 'StickerList'}
        ]
      }

    }

    render() {
        const sidebar = (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
              <View style={{height: 160, flexDirection: 'column',alignItems: 'center', borderStyle: 'solid',borderBottomWidth: 1, borderBottomColor: '#71E5E6'}}>
                <Image    
                  style={{height: 120, width: 160, marginTop: 25}}
                  source={require('../res/logo.png')}>
                </Image>
              </View>
              {this.menuItems()}

            </View>
          );
        return (
            <Drawer
              sidebar={sidebar}
              position="left"
              open={this.props.activeSidebar}
              drawerRef={el => (this.drawer = el)}
              drawerBackgroundColor="#FFF"
            >
                {this.props.children}
            </Drawer>
        );
    }

    menuItems() {
      return this.state.menuItems.map((item) => (
        <TouchableHighlight
          onPress={() => {this.handleLinkPress(item.element)}}
          style={{flexGrow: 0, flexDirection: 'column'}}>
          <View style={{marginVertical: 20, marginHorizontal: 15}}>
            <Text style={{fontSize: 18}}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      ))
    }

    handleLinkPress(target) {
      this.props.selectSticker('')
      this.drawer.closeDrawer()
      this.props.setActiveView(target)
      this.props.setSidebar(false)
      console.log(target)
    }

}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setSidebar,
        setActiveView,
        selectSticker
    }, dispatch)
  );
const mapStateToProps = (state) => {
    const { sidebarActive, activeView } = state
    return { 
        activeSidebar: state.activeSidebar,
        activeView: state.activeView
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);