import React, { useState, useLayoutEffect } from "react";
import {Text,SafeAreaView,View,TextInput,Pressable,Alert,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../utils/styles";

const ChatLogin = ({ navigation }) => {
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
		} else {
			Alert.alert("Username is required.");
		}
	};

	useLayoutEffect(() => {
		const getUsername = async () => {
			try {
				const value = await AsyncStorage.getItem("username");
				if (value !== null) {
					navigation.navigate("Chat");
				}
			} catch (e) {
				console.error("Error while loading username!");
			}
		};
		getUsername();
	}, []);

	return (
		<SafeAreaView style={styles.loginscreen}>
			<View style={styles.loginscreen}>
				<Text style={styles.loginheading}>Start Chating with your favorite Team Room or create your own Room</Text>
				<View style={styles.logininputContainer}>
					<TextInput
						autoCorrect={false}
						placeholder='Enter your Nick Name'
						style={styles.logininput}
						onChangeText={(value) => setUsername(value)}
					/>
				</View>

				<Pressable onPress={handleSignIn} style={styles.loginbutton}>
					<View>
						<Text style={styles.loginbuttonText}>Start!</Text>
					</View>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default ChatLogin;