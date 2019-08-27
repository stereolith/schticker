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
        image: "a",
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
    //     const source = { uri: response.uri };

    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    //     var info = this.state.stickerInfo;
    //     info.image = source;
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
          source={this.state.stickerInfo.image}
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
