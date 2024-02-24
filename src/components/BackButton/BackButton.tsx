import React from "react";
import { Pressable, Image, StyleSheet, GestureResponderEvent } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

type Props = {
  goBack: (event: GestureResponderEvent) => void;
};

export default function BackButton(props: Props) {
  return (
    <Pressable onPress={props.goBack} style={styles.container}>
      <Image style={styles.image} source={require("../../assets/arrow_back.png")} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 4,
    // borderColor: "red",
    // borderWidth: 1,
  },
  image: {
    width: 24,
    height: 24,
  },
});
