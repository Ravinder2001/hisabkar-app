import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Navbar from "../../components/NavBar/Navbar";
import styles from "./style";
import TextInput from "../../components/TextInput/TextInput";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Equally from "./Equally/Equally";
import Custom from "./Custom/Custom";
import MembersModal from "./MembersModal/MembersModal";
import { selectedFriendType } from "../../utils/types";

const Tab = createMaterialTopTabNavigator();
type Props = {
  navigation: {
    goBack: () => void;
  };
};
function AddExpense({ navigation }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState<selectedFriendType[]>([
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
  const [equallyUsers, setEquallyUsers] = useState(users);
  const [customUsers, setCustomUsers] = useState(users);

  return (
    <View style={styles.container}>
      <Navbar goBack={navigation.goBack} title="Add Expense" isBackVisible={true} />
      <TextInput label="₹" keyboardType="numeric" />
      <TextInput label="Expense for" />
      <View style={styles.label}>
        <Text style={styles.text}>This Expense was Paid by</Text>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.you}>You.</Text>
        </Pressable>
      </View>
      <Pressable style={styles.submitBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.submitBtnText}>View Members</Text>
      </Pressable>

      <Tab.Navigator style={styles.tab}>
        <Tab.Screen name="Equally">{() => <Equally users={equallyUsers} />}</Tab.Screen>
        <Tab.Screen name="Custom">{() => <Custom users={customUsers} />}</Tab.Screen>
      </Tab.Navigator>

      <MembersModal users={users} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

export default AddExpense;
