import { View, Text, TouchableHighlight, SafeAreaView } from "react-native";
import React from "react";
import { EmployeeScreenStyleSheet } from "../Styles/Styles";

const Employee = ({ navigation }) => {
  const onclick = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <SafeAreaView style={EmployeeScreenStyleSheet.container}>
        <TouchableHighlight onPress={onclick}>
          <Text>Employee</Text>
        </TouchableHighlight>
      </SafeAreaView>
    </>
  );
};

export default Employee;
