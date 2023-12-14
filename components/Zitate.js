import { StyleSheet, Text } from "react-native";

export default function showZitat({text, autor}){
    return ( 
        <>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.autor}>-- {autor}</Text>
        </> 
    )
}

const styles = StyleSheet.create({
    text: {fontSize: 36},
    autor: {fontStyle: "italic"}
})