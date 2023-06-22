import { StyleSheet } from "react-native";

export const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ee7724",
  },
  loginDivsion: {
    height: "auto",
    flex: 1,
    width: "70%",
    alignItems: "center",
    marginTop: "25%",
    marginBottom: "25%",
  },
  appHeader: {
    marginTop: "25%",
    fontSize: 30,
    color: "#ee7724",
  },
  loginInfo: {
    marginTop: "20%",
    color: "#ee7724",
    // fontFamily: "",
  },
  loginButton: {
    marginTop: "15%",
    width: "auto",
    height: "auto",
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
  },
});

export const UserAccountStyleSheet = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export const EmployeeScreenStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export const ModalStyleSheet = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
