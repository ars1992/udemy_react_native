import { Modal, Pressable, TextInput, Text, StyleSheet, View } from "react-native";


export default function neuesZitat({ visible, onCancel }) {
    return (
        <Modal visible={visible} onRequestClose={onCancel}>
            <View style={styles.container}>
                <TextInput placeholder="Zitat" style={styles.input}></TextInput>
                <TextInput placeholder="Autor" style={styles.input}></TextInput>
                <Pressable style={[styles.button, styles.abbbrechen]} onPress={onCancel}>
                    <Text>abbrechen</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        width: "80%",
        padding: 10,
        marginBottom: 10,
        fontSize: 25,

    },
    button: {
        position: 'absolute',
        bottom: 50,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "cornflowerblue",
        padding: 10,
    },
    abbbrechen: {
        right: 20,
    },
})