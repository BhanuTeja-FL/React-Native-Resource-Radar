import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import { Image } from "react-native";
import Employee from "../Screens/Employee";
import AccountPopover from "../Utils/modals/AccountPopover";

const Stacks = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../Assets/fissionLogo.png")}
              style={{ width: 250, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Employee"
        component={Employee}
        options={{
          headerRight: () => <AccountPopover />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
