import { View, TouchableOpacity } from "react-native";
import React from "react";
import { UserAccountStyleSheet } from "../Styles/Styles";
import Icon from "react-native-vector-icons/Entypo";

const UserInfo = ({ open, setOpen }) => {
  return (
    <View style={UserAccountStyleSheet.container}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Icon name="menu" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
