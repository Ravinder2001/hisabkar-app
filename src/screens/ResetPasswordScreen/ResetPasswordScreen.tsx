import React, { useState } from "react";
import Background from "../../components/Background/Background";
import BackButton from "../../components/BackButton/BackButton";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { emailValidator } from "../../helpers/emailValidator";
type Props = {
  navigation: {
    goBack: () => void;
    navigate: (route: string) => void;
  };
};

export default function ResetPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate("LoginScreen");
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text:string) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button mode="contained" onPress={sendResetPasswordEmail} style={{ marginTop: 16 }}>
        Send Instructions
      </Button>
    </Background>
  );
}
