import React, { Dispatch, SetStateAction, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, FlatList, Image } from "react-native";
import styles from "./style";
import { Checkbox } from "react-native-paper";
import { selectedFriendType } from "../../../utils/types";
import { AntDesign } from "@expo/vector-icons";
type Props = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  users: selectedFriendType[];
};
const MembersModal = ({ modalVisible, setModalVisible, users }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable onPress={()=>{
            setModalVisible(false)
          }} style={styles.close}>
            <AntDesign name="closecircle" size={24} color="black" />
          </Pressable>
          <Text style={styles.heading}>Group Members</Text>
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
                <Checkbox status="checked" color="red" />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default MembersModal;
