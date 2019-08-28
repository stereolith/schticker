import React, { Component } from "react";
import {
  Linking,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  View,
  TextInput
} from "react-native";
import { Button } from "@ant-design/react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addSticker, selectSticker, setActiveView } from "../redux/actions";

class AddStickerView extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: "CAMERA",
      errorMsg: '',
      stickerInfo: {
        image: 'data:image/png;base64,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',
        name: "",
        username: "",
        description: "",
        addedDate: "",
        location: {},
        author: {
          name: "",
          facebook: "",
          instagram: "",
          twitter: "",
          website: ""
        }
      },
      activeLinks: []
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexGrow: 1 }}>
        <KeyboardAwareScrollView
          style={{
            flex: 1,
            flexGrow: 1,
            backgroundColor: "#E5E5E5",
            minHeight: "100%",
            paddingTop: 65,
          }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {this.getStep()}
        </KeyboardAwareScrollView>
        {this.getBackButton()}
        <Button
          disabled={this.stepIsValid() ? null : 'true' }
          style={this.stepIsValid() ? localStyles.nextButton : [localStyles.nextButton, localStyles.nextButtonInactive]}
          onPress={this.hadleNextPress.bind(this)}
        >
          {this.state.activeStep == "INFO" ? "Abschicken" : "Weiter"}
        </Button>
      </View>
    );
  }

  hadleNextPress() {
    switch (this.state.activeStep) {
      case "CAMERA":
        this.setState({ activeStep: "INFO" });
        break;
      case "INFO":
        this.addSticker();
        this.setState({ activeStep: "SUCCESS" });
        break;
      default:
        return;
    }
  }

  handleBackPress() {
    switch (this.state.activeStep) {
      case "INFO":
        this.setState({ activeStep: "CAMERA" });
        break;
      default:
        return;
    }
  }

  showImagePicker() {
    // const options = {
    //   title: "Select Avatar",
    //   storageOptions: {
    //     skipBackup: true,
    //     path: "images"
    //   }
    // };

    // ImagePicker.showImagePicker(options, response => {
    //   console.log("Response = ", response);

    //   if (response.didCancel) {
    //     console.log("User cancelled image picker");
    //   } else if (response.error) {
    //     console.log("ImagePicker Error: ", response.error);
    //   } else if (response.customButton) {
    //     console.log("User tapped custom button: ", response.customButton);
    //   } else {

    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    //     var info = this.state.stickerInfo;
    //     info.image = response.uri;
    //     this.setState({
    //       stickerInfo: info
    //     });
    //   }
    // });
  }

  getStep() {
    switch (this.state.activeStep) {
      case "CAMERA":
        return (
          <View style={{ width: "100%", flex: 1, ...localStyles.section }}>

            {this.addPicture()}

            <Text style={{fontSize: 16, paddingBottom: 15}}>Befindest du dich gerade am <Text style={{fontWeight: 'bold'}}>Standort</Text> des Schtickers?{"\n"}
            Hier hast du die Möglickeit, deinen aktuellen Standort dem Schticker hinzuzufügen:</Text>
            <Button
              style={localStyles.addLink}
              onPress={this.getLocation.bind(this)}
            >
              Aktuellen Standort nutzen
            </Button>
          </View>
        );
      case "INFO":
        return (
          <View>
            <View style={{ width: "100%", flex: 1, ...localStyles.section }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  paddingBottom: 5,
                }}
              >
                Infos hinzufügen
              </Text>
              <View>
                <Text style={{ flexGrow: 1 }}>Name: </Text>
                <TextInput
                  placeholder="Pflichtfeld"
                  style={localStyles.textIn}
                  value={this.state.stickerInfo.name}
                  onChangeText={val => {
                    var info = this.state.stickerInfo;
                    info.name = val;
                    this.setState({ stickerInfo: info });
                  }}
                />
              </View>
              <View>
                <Text style={{ flexGrow: 1 }}>Beschreibung: </Text>
                <TextInput
                  placeholder="Pflichtfeld"
                  style={localStyles.textIn}
                  value={this.state.stickerInfo.description}
                  onChangeText={val => {
                    var info = this.state.stickerInfo;
                    info.description = val;
                    this.setState({ stickerInfo: info });
                  }}
                />
              </View>
              <View>
                <Text style={{ flexGrow: 1 }}>Posten als (username): </Text>
                <TextInput
                  placeholder="Pflichtfeld"
                  style={localStyles.textIn}
                  value={this.state.stickerInfo.username}
                  onChangeText={val => {
                    var info = this.state.stickerInfo;
                    info.username = val;
                    this.setState({ stickerInfo: info });
                  }}
                />
              </View>
            </View>
            <View style={{ width: "100%", flex: 1, ...localStyles.section }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  paddingBottom: 5,
                  paddingTop: 10
                }}
              >
                Über den Autor
              </Text>
              <View>
                <Text style={{ flexGrow: 1 }}>Name: </Text>
                <TextInput
                  style={localStyles.textIn}
                  value={this.state.stickerInfo.author.name}
                  onChangeText={val => {
                    var info = this.state.stickerInfo;
                    info.author.name = val;
                    this.setState({ stickerInfo: info });
                  }}
                />
              </View>
              {this.getLinkIn("website")}
              {this.getLinkIn("facebook")}
              {this.getLinkIn("instagram")}
              {this.getLinkIn("twitter")}
            </View>
          </View>
        );
      case "SUCCESS":
        return (
          <View style={{ width: "100%", flex: 1, ...localStyles.section }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                paddingBottom: 5,
                paddingTop: 65
              }}
            >
              Der Schticker wurde erfolgreich hinzugefügt.
            </Text>
            <Button
              style={localStyles.addLink}
              onPress={this.toDetail.bind(this)}
            >
              Zur Schticker-Detail-Seite
            </Button>
          </View>
        );
    }
  }

  stepIsValid() {
    switch (this.state.activeStep) {
      case "CAMERA":
        return this.state.stickerInfo.image != '' ? true : false
      case "INFO":
        var s = this.state.stickerInfo
        return (s.name != '' && s.username != '' && s.description != '') ? true : false
      default:
        return true
    }
  } 

  addPicture() {
    if (this.state.stickerInfo.image == '') {
      return (
        <View>
          <Button
            style={{
              flexGrow: 1,
              paddingVertical: 5,
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              marginBottom: 20
            }}
            onPress={this.showImagePicker.bind(this)}
          >
            1. Foto hinzufügen
          </Button>
        </View>
      )

    } else {
      return (
      <View>
        <Button
          style={{
            flexGrow: 1,
            paddingVertical: 5,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 10,
            marginBottom: 20
          }}
          onPress={this.showImagePicker.bind(this)}
        >
          Foto ändern
        </Button>
        <Image
          source={{uri: this.state.stickerInfo.image}}
          style={{ flexGrow: 1, height: 250, borderWidth: 1, borderColor: '#777', marginTop: 15, marginBottom: 15}}
          />
      </View>
      )
    }
  }

  getBackButton() {
    if (
      this.state.activeStep == "CAMERA" ||
      this.state.activeStep == "SUCCESS"
    ) {
      return <View />;
    } else {
      return (
        <Button
          style={{ flex: 1, borderWidth: 2, position: "absolute", bottom: 15, left: 15 }}
          onPress={this.handleBackPress.bind(this)}
        >
          Zurück
        </Button>
      );
    }
  }

  addSticker() {
    var date = this.getCurrentDateString();
    console.log(this.state.stickerInfo);
    this.props.addSticker(
      this.state.stickerInfo.name,
      this.getCurrentDateString,
      this.state.stickerInfo.username,
      this.state.stickerInfo.image,
      [this.state.stickerInfo.location],
      {
        name: this.state.stickerInfo.author.name,
        links: {
          facebook: this.state.stickerInfo.author.facebook,
          instagram: this.state.stickerInfo.author.instagram,
          twitter: this.state.stickerInfo.author.twitter,
          website: this.state.stickerInfo.author.website
        }
      },
      this.state.stickerInfo.description
    );
  }

  getCurrentDateString() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    return (
      date +
      ":" +
      month +
      ":" +
      year +
      " " +
      hours +
      ":" +
      min +
      ":" +
      sec +
      "+02:00"
    );
  }

  getLinkIn(type) {
    if (this.state.activeLinks.includes(type)) {
      return (
        <View>
          <Text style={{ flexGrow: 1 }}>{type}-Link: </Text>
          <TextInput
            style={localStyles.textIn}
            value={this.state.stickerInfo.author[type]}
            onChangeText={val => {
              let info = this.state.stickerInfo;
              info.author[type] = val;
              this.setState({ stickerInfo: info });
            }}
          />
        </View>
      );
    } else {
      return (
        <Button style={localStyles.addLink} onPress={() => this.addLink(type)}>
          {type}-Link hinzufügen
        </Button>
      );
    }
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        var info = this.state.stickerInfo;
        info.location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        this.setState({ stickerInfo: info });

        console.log(location);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  addLink(type) {
    console.log("add", type);
    this.setState({ activeLinks: [...this.state.activeLinks, type] });
  }

  removeLink(type) {}

  toDetail() {
    this.props.selectSticker(this.props.latestAdded);
    this.props.setActiveView("StickerDetail");
  }
}

var localStyles = StyleSheet.create({
  section: {
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  textIn: {
    flexGrow: 2,
    height: 40,
    borderColor: "gray",
    backgroundColor: "#FFF",
    borderWidth: 1,
    marginBottom: 10
  },
  inWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  addLink: {
    flexGrow: 1,
    paddingVertical: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10
  },
  nextButton: {
    flex: 1,
    position: "absolute",
    bottom: 15, 
    right: 15,
    backgroundColor: '#71E5E6',
    borderWidth: 1,
    borderColor: '#FFF',
    shadowOffset:{   height: 1,  },
    shadowColor: '#71E5E6',
    shadowOpacity: 1.0,
  },
  nextButtonInactive: {
    backgroundColor: '#b8dede',
    shadowColor: '#b8dede',
    color: '#333'

  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addSticker,
      selectSticker,
      setActiveView
    },
    dispatch
  );

const mapStateToProps = state => {
  const { stickers, latestAdded } = state;
  return {
    stickers,
    latestAdded
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStickerView);
