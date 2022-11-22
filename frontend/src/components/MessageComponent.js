import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../utils/styles";

export default function MessageComponent({ item, user }) {
	const status = item.user !== user;

	return (
		<View>
			<View
				style={
					status
						? styles.mmessageWrapper
						: [styles.mmessageWrapper, { alignItems: "flex-end" }]
				}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>

					<Text style={{ marginRight: 4 }}>{item.user}</Text>
					<View
						style={
							status
								? styles.mmessage
								: [styles.mmessage, { backgroundColor: "#505269"}]
						}
					>
						<Text>{item.text}</Text>
                        
					</View>
                    <Text  style={{ paddingRight: 0 }}>{item.time}</Text>
				</View>	
			</View>
		</View>
	);
}