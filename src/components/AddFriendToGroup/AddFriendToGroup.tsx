import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button, Image, FlatList } from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import styles from "./style";
import TextInput from "../TextInput/TextInput";
import BottomModal from "../BottomSheetModal/BottomSheetModal";
import SearchFriend from "./SearchFriend/SearchFriend";
import { selectedFriendType } from "../../utils/types";

type Props = {
  setSelectedFriend: Dispatch<SetStateAction<selectedFriendType[]>>;
  selectedFriend: selectedFriendType[];
};
const AddFriendToGroup = ({ setSelectedFriend, selectedFriend }: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleRemove = (data: selectedFriendType) => {
    let updatedList = selectedFriend.filter((friend) => friend.id !== data.id);
    setSelectedFriend(updatedList)
  };

  return (
    <View>
      <View style={styles.btn}>
        <Button onPress={handlePresentModalPress} title="Add Friends" color="#5e03fc" />
      </View>
      <View style={styles.box}>
        <FlatList
          data={selectedFriend}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.left}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.nameText}>{item.name}</Text>
              </View>
              <Button title="Remove" color="red" onPress={() => handleRemove(item)} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <BottomModal bottomSheetModalRef={bottomSheetModalRef} children={<SearchFriend selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />} />
    </View>
  );
};

export default AddFriendToGroup;
