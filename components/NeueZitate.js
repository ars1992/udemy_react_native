import { Modal, Pressable, TextInput, Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";


export default function neuesZitat({ visible, onCancel }) {
    return (
        <Modal visible={visible} onRequestClose={onCancel}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <TextInput placeholder="Zitat" style={[styles.input, styles.inputZitat]} multiline={true}></TextInput>
                <TextInput placeholder="Autor" style={styles.input} returnKeyType="done" onSubmitEditing={()=> alert(244)}></TextInput>
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
    inputZitat:{
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