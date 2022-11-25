import { View, Text } from "react-native"
import React from "react";
import { styles } from "../utils/styles"
import { COLORS } from "../core/COLORS"

export default function MessageComponent({ item, user }) {
  const status = item.user !== user;

  return (
	<View>
	<View style={status? styles.mmessageWrapper: [styles.mmessageWrapper, { alignItems: "flex-end" }]}>
	<View style={{ flexDirection: "row", alignItems: "center" }}>
		<Text style={{ marginRight: 4,color: COLORS.placeholder }}>{item.user}</Text>
		<View style={status? styles.mmessage: [styles.mmessage, { backgroundColor: COLORS.primaryColor}]}>
			<Text style={{ color: 'white' }}>{item.text}</Text>
		</View>
		<Text  style={{color: COLORS.placeholder, paddingRight: 0 }}>{item.time}</Text>
	</View>	
	</View>
	</View>
	);
}