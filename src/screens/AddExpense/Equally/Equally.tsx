import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import { selectedFriendType } from "../../../utils/types";
type Props = {
  users: selectedFriendType[];
};
function Equally({ users }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
              </View>
            </View>
            <Text style={styles.amount}>₹100</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.box}
      />
      <Pressable style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Equally Split</Text>
      </Pressable>
    </View>
  );
}

export default Equally;
