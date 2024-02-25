import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, FlatList, Image, Text, View } from "react-native";
import TextInput from "../../TextInput/TextInput";
import styles from "./style";
import { selectedFriendType } from "../../../utils/types";

type Props = {
  setSelectedFriend: Dispatch<SetStateAction<selectedFriendType[]>>;
  selectedFriend:selectedFriendType[]
};

function SearchFriend({ setSelectedFriend,selectedFriend }: Props) {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      isActive: true,
      image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      isActive: true,
      image: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 3,
      name: "Bobbie Doeman",
      isActive: true,
      image: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 4,
      name: "Cabnth Johnson",
      isActive: true,
      image: "https://www.bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 5,
      name: "Krekvh Martin",
      isActive: true,
      image: "https://www.bootdey.com/img/Content/avatar/avatar5.png",
    },
    {
      id: 6,
      name: "Jose Cassti",
      isActive: true,
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 7,
      name: "John Mrtiuhg",
      isActive: true,
      image: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
    },
  ]);

  const handleAdd = (data: selectedFriendType) => {
    // Check if data already exists in the selectedFriend array
    if (!selectedFriend.some(friend => friend.id === data.id)) {
      setSelectedFriend((prev) => [...prev, data]);
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput label="Search Friend" />
      <View style={styles.box}>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.leftContainer}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text >Active</Text>
                </View>
              </View>
              <Button title="Add" color="black" onPress={()=>handleAdd(item)} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

export default SearchFriend;
