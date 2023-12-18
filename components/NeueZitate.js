import { Modal, Pressable, TextInput, Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { useState } from "react";

export default function neuesZitat({ visible, onCancel, onSave }) {
    const [zitat, setZitat] = useState(null)
    const [autor, setAutor] = useState(null)

    return (
        <Modal visible={visible} onRequestClose={onCancel}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <TextInput
                    placeholder="Zitate" 
                    style={[styles.input, styles.inputZitat]} 
                    multiline={true} 
                    onChangeText={setZitat}>
                </TextInput>
                <TextInput
                    placeholder="Autor" 
                    style={styles.input} 
                    returnKeyType="done" 
                    onChangeText={setAutor}
                    onSubmitEditing={() => onSave(zitat, autor)}>
                </TextInput>
                <Pressable style={[styles.button]} onPress={onCancel}>
                    <Text>abbrechen</Text>
                </Pressable>
            </KeyboardAvoidingView>
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
        width: "90%",
        padding: 10,
        marginBottom: 10,
        fontSize: 25,

    },
    inputZitat: {
        height: 200,
        textAlignVertical: "top",
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "cornflowerblue",
        padding: 10,
    },

})