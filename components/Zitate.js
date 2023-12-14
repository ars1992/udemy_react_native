import { StyleSheet, Text, View } from "react-native";

export default function showZitat({text, autor}){
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={[styles.autor, styles.red]}>-- {autor}</Text>
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        paddingHorizontal: 2,
    },
    text: {
        fontSize: 36,
        marginBottom: 4,
        textAlign: "center",
    },
    red: {
        color: "red"
    },
    autor: {
        fontStyle: "italic",
        textAlign: "right",
    }
})