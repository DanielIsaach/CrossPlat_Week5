import React from "react";
import { ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import { Avatar, Card, Paragraph, Title } from "react-native-paper"; // Mengimpor komponen React Native Paper
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./App.styles.js";
import userData from "./data.json"; // Mengimpor data pengguna

// Fungsi untuk mengambil gambar lokal berdasarkan nama file
const localImage = (imageName) => {
  const imageMap = {
    "Crab.png": require("./assets/Image/Crab.png"),
    "Pat.png": require("./assets/Image/Pat.png"),
    "Plank.png": require("./assets/Image/Plank.png"),
    "Sandy.png": require("./assets/Image/Sandy.png"),
    "sponge.png": require("./assets/Image/sponge.png"),
    "Squid.png": require("./assets/Image/Squid.png"),
    "Yanto.png": require("./assets/Image/Yanto.png"),
  };

  return imageMap[imageName] || require("./assets/Image/Default.jpg"); // Gambar default jika tidak ditemukan
};

const UserList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {userData.map((users) => {
          const isUrl = users.photo_url.startsWith("http");

          return (
            <Card  style={styles.card} key={users.name} onPress={() => navigation.navigate("Profile", {
                name: users.name,
                email: users.email,
                photo_url: isUrl ? users.photo_url : localImage(users.photo_url),
              })}>
              <Card.Content style={styles.cardContent}>
                <Avatar.Image
                  size={80}
                  source={
                    isUrl
                      ? { uri: users.photo_url }
                      : localImage(users.photo_url)
                  }
                  style={styles.avatar}
                />
                <View style={styles.textContainer}>
                  <Title style={styles.title}>{users.name}</Title>
                  <Paragraph style={styles.paragraph}>{users.email}</Paragraph>
                </View>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserList;