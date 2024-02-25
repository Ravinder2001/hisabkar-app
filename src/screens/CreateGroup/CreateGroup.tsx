import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import BackButton from "../../components/BackButton/BackButton";
import Navbar from "../../components/NavBar/Navbar";
import TextInput from "../../components/TextInput/TextInput";
import AddFriendToGroup from "../../components/AddFriendToGroup/AddFriendToGroup";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { selectedFriendType, typeImageType } from "../../utils/types";
type Props = {
  navigation: {
    goBack: () => void;
  };
};

function CreateGroup({ navigation }: Props) {
  const [typeImageList, setTypeImageList] = useState<typeImageType[]>([
    {
      id: 1,
      image: require("../../assets/monthly.png"),
      label: "Monthly",
      isSelected: false,
    },
    { id: 2, image: require("../../assets/personal.png"), label: "Personal", isSelected: false },
    { id: 3, image: require("../../assets/travel.png"), label: "Travel", isSelected: false },
    { id: 4, image: require("../../assets/Others.png"), label: "Others", isSelected: false },
  ]);
  const [selectedFriend, setSelectedFriend] = useState<selectedFriendType[]>([]);

  const handleBack = () => {
    navigation.goBack();
  };

  const typeSelect = (id: number) => {
    setTypeImageList((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item, isSelected: false };
      });
    });
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View>
          <Navbar isBackVisible={true} goBack={handleBack} title="Create Group" />
          <TextInput
            label="Group Name"
            returnKeyType="next"
            // value={name.value}
            // onChangeText={(text:string) => setName({ value: text, error: "" })}
            // error={!!name.error}
            // errorText={name.error}
          />

          <Text style={styles.label}>Group Type</Text>

          <View style={styles.typeBox}>
            <FlatList
              data={typeImageList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Pressable onPress={() => typeSelect(item.id)} style={item.isSelected ? styles.imageBoxActive : styles.imageBox}>
                  <Image style={styles.image} source={item.image} />
                  <Text style={styles.typeLabel}>{item.label}</Text>
                </Pressable>
              )}
              horizontal={true}
              scrollEnabled={false}
            />
          </View>
          <AddFriendToGroup setSelectedFriend={setSelectedFriend} selectedFriend={selectedFriend} />
        </View>
        <Pressable style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </Pressable>
      </View>
    </BottomSheetModalProvider>
  );
}

export default CreateGroup;
