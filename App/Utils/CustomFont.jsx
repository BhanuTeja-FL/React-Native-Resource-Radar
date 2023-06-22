import { View, Text } from "react-native";
import React from "react";
import { useFonts, Roboto_400Regular } from "expo-font";
import AppLoading from "expo-app-loading";

const CustomFont = ({ TextContent, styles }) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    SplashScreen.hideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            ...styles,
          }}
        >
          {TextContent}
        </Text>
      </View>
    );
  }
};

export default CustomFont;
