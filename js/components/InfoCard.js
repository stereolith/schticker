import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback
} from "react-native";

import { Card, Button } from "@ant-design/react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectSticker, addSticker, setActiveView } from "../redux/actions";

class InfoCard extends Component {
  constructor() {
    super();

    //state = Variablen, die eine Componente hat/JavaScript-Objekte
    this.state = {
      visible: false,
      slideInAnim: new Animated.Value(-300),
      activeSticker: null
    };
  }

  render() {
    this.formatDate("2019:04:06 10:42:57+02:00");
    let { slideInAnim } = this.state;

    return (
      <Animated.View
        style={{ ...localStyles.cardWrapper, bottom: slideInAnim }}
      >
        {this.state.visible ? (
          <Card style={localStyles.card} bordered={false}>
            <Card.Body style={{ marginLeft: 16 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.selectSticker("");
                }}
              >
                <Text />
              </TouchableWithoutFeedback>

              <View style={{ flex: 1, alignContent: "flex-start" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, lineHeight: 28 }}
                >
                  {this.state.activeSticker.name}
                </Text>
                <Text
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    paddingTop: 15,
                    fontSize: 16,
                    lineHeight: 22,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.activeSticker.author.name}{" "}
                </Text>
                <Text style={{ fontSize: 16, lineHeight: 22, paddingTop: 5 }}>
                  {this.state.activeSticker.description}
                </Text>
              </View>
              <View style={{ position: "absolute", bottom: 15 }}>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#71E5E6",
                    borderColor: "#71E5E6",
                    color: "#000"
                  }}
                  activeStyle={{ backgroundColor: "#71E5E6", color: "#000" }}
                  onPress={() => this.props.setActiveView("StickerDetail")}
                >
                  mehr Infos
                </Button>
              </View>
            </Card.Body>
          </Card>
        ) : null}
      </Animated.View>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({ visible: true, activeSticker: nextProps.activeSticker });
    }
    Animated.timing(this.state.slideInAnim, {
      toValue: nextProps.visible ? 0 : -300,
      easing: Easing.in(),
      duration: 400
    }).start(() => {
      this.setState({ visible: nextProps.visible });
    });
  }

  getAddedLast() {
    if (this.state.activeSticker.location[0].added != null) {
      return (
        <Text
          style={{
            paddingTop: 20,
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 0.6)"
          }}
        >
          Zuletzt gesehen:{" "}
          {this.formatDate(this.state.activeSticker.location[0].added)}
        </Text>
      );
    }
  }

  formatDate(dateStr) {
    let parts = dateStr.slice(0, 10).split(":");
    let date = new Date();
    let oneDay = 24 * 60 * 60 * 1000;
    let currentTime = new Date().getTime();
    date.setFullYear(parts[0]);
    date.setMonth(parts[1]);
    date.setDate(parts[2]);
    let diff = Math.round(Math.abs(currentTime - date.getTime()) / oneDay);
    return "vor " + diff + " Tagen";
  }

  handleMoreClick() {}
}

var localStyles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    position: "absolute",
    left: 0,
    padding: 15,
    width: "100%",
    height: 320
  },
  card: {
    backgroundColor: "#FFF",
    height: "100%",
    position: "relative"
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectSticker,
      addSticker,
      setActiveView
    },
    dispatch
  );
const mapStateToProps = state => {
  const { stickers } = state;
  return {
    activeStickerId: state.activeSticker,
    activeSticker: state.stickers.find(
      sticker => sticker.id === state.activeSticker
    ),
    stickers
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCard);
