import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Modal, Menu, Divider, Pressable, HamburgerIcon } from "native-base";
import UserInfo from "../UserInfo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ModalStyleSheet } from "../../Styles/Styles";
import { useNavigation } from "@react-navigation/native";

const AccountPopover = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const onclick = (e) => {
    // console.log(e);
    navigation.navigate("Login");
  };

  return (
    <>
      {/* -----------------Modal--------------- */}
      {/* <UserInfo open={open} setOpen={setOpen} />
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="250">
          <Modal.CloseButton />
          <Modal.Header>User Name</Modal.Header>
          <Modal.Body>
            <TouchableOpacity
              onPress={onclick}
              style={ModalStyleSheet.container}
            >
              <Text>Logout</Text>
              <Icon name="logout" color={"#ff0000"} size={20} />
            </TouchableOpacity>
          </Modal.Body>
        </Modal.Content>
      </Modal> */}
      {/*          ------------------- MENU ------------------*/}
      {/* <Menu
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps} size={15}>
              <HamburgerIcon size={25} />
            </Pressable>
          );
        }}
      >
        <Menu.Group title="Screens">
          <Menu.Item>Employees</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Clients</Menu.Item>
        </Menu.Group>
        <Divider mt="3" w="100%" />
        <Menu.Group title="Account">
          <Menu.Item>User Name</Menu.Item>
          <Pressable>
            <Menu.Item onPress={(e) => onclick(e)}>
              Logout <Icon name="logout" color={"#ff0000"} size={20} />
            </Menu.Item>
          </Pressable>
        </Menu.Group>
      </Menu> */}
    </>
  );
};

export default AccountPopover;
