import { StyleSheet } from "react-native";
import { COLORS } from '../core/COLORS'

export const styles = StyleSheet.create({
	loginscreen: {
		flex: 1,
		backgroundColor: COLORS.InputColor,
		alignItems: "center",
		justifyContent: "center",
		padding: 12,
		width: "100%",
	},
	loginheading: {
		fontSize: 23,
		marginBottom: 10,
        color:COLORS.secondaryColor,
        textAlign:'center'
	},
	logininputContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	logininput: {
		borderWidth: 1,
		width: "90%",
		padding: 8,
		borderRadius: 4,
	},
	loginbutton: {
		backgroundColor: COLORS.secondaryColor,
		padding: 12,
		marginVertical: 10,
		width: "60%",
		borderRadius: 15,
		elevation: 5,
	},
	loginbuttonText: {
		textAlign: "center",
		color: COLORS.fontPrimary,
		fontWeight: 'bold',
	},
	chatscreen: {
		flex: 1,
		//padding: 10,
		//position: "relative",
        backgroundColor: COLORS.InputColor,
	},
	chatheading: {
		fontSize: 24,
		fontWeight: "bold",
		color: COLORS.secondaryColor,
	},
	chattopContainer: {
		height: 70,
		width: "100%",
		padding: 10,
		justifyContent: "center",
		marginBottom: 15,
		elevation: 2,
        backgroundColor: COLORS.primaryColor,
	},
	chatheader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	chatlistContainer: {
		paddingHorizontal: 10,
	},
	chatemptyContainer: {
		width: "100%",
		height: "80%",
		alignItems: "center",
		justifyContent: "center",
        
	},
	chatemptyText: { fontWeight: "bold", fontSize: 24, paddingBottom: 30,color: COLORS.secondaryColor,},
	messagingscreen: {
		flex: 1,
	},
	messaginginputContainer: {
		width: "100%",
		minHeight: 100,
		backgroundColor: "white",
		paddingVertical: 30,
		paddingHorizontal: 15,
		justifyContent: "center",
		flexDirection: "row",
	},
	messaginginput: {
		borderWidth: 1,
		padding: 15,
		flex: 1,
		marginRight: 10,
		borderRadius: 20,
	},
	messagingbuttonContainer: {
		width: "30%",
		backgroundColor: "green",
		borderRadius: 3,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
	},
	modalbutton: {
		width: "40%",
		height: 45,
		backgroundColor: "green",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		color: "#fff",
	},
	modalbuttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
	},
	modaltext: {
		color: "#fff",
	},
	modalContainer: {
		width: "100%",
		elevation: 1,
		height: 250,
		backgroundColor: COLORS.primaryColor,
		position: "absolute",
		bottom: 0,
		zIndex: 10,
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
	modalinput: {
		padding: 10,
        backgroundColor: COLORS.InputColor,
	},
	modalsubheading: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 15,
		textAlign: "center",
        color:COLORS.secondaryColor
	},
	mmessageWrapper: {
		width: "100%",
		alignItems: "flex-start",
	},
	mmessage: {
		maxWidth: "50%",
		backgroundColor: COLORS.secondaryColor,
		padding: 12,
		borderRadius: 10,
		marginBottom: 2,
	},
	cchat: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 15,
		paddingHorizontal: 15,
		backgroundColor: COLORS.primaryColor,
		height: 70,
		marginBottom: 10,
	},
	cusername: {
		fontSize: 18,
		marginBottom: 7,
        paddingStart:10,
		fontWeight: "bold",
        color:COLORS.secondaryColor
	},
	cmessage: {
		fontSize: 14,
		opacity: 0.7,
        paddingStart:10,
        color:COLORS.secondaryColor
	},
	crightContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
	},
	ctime: {
		opacity: 0.5,
        color:COLORS.secondaryColor
	},
});
