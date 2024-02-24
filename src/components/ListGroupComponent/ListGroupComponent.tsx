import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, Pressable, StyleSheet } from "react-native";
import styles from "./style";

const ListGroupComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: "Group 1",
      createdDate: "2023-05-18",
      attendees: [
        { id: 1, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 2, remoteImage: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 3, remoteImage: "https://bootdey.com/img/Content/avatar/avatar8.png" },
        { id: 4, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 5, remoteImage: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, remoteImage: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
      backgroundColor: "#ffdcb2",
      titleColor: "#ff8c00",
    },
    {
      id: 2,
      title: "Group 2",
      createdDate: "2023-05-18",
      attendees: [
        { id: 1, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 2, remoteImage: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 3, remoteImage: "https://bootdey.com/img/Content/avatar/avatar8.png" },
        { id: 4, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 5, remoteImage: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, remoteImage: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
      backgroundColor: "#ffdcb2",
      titleColor: "#ff8c00",
    },
    {
      id: 3,
      title: "Group 3",
      createdDate: "2023-05-18",
      attendees: [
        { id: 1, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 2, remoteImage: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 3, remoteImage: "https://bootdey.com/img/Content/avatar/avatar8.png" },
        { id: 4, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 5, remoteImage: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, remoteImage: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
      backgroundColor: "#ffdcb2",
      titleColor: "#ff8c00",
    },
    {
      id: 4,
      title: "Group 4",
      createdDate: "2023-05-18",
      attendees: [
        { id: 1, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 2, remoteImage: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 3, remoteImage: "https://bootdey.com/img/Content/avatar/avatar8.png" },
        { id: 4, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 5, remoteImage: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, remoteImage: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
      backgroundColor: "#ffdcb2",
      titleColor: "#ff8c00",
    },
    {
      id: 5,
      title: "Group 5",
      createdDate: "2023-05-18",
      attendees: [
        { id: 1, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 2, remoteImage: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 3, remoteImage: "https://bootdey.com/img/Content/avatar/avatar8.png" },
        { id: 4, remoteImage: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 5, remoteImage: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, remoteImage: "https://bootdey.com/img/Content/avatar/avatar5.png" },
      ],
      backgroundColor: "#ffdcb2",
      titleColor: "#ff8c00",
    },
  ]);

  const renderAppointmentCard = ({ item }: any) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Text style={[styles.cardTitle, { color: item.titleColor }]}>{item.title}</Text>
      <View style={styles.cardDates}>
        <Text style={styles.cardDate}>{item.createdDate}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.attendeesContainer}>
          {item.attendees.map((attendee: any) => (
            <Image key={attendee.id} source={{ uri: attendee.remoteImage }} style={styles.attendeeImage} />
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.actionButton}>
            <Text style={styles.buttonText}>View</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.buttonText}>Remove</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.buttonText}>Edit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  const searchFilter = (item: any) => {
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Groups</Text> */}
      <TextInput style={styles.searchInput} placeholder="Search" value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={appointments.filter(searchFilter)}
        renderItem={renderAppointmentCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ListGroupComponent;
