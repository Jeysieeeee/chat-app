import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  Alert,
  Image,
} from "react-native";
import { styles } from "../utils/styles";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");

  const storeUsername = async () => {
    try {
      await AsyncStorage.setItem("username", username);
      navigation.navigate("Chat");
    } catch (e) {
      Alert.alert("Error! While saving username");
    }
  };
  const handleSignIn = () => {
    if (username.trim()) {
      storeUsername();
      console.log(username)
    } else {
      Alert.alert("Username is required.");
    }
  };
  return (
    <SafeAreaView style={styles.loginscreen}>
        <View style={styles.logininputContainer}>
        <Text style={styles.loginheading}>Sign in</Text>
          <TextInput
            autoCorrect={false}
            placeholder="Enter your username"
            style={styles.logininput}
            onChangeText={(value) => setUsername(value)}
          />
          <Pressable onPress={handleSignIn} style={styles.loginbutton}>
            <View>
              <Text style={styles.loginbuttonText}>Get Started</Text>
            </View>
          </Pressable>
        </View>
        <View style={{width:500, height:300}}>
          <Image
            source={{
              uri: "https://media.tenor.com/qyEg2qWmeboAAAAi/robot-cute.gif",
            }}
            style={{ width: 300, height: 300, alignSelf:"flex-end" }}
          />
        </View>
    </SafeAreaView>
  );
}
