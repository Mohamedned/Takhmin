import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../componenten/PrimaryButton";

function StartGameScherm() {
    return (
        <View style={styles.imputContainer}>
            <TextInput style={styles.numberInput} maxLength={2}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScherm;

const styles = StyleSheet.create({
    imputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#725c8c",
        borderRadius: 8,
        elevation: 4, // Android
        shadowColor: "black", // iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowRadius: 6, // iOS
        shadowOpacity: 0.26, // iOS
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        textAlign: "center",
    }
});