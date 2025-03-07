import React from "react";
import { View, Text, Image, Button } from "react-native";

const Profile = ({ navigation, route }) => {
  // Ambil data pengguna dari route.params
  const { name, email, photo_url } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={typeof photo_url === "string" ? { uri: photo_url } : photo_url}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
      <Text>{email}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
