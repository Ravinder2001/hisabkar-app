import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import BackButton from "../../components/BackButton/BackButton";
import Navbar from "../../components/NavBar/Navbar";
import TextInput from "../../components/TextInput/TextInput";
import AddFriendToGroup from "../../components/AddFriendToGroup/AddFriendToGroup";
type Props = {
  navigation: {
    goBack: () => void;
  };
};
type typeImageType = {
  id: number;
  image: string;
  label: string;
  isSelected: boolean;
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

  const handleBack = () => {
    navigation.goBack();
  };

  const typeSelect = (id: number) => {
    setTypeImageList((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item, isSelected: false }
      });
    });
  };

  return (
    <View style={styles.container}>
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
        {typeImageList.map((image) => (
          <Pressable key={image.id} onPress={() => typeSelect(image.id)} style={image.isSelected ? styles.imageBoxActive : styles.imageBox}>
            <Image style={styles.image} source={image.image} />
            <Text style={styles.typeLabel}>{image.label}</Text>
          </Pressable>
        ))}
      </View>
      <AddFriendToGroup/>
    </View>
  );
}

export default CreateGroup;
