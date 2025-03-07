import styles from "./App.styles";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Navigation List </Text>
            <Button title="Email" onPress={() => navigation.navigate("Email")} />
                <Text></Text>
            <Button title="User List" onPress={() => navigation.navigate("UserList")} />
        </View>
    );
};

export default HomeScreen;