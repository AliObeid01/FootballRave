import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import Modal from "../components/Modal";
import ChatComponent from "../components/ChatComponent";
import socket from "../utils/socket";
import { styles } from "../utils/styles";
import AntDesign from '@expo/vector-icons/AntDesign'
import { COLORS } from '../core/COLORS'

const Chat = () => {
	const [visible, setVisible] = useState(false);

    const [rooms, setRooms] = useState([]);

	useLayoutEffect(() => {
		function fetchGroups() {
			fetch("http://192.168.1.3:4000/api")
				.then((res) => res.json())
				.then((data) => setRooms(data))
				.catch((err) => console.error(err));
		}
		fetchGroups();
	}, []);

	useEffect(() => {
		socket.on("roomsList", (rooms) => {
			setRooms(rooms);
		});
	}, [socket]);

	const handleCreateGroup = () => setVisible(true);

	return (
		<SafeAreaView style={styles.chatscreen}>			
				<View style={styles.chatheader}>
				<TouchableOpacity onPress={handleCreateGroup}>
                  <AntDesign style={{color:COLORS.secondaryColor}}  name='pluscircleo' size={30} />
                </TouchableOpacity>
				</View>
			<View style={styles.chatlistContainer}>
				{rooms.length > 0 ? (
					<FlatList
						data={rooms}
						renderItem={({ item }) => <ChatComponent item={item} />}
						keyExtractor={(item) => item.id}
					/>
					
				) : (
					<View style={styles.chatemptyContainer}>
						<Text style={styles.chatemptyText}>No rooms created!</Text>
						<Text>Click the + to create a new room</Text>
					</View>
				)}
			</View>
			{visible ? <Modal setVisible={setVisible} /> : ""}
		</SafeAreaView>
	);
};

export default Chat;