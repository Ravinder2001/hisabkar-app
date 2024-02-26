import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, Pressable } from "react-native";
import styles from "./style";
import { expenseListType } from "../../utils/types";
import { AntDesign } from '@expo/vector-icons';
type Props={
  navigation: {
    reset: (config: { index: number; routes: { name: string }[] }) => void;
    replace: (route: string) => void;
    navigate: (route: string) => void;
  };
}
const ExpenseList = ({navigation}:Props) => {
  const [expenseList, setExpenseList] = useState<expenseListType[]>([
    {
      name: "Grocery",
      type: "Grocery",
      createdAt: "10:00",
      amount: 500,
      users: [
        { id: "1", name: "John", avatar: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: "2", name: "Emily", avatar: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: "3", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: "4", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: "5", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
    },
    {
      name: "Grocery",
      type: "Grocery",
      createdAt: "10:00",
      amount: 500,
      users: [
        { id: "1", name: "John", avatar: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: "2", name: "Emily", avatar: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: "3", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: "4", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: "5", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
    },
    {
      name: "Grocery",
      type: "Grocery",
      createdAt: "10:00",
      amount: 500,
      users: [
        { id: "1", name: "John", avatar: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: "2", name: "Emily", avatar: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: "3", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: "4", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: "5", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
    },
    {
      name: "Grocery",
      type: "Grocery",
      createdAt: "10:00",
      amount: 500,
      users: [
        { id: "1", name: "John", avatar: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: "2", name: "Emily", avatar: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: "3", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: "4", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: "5", name: "Michael", avatar: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
    },
  ]);

  const renderClassItem = ({ item }: { item: expenseListType }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{item.createdAt}</Text>
        </View>

        <View style={[styles.expenseCard, { backgroundColor: "#E0FFFF" }]}>
          <View>
            <Text style={styles.cardAmount}>₹{item.amount}</Text>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDate}>24 March, 18pm - 19pm</Text>
            <Text style={styles.cardDate}>{item.type}</Text>
            <FlatList
              contentContainerStyle={styles.studentListContainer}
              data={item.users}
              keyExtractor={(student) => student.id}
              renderItem={({ item: student }) => <Image source={{ uri: student.avatar }} style={styles.studentAvatar} />}
              horizontal
            />
          </View>
          <View style={styles.btnGroup}>
          <AntDesign name="edit" size={20} color="green" />
          <AntDesign name="delete" size={20} color="red" />
          </View>
        </View>
      </View>
      
    </View>
  );

  const renderHeader = () => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Expense of Feb</Text>
        <Text style={styles.headerSubtitle}>24 March, 07:29 PM</Text>
      </View>

      <View style={styles.body}>
        <Image source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Mr. Ravinder Singh Negi</Text>
          <Text style={styles.userRole}>Owner</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hisabkar</Text>

      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={expenseList}
        ListHeaderComponent={renderHeader}
        renderItem={renderClassItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Pressable
        style={{
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          position: "absolute",
          bottom: 50,
          right: 10,
          backgroundColor: "#6a4fff",
          borderRadius: 100,
        }}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text style={{ color: "white", fontSize: 28 }}>+</Text>
      </Pressable>
    </View>
  );
};

export default ExpenseList;
