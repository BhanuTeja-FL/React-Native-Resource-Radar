import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./App/Stacks/Stacks";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
