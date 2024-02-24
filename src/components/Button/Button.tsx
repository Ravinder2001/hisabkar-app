import React from "react";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Button as PaperButton, ButtonProps } from "react-native-paper";
import { theme } from "../../core/theme";

interface CustomButtonProps extends ButtonProps {
  mode: "contained" | "outlined";
  style?: ViewStyle;
}

export default function Button({ mode, style, ...props }: CustomButtonProps) {
  return (
    <PaperButton
      style={[styles.button, mode === "outlined" && { backgroundColor: theme.colors.surface }, style]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
