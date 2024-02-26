import React from "react";
import { Button, Text, Pressable, View } from "react-native";
import MainBackground from "../../components/MainBackground/MainBackground";
import styles from "./style";
import ListGroupComponent from "../../components/ListGroupComponent/ListGroupComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateGroup from "../CreateGroup/CreateGroup";
import { useSelector } from "react-redux";
import Navbar from "../../components/NavBar/Navbar";
type DashboardProps = {
  navigation: {
    reset: (config: { index: number; routes: { name: string }[] }) => void;
    replace: (route: string) => void;
    navigate: (route: string) => void;
  };
};

export default function Dashboard({ navigation }: DashboardProps) {
  return (
    <MainBackground>
      <Navbar goBack={()=>{}} isBackVisible={false} title="Hisabkar"/>
      <ListGroupComponent navigation={navigation} />
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
        onPress={() => navigation.navigate("CreateGroup")}
      >
        <Text style={{ color: "white", fontSize: 28 }}>+</Text>
      </Pressable>
    </MainBackground>
  );
}
