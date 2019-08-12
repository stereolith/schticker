import React, { Component } from 'react';
import { Linking, Text, ScrollView, StyleSheet, Image, View, TextInput } from 'react-native';
import { Button } from '@ant-design/react-native';

import { connect } from 'react-redux';

class AddStickerView extends Component {
    constructor() {
        super()
        this.state = {
          activeStep: 'CAMERA',
          stickerInfo: {
            name: '',
            username: '',
            description: '',
            addedDate: '',
            location: {}
          }
        }
    }

    render() {
        return(
          <View style={{ flex: 1, flexGrow: 1}}>
            <ScrollView
              style={{ flex: 1, flexGrow: 1, backgroundColor: '#E5E5E5', minHeight: '100%' }}
              automaticallyAdjustContentInsets={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              {this.getStep()}
            </ScrollView>
            {this.getBackButton()}
            <Button
              style={{ flex: 1, position: 'absolute', bottom: 15, right: 15}}
              onPress={this.hadleNextPress.bind(this)}
            >{this.state.activeStep == 'INFO' ? 'Abschicken' : 'Weiter'}</Button>
          </View>
        )
    }

    hadleNextPress () {
      switch(this.state.activeStep) {
        case 'CAMERA':
          this.setState({activeStep: 'CROP'})
          break;
        case 'CROP':
          this.setState({activeStep: 'INFO'})
          break;
        case 'INFO': 
          this.setState({activeStep: 'SUCCESS'})
          break;
        default:
          return;
      }
    }

    handleBackPress () {
      switch(this.state.activeStep) {
        case 'CROP':
          this.setState({activeStep: 'CAMERA'})
          break;
        case 'INFO': 
          this.setState({activeStep: 'CROP'})
          break;
        default:
          return;
      }
    }


    getStep() {
      switch(this.state.activeStep) {
        case 'CAMERA':
          return <View style={{ width: '100%', flex: 1, ...localStyles.section}}>
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

            >
              Foto hinzufügen
            </Button>
          </View>;
        case 'CROP':
          return <View style={{ width: '100%', flex: 1, ...localStyles.section}}></View>;
        case 'INFO':
          return <View style={{ width: '100%', flex: 1, ...localStyles.section}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 5, paddingTop: 65}}>Infos hinzufügen</Text>
              <View seyle={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{flexGrow:1}}>Name: </Text>
                <TextInput
                  style={{ flexGrow: 2, height: 40, borderColor: 'gray', backgroundColor: '#FFF', borderWidth: 1 }}
                  value={this.state.stickerInfo.name}
                  onChangeText={(stickerInfo) => this.setState({stickerInfo: {name: stickerInfo}})}
                ></TextInput>
              </View>

          </View>
        case 'SUCCESS':
          return <View></View>
      }
    }

    getBackButton () {
      if (this.state.activeStep == 'CAMERA' || this.state.activeStep == 'SUCCESS') {
        return <View></View>
      } else { 
        return  <Button
          style={{ flex: 1, position: 'absolute', bottom: 15, left: 15}}
          onPress={this.handleBackPress.bind(this)}
        >
          Zurück
        </Button>
      }
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
      stickers
    }
};

export default connect(mapStateToProps)(AddStickerView);
