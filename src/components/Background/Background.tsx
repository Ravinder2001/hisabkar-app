import React from "react";
import { ImageBackground, StyleSheet, KeyboardAvoidingView, ViewStyle } from "react-native";
import { theme } from "../../core/theme";

type Props = {
  children: React.ReactNode;
};

export default function Background(props: Props) {
  return (
    <ImageBackground source={require("../../assets/background_dot.png")} resizeMode="repeat" style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {props.children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
