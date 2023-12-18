import { Pressable, StyleSheet, Text } from "react-native";


export default function generateBigButton({ titel, onPress, style }) {

    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.titel}>{titel}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "cornflowerblue",
        padding: 10,
    },
    titel: {
        fontSize: 25,
    }
})