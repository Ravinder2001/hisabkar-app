import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

type DashboardProps = {
  navigation: {
    reset: (config: { index: number; routes: { name: string }[] }) => void;
  };
};

export default function Dashboard(props: DashboardProps) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>Your amazing app starts here. Open you favorite code editor and start editing this project.</Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          props.navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
}
