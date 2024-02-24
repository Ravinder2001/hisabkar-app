import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import BackButton from "../../components/BackButton/BackButton";
import { theme } from "../../core/theme";
import { emailValidator } from "../../helpers/emailValidator";
import { passwordValidator } from "../../helpers/passwordValidator";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";

type LoginScreenProps = {
  navigation: {
    goBack: () => void;
    navigate: (route: string) => void;
    replace: (route: string) => void;
    reset: (config: { index: number; routes: { name: string }[] }) => void;
  };
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<{ value: string; error: string }>({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState<{ value: string; error: string }>({
    value: "",
    error: "",
  });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    dispatch(login({ id: "ahi26nj23r_28", name: "Ravi", token: "7a8f24k29f0f4n57np3" }));

    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <Pressable onPress={() => navigation.navigate("ResetPasswordScreen")}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </Pressable>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <Pressable onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </Pressable>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default LoginScreen;
