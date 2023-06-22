import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import React from "react";
import { LoginScreenStyles } from "../Styles/Styles";
import CustomFont from "../Utils/CustomFont";

const LoginScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("Employee");
  };
  return (
    <SafeAreaView style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.loginDivsion}>
        <Text style={LoginScreenStyles.appHeader}>Resouce Radar</Text>
        <Text style={LoginScreenStyles.loginInfo}>
          Please login to your account
        </Text>
        <TouchableOpacity
          style={LoginScreenStyles.loginButton}
          onPress={() => navigate()}
        >
          <Text>Google Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
