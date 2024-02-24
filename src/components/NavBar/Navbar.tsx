import React from "react";
import styles from "./style";
import { GestureResponderEvent, Image, Pressable, Text, View } from "react-native";
type Props = {
  goBack: () => void;
  title: string;
  isBackVisible: boolean;
};
function Navbar(props: Props) {
  return (
    <View style={styles.container}>
      {props.isBackVisible ? (
        <Pressable onPress={props.goBack} style={styles.backBtn}>
          <Image style={styles.image} source={require("../../assets/arrow_back.png")} />
        </Pressable>
      ) : null}
      <View>
        <Text style={styles.heading}>{props.title}</Text>
      </View>
      <Image style={styles.profileIcon} source={{ uri: "https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg" }} />
    </View>
  );
}

export default Navbar;
