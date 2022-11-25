import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../utils/styles";
import { Avatar } from "react-native-elements"

const ChatComponent = ({ item }) => {
	const navigation = useNavigation();
	const [messages, setMessages] = useState({});

	useLayoutEffect(() => {
		setMessages(item.messages[item.messages.length - 1]);
	}, []);

	const handleNavigation = () => {
		navigation.navigate("Messaging", {
			id: item.id,
			name: item.name,
		});
	};

	return (
	<Pressable style={styles.cchat} onPress={handleNavigation}>
     <Avatar  size="small"  rounded source={require('../assets/logo.png')}/>
     <View style={styles.crightContainer}>
		<View>
		  <Text style={styles.cusername}>{item.name}</Text>
          <Text style={styles.cmessage}>{messages?.text ? messages.text : "join Room"}</Text>
		</View>
		<View>
		  <Text style={styles.ctime}>{messages?.time ? messages.time : "now"}</Text>
		</View>
	 </View>
	</Pressable>
	);
};

export default ChatComponent;
