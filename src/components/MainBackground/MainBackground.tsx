import React from "react";
import { ImageBackground, StyleSheet, KeyboardAvoidingView, ViewStyle } from "react-native";
import { theme } from "../../core/theme";

type Props = {
  children: React.ReactNode;
};

export default function MainBackground(props: Props) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {props.children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    // flex: 1,
    // padding: 20,
    width: "100%",
    // maxWidth: 340,
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
