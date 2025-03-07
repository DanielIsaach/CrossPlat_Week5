import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Card, Paragraph, Title } from "react-native-paper"; // Mengimpor komponen React Native Paper
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./App.styles.js";
import userData from "./data.json"; // Mengimpor data pengguna
import HomeScreen from "./HomeScreen.tsx";
import Email from "./Email.tsx";
import UserList from "./UserList.tsx";
import Profile from "./Profile.tsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
